import mongoose from "mongoose";

const connect = async (req, res) => {
  try {
    console.log("Connecting...");
    /* let connection = await mongoose.connect(
      "mongodb+srv://huydeptrai:14120042003bB@cluster0.hy9v3jy.mongodb.net/haisancophuong?retryWrites=true&w=majority"
    ); */
    console.log("Connected to database!");
    return connection; //return void
  } catch (error) {
    /* res.status(500).json({
      message: "Error Server cmnr",
    }); */
    console.log("Error cmnr: " + error);
    //throw new Error("Fail to connect to DB cmnr");
  }
};

export default connect;
