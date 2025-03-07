// routes/categoryRoutes.js
const express = require("express");
const { addCategory , getCategories  } = require("../../Controller/Category/categoryController");
const router = express.Router();

router.post("/add", addCategory);
router.get("/all", getCategories);


module.exports = router;
