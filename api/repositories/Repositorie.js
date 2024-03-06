import { productModel } from "../models/productModel.js";

export const getAllProduct = async () => {
  let allProduct = await productModel.find({});
  return allProduct;
};

export const addProduct = async ({ title, image, price, description }) => {
  const productAdded = await productModel.create({
    title,
    image,
    price,
    description,
  });
  return productAdded;
};

export const editProduct = async ({ id, title, price, image, description }) => {
  const product = await productModel.findById(id);

  product.title = title ?? product.title;
  product.price = price ?? product.price;
  product.image = image ?? product.image;
  product.description = description ?? product.description;

  await product.save();
  return product;
};

export const getProductDetail = async (id) => {
  let productDetail = await productModel.findById(id);
  return productDetail;
};

export const deleteProduct = async (id) => {
  const productDeleted = await productModel.deleteOne({ _id: id });
  return productDeleted;
};
