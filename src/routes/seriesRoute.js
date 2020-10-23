const express = require("express");
const router = express.Router();
const controller = require("../controller/seriesController");

router.post("/", controller.newSerie)
router.get("/", controller.getSeries)
router.get("/:id", controller.serieById)
router.put("/:id", controller.updateSerie)
router.delete("/:id", controller.deleteSerie)
router.patch("/series/:id/liked", controller.likedSerie)


//Contratos além e avante


module.exports = router;
