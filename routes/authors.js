import { Router } from "express";
import read from '../controllers/authors/read.js'

const author_router = Router();

//author_router.post()      //crea el arcivho
author_router.get("/",read)  //leer el archivo (TODOS o SOLO UNO) autores
//author_router.put()       //actualizar un autor
//author_router.delete()    //elimina un autor

export default author_router;
