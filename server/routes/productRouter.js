import { Router } from "express";
import productController from "../controller/productController.js";
const router = new Router();

router.post("/", productController.createProduct); // Додавання нового продукту
router.get("/", productController.getAll); // Отримання всіх продуктів
router.get("/:id", productController.getOneProduct); // Отримання одного продукту
router.delete("/", productController.deleteProduct); // Видалення одного продукту

export default router;
