const express = require("express");
const router = express.Router();
const controller = require("../controller/seriesController");

router.post("/", controller.newSerie);
router.get("/", controller.getSeries);
router.get("/:id", controller.serieById);

//PUT
router.put("/:id", controller.updateSerie);

//PATCH

module.exports = router;
