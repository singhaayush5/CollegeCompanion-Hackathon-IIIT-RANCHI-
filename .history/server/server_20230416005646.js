const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const options = {
  origin: "http://127.0.0.1:5173",
  useSuccessStatus: true,
};
app.use(cors(options));
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
app.use(express.json());
app.use(require("./router"));
connectDB();

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
