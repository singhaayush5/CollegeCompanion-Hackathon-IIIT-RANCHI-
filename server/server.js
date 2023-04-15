const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
app.use(require("./router"));
/*

const morgan = require("morgan");

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

var cors = require("cors");

app.use(cors());
mongoose.set("strictQuery", true);


app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("BackEnd");
});
app.use(morgan("tiny"));
// Connection with MongoDB
connectDB();

//Parse Request to the Body
// app.use(bodyparser.urlencoded({ extended: true }));

// To Load The routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Attendance Backend is running at http://localhost:${PORT}`);

});*/
connectDB();


app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
});