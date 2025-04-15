import { Router } from "express";
import saleController from "../controller/saleController.js";
const router = new Router();

router.get("/", saleController.getAll); // Отримання всіх товарів зі знижкою
router.post("/", saleController.addSale); // Додавання товару зі знижкою або зміна знижки якщо товар вже має знижку
router.delete("/", saleController.deleteOneSale); // Видвлення знижки для одного товару
router.delete("/all", saleController.deleteAllSale); //  Видалення всіх знижок

export default router;
