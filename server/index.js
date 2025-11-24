import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import products from "./api/productsApi.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT;

// path for ESM(ECMA Script Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// cors middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.static(path.join(__dirname, "public", "product_images")));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/productsapi", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
