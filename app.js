import 'dotenv/config.js'   //CONFIGURAR LAS VARIABLES DE ENTORNO DE LA APLICACION -- DOTENV SIEMPRE LINEA 1 --
import './config/database.js' //CONFIGURACION DE LA BASE DE DATOS -- DATABASE SIEMPRE LINEA 2 --
import express from'express'   //modulo necesario para levantar y configurar un servidor
import path from'path'  //modulo necesario para conocer la ubicacion de nuestro servidor
import logger from'morgan'  //modulo necesario para registrar las peticiones que se realizan al servidor
import cors from 'cors'   //Modulo para permitir origines cruzados (front con el back)
import { __dirname } from './utils.js'
import indexRouter from'./routes/index.js'  //Enrrutador principal de la aplicacion

let app = express()  //Defino una variable con la ejecucion del modulo de express para poder CREAR un servidor

// view engine setup
//VIEWS
//.set es un metodo que CONFIGURA algo
app.set('views', path.join(__dirname, 'views')) //Configuro que las vistas generadas en el backend estan en la carpeta VIEWS
app.set('view engine', 'ejs')  //Configuro que las vistas se van a definir con el lenguaje EJS (motor de plantilla) (lenguaje de generacion de vistas)

//MIDDLEWARES
//.use es un metodo que OBLIGA a (en este caso) mi aplicacion a usar algo (ejecutar una funcion) (Son funciones que se ejecutan con cada peticion y que van a PERMITIR/NO PERMITIR realizar algo)
app.use(logger('dev'))  //OBLIGA al servidor a usar el middleware de registro de peticiones
app.use(express.json()) //OBLIGA al servidor a transformar/manejar formatos json (post/put)
app.use(express.urlencoded({ extended: false }))  //OBLIGA al servior a acceder a consultas complejas (permite leer queries y params d una peticion)
app.use(express.static(path.join(__dirname, 'public')))  //OBLIGA al servidor a generar una carpeta de accesos PUBLICO (solo carpeta public)
app.use(cors())     //Obliga al servidor a permitir el cruce de origenes de front/back

//ENDPOINTS
app.use('/api', indexRouter)   //OBLIGO al servidor a usar las rutas definidas en el enrrutador principal con la palabra "/api" (por default esta siempre "/")

export default app //exporta app