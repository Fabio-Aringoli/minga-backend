//Para usar esto, hay que INSTALAR mongoose, en la consola ponemos npm i mongoose
import {connect} from 'mongoose'
connect(process.env.LINK_DATABASE)  //conecto con el link de la db guardado en la variable de entorno del archivo .env
    .then(()=>console.log('connected to database'))  //devuelve una promesa por lo que es necesario configurar
    .catch(err=>console.log(err)) //then y catch