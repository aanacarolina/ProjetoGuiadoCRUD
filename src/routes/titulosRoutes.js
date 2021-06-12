const express = require("express")
const router = express.Router()
const controller = require("../controllers/titulosController")

//Cria um titulo --> POST --> save()
router.post("/", controller.criaTitulo)

//Ler todos os titulos --> GET --> find()
router.get("/", controller.mostraTitulos)

//ler todos os títulos da marvel --> GET --> find()
router.get("/marvel", controller.mostraTitulosMarvel)

//Ler todos os títulos da Ghibli -> Get - find()
router.get('/ghibli', controller.mostraTitulosGhibli)

//Ler todos os títulos da Pixar -> Get - find()
router.get('/pixar', controller.mostraTitulosPixar)

//rota  update --> PATCH  --> findOne() getById() save()
router.patch('/:id', controller.atualizaTitulo)

//rota delete --> DELETE --> findOne() getById() remove()
router.delete('/:id', controller.deletaTitulo)

module.exports = router