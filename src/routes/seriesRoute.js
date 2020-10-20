const express = require("express")
const router = express.Router()
const controller = require("../controllers/seriesController")

// POST -  Adicionar as séries 

router.post("/", controller.postSerie)

// GET -  Listar todas as séries

router.get ("/", controller.getSeries)

// GET por id



//PUT
//PATCH



module.exports = router