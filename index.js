'use strict'//usar el modo estricto de javascript para avitar problemas en el futuro

//El objeto app es el que controla el ciclo de vida de la aplicacion, como el reseteo, el detenerla
//El objeto BrowserWindow es el que nos permite cargar todo el contenido visual de la aplicación de escritorio.
const { app, BrowserWindow } = require ('electron')

//Esuchamos un evento basico que se ejecuta antes de que el aplicativo se ejecuta
app.on('before-quit', () => {
	console.log('Saliendo...')

})

app.on('ready', () => {
	//Creamos una ventana basica
	let win = new BrowserWindow()

	win.on('closed', () => {
		//Lo ponemos como nulo para que no se quede memoria en uso
		win = null
		//Terminamos con la ejecucion de mi aplicativo
		app.quit()
	})
})