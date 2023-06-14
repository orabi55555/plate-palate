//#region requires
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

//#endregion

//#region config
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
//#endregion

//#region Middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors());
//#endregion

//#region Root
app.get("/", (req, res) => {
  console.log("PlatePalate backend!");
  res.end();
});
//#endregion

//#region
// app.use("/register", userRoutes);

//#endregion

//#region Database Connetion
mongoose.connect(process.env.DATABASE);
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});
//#endregion

app.listen(PORT, () => {
  console.log(`Server is up : http://localhost:${PORT}`);
});
