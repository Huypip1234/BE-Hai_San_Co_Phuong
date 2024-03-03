import mongoose, { Schema, ObjectId } from "mongoose";

export const productInfoModel = mongoose.model(
  "products",
  new Schema({
    id: { type: ObjectId },
    image: String,
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
    description: {
      type: String,
      required: true,
    },
  })
);
