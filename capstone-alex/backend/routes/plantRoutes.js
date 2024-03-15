const express = require("express");
const router = express.Router();
const plantController = require("../controllers/plantController");

router.get("/", (req, res) => {
  plantController.getPlant(res);
});
router.post("/", plantController.fetchAndSavePlants);

module.exports = router;
