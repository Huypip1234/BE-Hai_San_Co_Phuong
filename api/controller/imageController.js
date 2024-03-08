import cloudinary from "../config/cloudinaryConfig.js";

export const uploadImage = async (req, res) => {
  try {
    const images = req.files.map((file) => file.path);
    const uploadedImage = [];

    for (let image of images) {
      const results = await cloudinary.uploader.upload(image);
      console.log(results);
      uploadedImage.push({
        url: results.url,
        publicId: results.public_id,
      });
    }
    return res
      .status(200)
      .json({ message: "Upload image successfully", data: uploadedImage });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ name: error.name, message: error.message });
  }
};

export const removeImage = async (req, res) => {
  try {
    const publicId = req.params.publicId;
    const results = await cloudinary.uploader.destroy(publicId);
    if (results.result === "not found") {
      throw new Error("Image not found -> Delete Failed");
    }
    return res.status(200).json({ message: "Delete image successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ name: error.name, message: error.message });
  }
};
