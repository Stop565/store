import { Router } from "express";
const router = new Router();

router.post("/"); // Додавання нового продукту
router.get("/"); // Отримання всіх продуктів
router.get("/:id"); // Отримання одного продукту
router.delete("/"); // Видалення одного продукту

export default router;
