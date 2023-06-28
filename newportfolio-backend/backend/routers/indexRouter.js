const express = require("express");
const router = express.Router();
const ctrlIndex = require("../controllers/indexController");
router.get("/", ctrlIndex.get);
module.exports = router;
