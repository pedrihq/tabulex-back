// src/routes/productsRoutes.js
import express from "express";
import {
  productsEstoque,
  newProducts,
  putProdutos,
  deleteProducts,
} from "../controller/productsController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("");
});

export default (app) => {
  app.get("/products", productsEstoque);
  app.post("/AddProduct", newProducts);
  app.put("/products/:id", putProdutos);
  app.post("/deleteProducts/:id", deleteProducts);
};
