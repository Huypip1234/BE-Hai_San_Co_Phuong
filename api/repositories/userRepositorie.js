import { userModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const login = async ({ userName, password }) => {
  // If found UserName
  let existingUser = await userModel.findOne({ userName }).exec();
  if (!!existingUser) {
    // not encrypt password!
    // If match password
    // let isMatch = await bcrypt.compare(password, existingUser.password); -> ko dùng vì đã lưu password ko mã hóa
    let isMatch = password === existingUser.password;
    if (!!isMatch) {
      //Create Json Web Token (JWT)
      let token = jwt.sign(
        //3 params: payload, secret key, option
        {
          data: existingUser,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "365d", // 60 = 1 minute
        }
      ); //return string
      return {
        ...existingUser._doc, // or .toJSON() or .toObject()
        password: "not show",
        token: token,
      };
    } else {
      throw new Error("Tài khoản hoặc mật khẩu không đúng!");
    }
  } else {
    throw new Error("Tài khoản hoặc mật khẩu không đúng!");
  }
};

export const getDetailUser = async (id) => {
  let userDetail = await userModel.findById(id);
  return {
    ...userDetail._doc, // or .toJSON() or .toObject()
    password: "not show",
  };
};
