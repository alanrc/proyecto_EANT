let http = require("http")
let fs = require("fs")



http.createServer(function (peticion, respuesta) {

	let archivo = peticion.url  //  <---- /index.html   se esta guardando..
	// archivo = archivo.substr(1)

	fs.readFile("public" + archivo, function (error, file){
		//if (error == true)
		if (error) {
			respuesta.end("404 - Archivo no encontrado :(")
		} else {
			respuesta.end(file)
		}
	})
	// respuesta.end(`usted solicito el siguiente archivo:  ${archivo}`)

}).listen(80)

