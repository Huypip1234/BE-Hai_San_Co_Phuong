import * as productRepository from "../repositories/Repositorie.js";

export const getAllProduct = async (req, res) => {
  try {
    let data = await productRepository.getAllProduct();
    res.status(200).json({
      message: "Getting all product successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};

export const addProduct = async (req, res) => {
  try {
    let data = await productRepository.addProduct(req.body);
    res.status(200).json({
      message: "Add new product Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    let data = await productRepository.updateProduct(req.body);
    res.status(200).json({
      message: "Edit product Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.errors.name.message,
    });
    console.log("Error cmnr: " + error);
  }
};

export const getProductDetail = async (req, res) => {
  try {
    let data = await productRepository.getProductDetail(req.params.id);
    res.status(200).json({
      message: "Get product Detail Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    let data = await productRepository.deleteProduct(req.params.id);
    res.status(200).json({
      message: "Delete product Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};