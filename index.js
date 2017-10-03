'use strict'//usar el modo estricto de javascript para avitar problemas en el futuro

//El objeto app es el que controla el ciclo de vida de la aplicacion, como el reseteo, el detenerla
const { app } = require ('electron')

//El objeto BrowserWindow es el que nos permite cargar todo el contenido visual de la aplicación de escritorio.

console.dir(app)

//Esuchamos un evento basico que se ejecuta antes de que el aplicativo se ejecuta
app.on('before-quit', () => {
	console.log('Saliendo...')

})

app.quit()