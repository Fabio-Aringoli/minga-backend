import { Schema, model } from 'mongoose'

//Cluster: conjunto de base de datos (el link de mongo que obitenen es de claster)
//DataBase: conjunto de colecciones (coleccion hace referencia a recursos y recursos hace referencia a los modelos de datos que necesita mi app)
//coleccion: conjunto de documentos
//colecciones: usuarios, capitulos, productos,  carritos(segun los recursos qe necesite la app) 
//Documento: llamamos documento al dato
// el array de eventos que se fetcheaba en amazin-events me traia TODA la colecccion de eventos
//cada objeto de ese array era un documento en la coleccion

let collection = 'users' 
//los nombres de las colecciones van siempre en plural (porque son un conjunto de)
// van siempre en ingles
//tienen que ser descriptivos del recurso
//recurso category => coleccion categories
//recurso author => coleccion authors
let schema = new Schema( 
    //defino el primer objeto con las propiedades necesarias para el modelo
    {
    email: {type:String,required:true},
    password: {type:String,required:true},
    photo: {type:String,required:true},
    role: {type:Number,required:true},
    online: {type:Boolean},
    verified: {type:Boolean,required:true},
    verify_code: {type:String,required:true}
    },
    //Timestamps
    {timestamps:true}
)
//Creo el modelo CON LA PRIMER LETRA MAYUSCULA
let User = model(collection,schema)
//lo exportamos
export default User