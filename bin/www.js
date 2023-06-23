import app  from'../app.js' //Importo la aplicacion del back configurada
import debug  from'debug' //Importo el modulo para debugear
import http  from'http' //Importo el modulo para crear servidores
/* const logger = debug("") */

//utiliza normalizePortpara normalizar el puerto
let port = normalizePort(process.env.PORT || '8080')    //Defino el puerto donde va a funcionar nuestro servidor
//defino un operador OR || para normalizar el puerto porque cuando hostee/deployee el servidor el hosting me va a asignar el puerto que tenga libre para mi app

app.set('port', port)   //Configuro el puerto con la variable (let) port definida anteriormente

let server = http.createServer(app) // Utilizo el modulo HTTP para crear un servidor (con las configuracion que se realizaron en app)

function ready(){                   //Ready es una funcion que se va a ejecutar cuando se levante correctamente el servior
  console.log("server ready on port " + port);    //me informa en la consola que el servidor se levanto correctamente en el 
}


//listen se utiliza para escuchar un puerto y es el encargado de levantar efectivamente el servidor
server.listen(
  port,   //Primer paramento necesario el puerto donde tiene que funcionar el servidor (empieza a funcionar)
  ready   //Segundo parametro CALLBACK opcional para mostrar en consola que el servidor esta funcionando
  )
server.on('error', onError) 
server.on('listening', onListening)


function normalizePort(val) {
  let port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address()
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}
