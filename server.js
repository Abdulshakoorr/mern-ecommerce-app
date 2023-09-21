import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

import DB_Connection from "./config/dbConnection.js";

const PORT = process.env.APP_PORT || 8080;
const app = express();

// middleware
app.use(morgan("dev"));

// database connection
DB_Connection(process.env.DB_URL);

// API
app.get("/products", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "all products",
  });
});

// app running
app.listen(PORT, () => {
  console.log(
    `server mode: ${process.env.DEV_MODE} is listening on PORT http://localhost:${PORT}`
  );
});
