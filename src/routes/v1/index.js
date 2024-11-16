const router = require("express").Router();

router.use("/cities", require("./city-routes"));

module.exports = router;
