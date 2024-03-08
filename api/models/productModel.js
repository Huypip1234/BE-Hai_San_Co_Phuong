import mongoose, { Schema, ObjectId } from "mongoose";

export const productModel = mongoose.model(
  "products",
  new Schema({
    id: { type: ObjectId },
    image: {
      url: String,
      public_id: String,
    },
    title: {
      type: String, //type
      required: true, //required
      validate: {
        //validate
        validator: (value) => value.length > 3,
        // Message
        message: "Title must be at least 3 characters",
      },
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
);
