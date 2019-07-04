const mongoose = require('mongoose'); //requerir mongoose para poder usarlo
const schema = mongoose.Schema; //se crea el schema. Ese schema va con MAYUSCULA

//se crea el objeto schema
const miSchemaPersona = new schema({
	nombre: String,
	edad: Number
	//se ponen los campos que tiene la coleccion y sus tipos de datos
})

//se crea el modelo
const miModeloPersonas = mongoose.model('personas', miSchemaPersona);

//instancia de escritura (harcodeada)
const personaInsert = new miModeloPersonas({
	nombre: 'José',
	edad: 36
})

//permite conectar a base de datos, parametro es base de datos, en el {} es para usar el urlparser, el true es callback de conexion como si fuera un err en el listen.
mongoose.connect('mongodb://localhost/datapam', { useNewUrlParser: true }, err => {
	if (err) return console.log(`Error en la conexión con la base de datos. Error: ${err}.`)
	console.log('Base de datos conectada!')

	//buscar documentos: hay que crear un esquema JSON de como van a ser, sobre ese schema crear un modelo, que es una colección asociada a un schema.

	//usar el modelo. Se pone callback de err
	miModeloPersonas.find({}, (err, personas) => {
		if (err) return console.log(`error en lectura ${err}`);
		//foreach es un array method. Necesita un callback, que tiene un solo parametro
		personas.forEach(persona => {
			console.log(persona)
		});

		//escribir. Debe ser acá porque sino queda fuera de la lectura (callback hell a medida que se anidan):
		personaInsert.save(err => {
			if (err) return console.log(`error ${err} en escritura`)
			console.log('Persona insertada')

			// infierno de callbacks:
			miModeloPersonas.find({}, (err, personas) => {
				if (err) return console.log(`error en lectura ${err}`);

				personas.forEach(persona => {
					console.log(persona)
				});
			})
		})
	});
})
