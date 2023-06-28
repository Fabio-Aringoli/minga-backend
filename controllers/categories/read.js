import Category from "../../models/Category.js";

export default async (req, res) => {    
    try {
        let all = await Category.find();              //espero la busqueda de todos los autores / VA A SER UN ARRAY
        if (all.length > 0) {                       //asi que le agregamos .length > 0
            //que le devolvemos al cliente si tiene exito?
          return (
            res.status(200).json({                  //envio al cliente una respuesta con los datos que quiera
              response: all,
              success: true,
              message: "you have requested GET /api/categories/",
              date: new Date(),
            })
          )
        }else{
            //que le devolvemos al cliente si no tiene exito?
            return res.status(404).json({           //envio al cliente OTRA respuesta con los datos que quiera
                response:null,
                success:false,
                message: 'not found categories',
                date: new Date
            })
        }
      } catch (error) {
        //que devolvemos si hay un error?
        console.log(error)                          //consologeo el error
        return res.status(500).json({               //envio al cliente OTRA respuesta con los datos que quiera
            response:null,
            success:false,
            message:error.message
        })
      }
    }