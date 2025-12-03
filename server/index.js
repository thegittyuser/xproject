import dotenv from "dotenv";
import express from "express";
import products from "./api/productsApi.js";
import cors from "cors";
import path, { join } from "path";
import { fileURLToPath } from "url";
import router from "./routes/userdata.route.js";
dotenv.config();
const app = express();
const port = process.env.PORT;

// dirname for ESM (ECMA Script Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// cross origin middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// static files middleware
app.use(express.static(path.join(__dirname, "./public/products_images")));

// form middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router middleware
app.use("/", router);

// db connection file
import dbConnection from "./config/db.js";
// db fn Callback
dbConnection();

app.get("/api", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
