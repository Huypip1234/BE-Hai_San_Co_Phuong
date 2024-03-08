import express from "express";
import { removeImage, uploadImage } from "../controller/imageController.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../config/cloudinaryConfig.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "haisancophuong-image",
    format: "jpg",
  },
});

const uploadMiddleWare = multer({ storage: storage });

router.post("/upload", uploadMiddleWare.array("images", 10), uploadImage);
router.delete("/remove/:publicId", removeImage);

export default router;
