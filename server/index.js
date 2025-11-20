import dotenv from "dotenv";
import express from "express";
import products from "./api/productsApi.js";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/productsapi", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
