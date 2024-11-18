const router = require("express").Router();

router.use("/cities", require("./city-routes"));
router.use("/airports", require("./airport-routes"));
router.use("/flights", require("./flight-routes"));

module.exports = router;
