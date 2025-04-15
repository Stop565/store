import { Router } from "express";
const router = new Router();

router.get("/"); // Отримання всіх товарів зі знижкою
router.post("/"); // Додавання товару зі знижкою або зміна знижки якщо товар вже має знижку
router.delete("/"); // Видвлення знижки для одного товару
router.delete("/all"); //  Видалення всіх знижок

export default router;
