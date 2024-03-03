import { productInfoModel } from "../models/productModel.js";

export const getAllProduct = async () => {
  let allProduct = await productInfoModel.find({});
  return allProduct;
};

export const addProduct = async ({ title, image, description }) => {
  const productAdded = await productInfoModel.create({
    title,
    image,
    description,
  });
  return productAdded;
};

export const updateProduct = async ({
  id,
  name,
  age,
  height,
  weight,
  image,
}) => {
  const product = await productInfoModel.findById(id);

  product.name = name ?? product.name;
  product.age = age ?? product.age;
  product.height = height ?? product.height;
  product.weight = weight ?? product.weight;
  product.image = image ?? product.image;

  await product.save();
  return product;
};

export const getProductDetail = async (id) => {
  let productDetail = await productInfoModel.findById(id);
  return productDetail;
};

export const deleteProduct = async (id) => {
  const productDeleted = await productInfoModel.deleteOne({ _id: id });
  return productDeleted;
};
