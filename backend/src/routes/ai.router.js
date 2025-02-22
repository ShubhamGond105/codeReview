const express = require("express");
const aiController = require("../controllers/ai.controller");
const router = express.Router();

// ✅ Use POST instead of GET
router.post("/get-review", aiController.getReview);

module.exports = router;
