import express from 'express'
import author_router from './authors.js'
import category_router from './categories.js'
import mangas_router from './mangas.js'
import chapter_router from './chapters.js'
import auth_router from './users.js'


let router = express.Router()


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})


router.use('/authors', author_router)       //obligo al enrutador principal a usar la ruta de autores con la palabrita '/authors'
router.use('/categories', category_router)  //obligo al enrutador principal a usar la ruta de categorias con la palabrita '/categories'
router.use('/mangas', mangas_router)        //obligo al enrutador principal a usar la ruta de mangas con la palabrita '/mangas'
router.use('/chapters', chapter_router)     //obligo al enrutador principal a usar la ruta de chapters con la palabrita '/chapters'
router.use('/auth', auth_router)            //obligo al enrutador principal a usar la ruta de users con la palabrita '/chapters'

export default router