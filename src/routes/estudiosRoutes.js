const express = require('express')
const router = express.Router()
const controller = require("../controllers/estudiosController")


//rota  create --> POST --> save()
router.post("/", controller.criaEstudio) 

//rota read --> GET --> find()
router.get("/", controller.mostraEstudios) 

//rota  update --> PATCH  --> findOne() getById() save()
router.patch('/:id', controller.atualizaEstudio)

//rota delete --> DELETE --> findOne() getById() remove()
router.delete('/:id', controller.deletaEstudio)


module.exports = router