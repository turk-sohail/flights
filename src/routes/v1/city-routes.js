const express = require("express");
const { cityController } = require("../../controllers");
const router = express.Router();

router.get("/", cityController.getAll);
router.get("/:id", cityController.getCityById);
router.post("/", cityController.create);
router.patch("/:id", cityController.updateCity);
router.delete("/:id", cityController.deleteCity);
router.post("/bulk", cityController.createMany);

module.exports = router;
