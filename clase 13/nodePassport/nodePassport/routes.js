// ------------------------------------------------------------------------------
//  ROUTING
// ------------------------------------------------------------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  INDEX
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getRoot(req, res) {} //loguin se activa cuando se entra a la página de login, porque en las views hay un index.html. Ese index redirecciona, es un puente

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  LOGIN
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getLogin(req, res) { //cuando se entra a la página de login hace esto
    if (req.isAuthenticated()) { //los datos de sesion de usuario vienen por req, en req los inyecta passport
        //refresca navegador, si está logueado crea la pagina login-ok, si no está logueado vuelve a login
        var user = req.user; //en req.user passport inyecta todos los datos de la base de datos
        console.log('user logueado');
        res.render('login-ok', { //entra a la pagina que muestra los datos de login.
            usuario: user.username,
            nombre: user.firstName,
            apellido: user.lastName,
            email: user.email
        });
    } else { //si no está logueado y no hay cookie, redirige acá. Entra acá si pasaron los 20 segundos para el logout
        console.log('user NO logueado');
        res.sendFile(__dirname + '/views/login.html');
    }
}

function getSignup(req, res) {
    res.sendFile(__dirname + '/views/signup.html');
}


function postLogin(req, res) {
    var user = req.user;
    //console.log(user);

    //grabo en user fecha y hora logueo
    res.sendFile(__dirname + '/views/index.html');
}

function postSignup(req, res) {
    var user = req.user;
    //console.log(user);

    //grabo en user fecha y hora logueo
    res.sendFile(__dirname + '/views/index.html');
}

function getFaillogin(req, res) { //esto se pasa a server en el 192
    console.log('error en login');
    res.render('login-error', {}); //no tiene datos, no los requiere, por eso los {} vacíos
}

function getFailsignup(req, res) {
    console.log('error en signup');
    res.render('signup-error', {});
}



function getLogout(req, res) {
    req.logout();
    res.sendFile(__dirname + '/views/index.html');
}

function failRoute(req, res) {
    res.status(404).render('routing-error', {});
}

module.exports = { //este es un objeto que se llama después como routes
    getRoot,
    getLogin,
    postLogin,
    getFaillogin,
    getLogout,
    failRoute,
    getSignup,
    postSignup,
    getFailsignup
}