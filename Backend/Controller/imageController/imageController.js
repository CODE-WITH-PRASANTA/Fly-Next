const cloudinary = require("../../Config/cloudinaryConfig/cloudinaryConfig");
const Image = require("../../Model/Image/Image");
const fs = require("fs");
const path = require("path");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads", // Cloudinary folder name
    });

    // Store the image URL and public_id in the database
    const newImage = new Image({
      url: result.secure_url,
      public_id: result.public_id,
    });

    await newImage.save();

    // Remove file from local storage
    fs.unlinkSync(req.file.path);

    res.status(201).json({ message: "Image uploaded successfully", image: newImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "Invalid or missing image ID" });
    }

    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    if (!image.public_id) {
      return res.status(400).json({ error: "Image has no public_id in Cloudinary" });
    }

    // Delete from Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.destroy(image.public_id);

    if (!["ok", "not found"].includes(cloudinaryResponse.result)) {
      return res.status(500).json({ error: "Failed to delete image from Cloudinary" });
    }

    // Remove from database
    await Image.findByIdAndDelete(id);

    res.status(200).json({ message: "Image deleted successfully from Cloudinary & database" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ error: "Server error" });
  }
};
