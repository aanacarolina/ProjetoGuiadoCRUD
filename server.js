const express = require ("express")
const app = express()

//conectar db
const db = require("./src/data/database")
db.connect()

//usar rotas
const titulo = require("./src/routes/titulosRoutes")
const estudio = require("./src/routes/estudiosRoutes")

app.use(express.json())

app.use("/titulos", titulo)
app.use("/estudios", estudio)

app.listen(3333, ()=>console.log("Servidor rodando"))