const express = require("express");
const upload = require("../../Config/Multer-config/Multer-config");
const { uploadImage, getImages, deleteImage } = require("../../Controller/imageController/imageController");


const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.get("/images", getImages);
router.delete("/delete/:id", deleteImage);

module.exports = router;
