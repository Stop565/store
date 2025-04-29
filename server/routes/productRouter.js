import { Router } from "express";
import productController from "../controller/productController.js";
import errorMiddle from "../middleware/ErrorHandlingMiddleware.js";
const router = new Router();
import multer from "multer";
// let upload = multer({ dest: "./upload/" });

router.post("/", productController.createProduct); // Додавання нового продукту
router.get("/", productController.getAll); // Отримання всіх продуктів
router.get("/:id", productController.getOneProduct); // Отримання одного продукту
router.delete("/", productController.deleteProduct); // Видалення одного продукту

export default router;
