import express from "express";
import { config } from "dotenv";
config();
import connect from "./database/database.js";
import productRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";
import bodyParser from "body-parser";
import checkToken from "./authentication/auth.js";
import cors from "cors";

const app = express();

// Fixed Payload too large (must put on the top before express.json())
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(express.json());

/* Middle Ware */
app.use(cors()); // cors
app.use(checkToken); // JWT checker

app.use(function (req, res, next) {
  //CORS: Allow all access
  res.header("Access-Control-Allow-Origin", "*"); // web url
  res.header("Access-Control-Allow-Headers", "*"); // authorize,...
  res.header("Access-Control-Allow-Methods", "*"); // post, get ...
  next();
});
/* End Middle Ware */

/* Router */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Getting api successfully",
  });
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/product", productRouter);
app.use("/user", userRouter);
/* End Router */

app.listen(3003, async () => {
  await connect();
  console.log(`Listening on port: http://localhost:3000`);
});
