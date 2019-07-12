const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars'); //motor de plantillas. Mezcla datos con templates de html.

// ------------------------------------------------------------------------------
//  PASSPORT
// ------------------------------------------------------------------------------
const passport = require('passport'); //libreria para manejar sesiones de usuario y de expres, login, etc
const bCrypt = require('bCrypt'); //librería de encriptacion de contraseñas
const LocalStrategy = require('passport-local').Strategy; //debe instalarse esta también
const routes = require('./routes');
const config = require('./config');
const controllersdb = require('./controllersdb');
const User = require('./models'); //modelo para salvar usuarios en base de datos. En mongoDB se hace un schema, del schema se van a hacer con eso como molde los objetos


// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
// passport/login.js

passport.use('login', new LocalStrategy({ //passport tiene un use. Local permite elegir una estrategia, que se debe configurar en el password main. Se configura como se configuraría rutas con express
        passReqToCallback: true //las estrategias tienen nombre, este es el nombre de esta. Es true para que la funcion que viene abajo soporte callbacks
    },
    function(req, username, password, done) { //Cuando se pide la estrategia de login llama a esta funcion. Necesita post y necesita que username y password se respeten en ese orden. El done es un callback para ver lo que pasó. Chequea si usuario existe
        // check in mongo if a user with username exists or not
        User.findOne({ 'username': username }, //busca en modelo de la base de datos User en mongo. FindOne es un metodo de mongo. Busca y muestra el primero que coincide. La estrategia de busqueda es que username coincida con username. Si coincide, llama al callback
            function(err, user) {
                // In case of any error, return using the done method
                if (err) //primero se fija si hubo error
                    return done(err); //si hubo error llama al callback, retorna error y corta
                // Username does not exist, log error & redirect back
                if (!user) { //si no encuentra usuario, emite mensaje de error y llama al callback null
                    console.log('User Not Found with username ' + username);
                    return done(null, false,
                        //req.flash('message', 'User Not found.'));                 
                        console.log('message', 'User Not found.'));
                }
                // User exists but wrong password, log the error 
                if (!isValidPassword(user, password)) { //verifica si la contraseña es válida, retorna al callback con un false igual que si no hubiera usuario. Usa operación contraria a createHash
                    console.log('Invalid Password');
                    return done(null, false,
                        //req.flash('message', 'Invalid Password'));
                        console.log('message', 'Invalid Password'));
                }
                // User and password both match, return user from 
                // done method which will be treated like success
                return done(null, user); //acá termina la estrategia. Llama null porque es el código de error, y devuelve el user, que no es false. Lo pasa a linea 191
            }
        );
    }));

var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password); //el password nunca se desencripta y expone, el comparar lo hace el Bcrypt con una funcion de comparacion pero interna
}



passport.use('signup', new LocalStrategy({ //estrategia de signup
            passReqToCallback: true
        },
        function(req, username, password, done) {
            findOrCreateUser = function() { //acá se crea una funcion dentro de la funcion. Se va a llamar en 106, en el nextTick
                    // find a user in Mongo with provided username
                    User.findOne({ 'username': username }, function(err, user) { //busca en la base de usuarios para ver si el usuario existe
                        // In case of any error return
                        if (err) {
                            console.log('Error in SignUp: ' + err);
                            return done(err);
                        }
                        // already exists
                        if (user) { //si hay usuario, no permite registrarlo de nuevo
                            console.log('User already exists');
                            return done(null, false,
                                //req.flash('message','User Already Exists'));
                                console.log('message', 'User Already Exists'));
                        } else { //si no hay usuario, ahí permite crear el usuario
                            // if there is no user with that email
                            // create the user
                            var newUser = new User(); //similar a mongoWrite, hay un modelo y lo usa para crear un objeto vacío al que se le crea la data
                            // set the user's local credentials
                            newUser.username = username; //username y password entran directamente a la funcion, son datos fijos. Los otros 3 son datos variables
                            newUser.password = createHash(password); //el hash es la encriptación, se hace con el bCrypt en 110
                            newUser.email = req.param('email'); //recupera y salva estos datos
                            newUser.firstName = req.param('firstName');
                            newUser.lastName = req.param('lastName');

                            // save the user
                            newUser.save(function(err) { //esto es mongo
                                if (err) {
                                    console.log('Error in Saving user: ' + err);
                                    throw err;
                                }
                                console.log('User Registration succesful');
                                return done(null, newUser); //retorna newUser si salió todo bien
                            });
                        }
                    });
                }
                // Delay the execution of findOrCreateUser and execute 
                // the method in the next tick of the event loop
            process.nextTick(findOrCreateUser); //llama a la funcion en el siguiente tick de js.
        }))
    // Generates hash using bCrypt
var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null); //es un numero aleatorio, una seed aleatoria que se mezcla con la password que se mezcla y no se puede desencriptar. Retorna ese hash y ese es el que se usa para salvar en la base de datos.
}


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, done) { //serializar y deserializar son de passport, las expone para pedir el id que se va a utilizar. Passport pide que cada elemento tenga un _id propio. Se entra a estas funciones cuando se aprieta refresh.
    done(null, user._id);
});

passport.deserializeUser(function(id, done) { //busca en base de datos un determinado usuario por ID. Se genera la estrategia para buscar con ID y devolver el usuario. Esto permite no usar solamente mongo, se pueden poner las cosas que se quieren usar.
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


// ------------------------------------------------------------------------------
//  EXPRESS
// ------------------------------------------------------------------------------

const app = express();
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' })); //aca se usa el motor de plantillas, se inicializa aca. Layout Default general el html mezclado con datos que se va a enviar al front. Se le pide que use un main, aunque no exista ese archivo dentro de los viewa. Los hbs no tienen heads, porque se inyectan en el layouts/main. Las plantillas se ponen ahí como cuerpo de documento
app.set('view engine', '.hbs');


var port = process.env.PORT || 8080,
    ip = process.env.IP || '0.0.0.0';

app.use(express.static(__dirname + '/views'));
app.use(require('cookie-parser')()); //cookie parser parsea las cookies que se envían al back
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('express-session')({ //usa sesiones de express
    secret: 'keyboard cat', //codigo secreto para generar la firma en el session id.
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: config.TIEMPO_EXPIRACION //en cuánto expira
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize()); //inicializar con passport
app.use(passport.session()); //usar sesiones de passport

app.use(function(req, res, next) { //tests para ver toda la data de navegador, se puede descomentar
    /*
    console.log('-- session --');
    console.log(req.session);
    console.log('-- headers --');
    console.log(req.headers.cookie);
    console.log('-------------');
    console.log('-- cookies --');
    console.log(req.cookies);
    console.log('-------------');
    console.log('-- signed cookies --');
    console.log(req.signedCookies);
    console.log('-------------');
    */
    next()
});


// ------------------------------------------------------------------------------
//  ROUTING GET POST
// ------------------------------------------------------------------------------
//  INDEX

app.get('/', routes.getRoot);

//  LOGIN
app.get('/login', routes.getLogin); //login y signup son estrategias. Routes es un objeto, que es exportado por el modulo routes.
app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), routes.postLogin);
app.get('/faillogin', routes.getFaillogin); //chequear y permite que express alcance o no. Si falla va a la ruta de falla. El failureRedirect en el medio es como poner el next. Postlogin es éxito, getFaillogin es fracaso. No llama a postLogin si falla, llama a faillogin, que está en routes 51

//  SIGNUP
app.get('/signup', routes.getSignup); //estrategia de signUp 
app.post('/signup', passport.authenticate('signup', { failureRedirect: '/failsignup' }), routes.postSignup); //estrategia parecida a login
app.get('/failsignup', routes.getFailsignup);


function checkAuthentication(req, res, next) { //inyecta esta funcion en el requerimiento
    if (req.isAuthenticated()) {
        //req.isAuthenticated() will return true if user is logged in
        next(); //si está autenticado devuelve next
    } else { //si no está autenticado devuelve login
        res.redirect("/login");
    }
}

app.get('/ruta-protegida', checkAuthentication, (req, res) => { //ruta protegida, solo puede entrarse si está logueado. Pasa primero por el checkAuthentication antes de hacer el req res
    //do something only if user is authenticated
    var user = req.user;
    console.log(user);
    res.send('<h1>Ruta OK!</h1>'); //no se ve este mensaje sin login
});


//  LOGOUT
app.get('/logout', routes.getLogout); //estrategia de logout

//  FAIL ROUTE
app.get('*', routes.failRoute); //estrategia de fail


// ------------------------------------------------------------------------------
//  LISTEN SERVER
// ------------------------------------------------------------------------------
controllersdb.conectarDB(config.URL_BASE_DE_DATOS, err => { //conectar a la base de datos

    if (err) return console.log('error en conexión de base de datos', err);
    console.log('BASE DE DATOS CONECTADA');

    app.listen(port, function(err) { //si conecta bien, escucha el servidor
        if (err) return console.log('error en listen server', err);
        console.log(`Server running on port ${port}`);
    });
});