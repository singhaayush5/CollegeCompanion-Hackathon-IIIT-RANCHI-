const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

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

// app.use(express.static("public"));
// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

app.use(require("./router"));
connectDB();

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
