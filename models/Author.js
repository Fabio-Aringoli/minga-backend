import { Schema,model,Types } from "mongoose";

// UNA COLECCION ES UN CONJUNTO DE DOCUMENTOS
// UNA BASE DE DATOS ES UN CONJUNTO DE COLECCIONES (collection) 
// UN CLUSTER ES UN CONJUNTO DE BASE DE DATOS

let collection = "authors"
let schema = new Schema ({  // declaramos EL MOLDE  que va a tener cada documento, la forma uqe va a temer cada usario
    name:{type:String,required:true},
    last_name:{type:String},
    city:{type:String,required:true},
    country:{type:String,required:true},
    date:{type:Date},
    photo:{type:String,required:true},
    user_id:{
        type:Types.ObjectId,  //tipo de dato especial de mongo el objectid guarda la informacion encriptada del documento (se agrega en el import)
        ref:"users", //nombre de la coleccion a la cual pertenecen los ids (nombre de la coleccion a la cual se quiere REFERENCIAR/RELACIONAR)
        required:true
    },
    active: {type:Boolean,default:false} //default es un parametro que hace que: si el usuario envia el dato, lo usa y en caso contrario usa el valor predeterminado de esta propiedad
},{
    timestamps:true
})

//definimos el modelo y le pasamos como argumentos la coleccion y el schema
const Author = model(collection,schema)

//exportamos para poder usarla
export default Author