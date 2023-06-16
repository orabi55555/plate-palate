//#region requires
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
mongoose.set("strictQuery", false);
const authController = require("./Controllers/AuthController");
const userRoutes = require("./Routes/UserRoutes");
const app = express();
const User = require("./Models/UserModel");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;



app.use(bodyParser.json());


// const Recipe = require("./Routes/RecipeRoutes");
// Router
const userRouter=require("./Routes/UserRoutes");

const foodRouter=require("./Routes/FoodRoutes");

const Recipe=require("./Routes/RecipeRoutes");

const Country=require("./Routes/CountryRoutes");
//#endregion

//#region config
dotenv.config( {
  
});
const PORT = process.env.PORT || 7000;

dotenv.config();
const PORT = process.env.PORT || 7000;
const app = express();
mongoose.connect(process.env.DATABASE);
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});
//#endregion
//#endregion

//#region Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
//#endregion

//#region Root
app.get("/", (req, res) => {
  console.log("PlatePalate backend!");
  res.end();
});

app.use("/api/v1/users", userRoutes);

//#endregion

//#region Food
// const FoodRoutes = require("./Routes/FoodRoutes");
// app.use("/api/food", FoodRoutes);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// Routes
app.use("/api/profile", userRouter);
app.use("/api/Food", foodRouter);
app.use("/api/Recipe", Recipe);
app.use("/api/Country", Country);
// app.use("/recipes", Recipe);

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
  module.exports = app;