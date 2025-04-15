import { Router } from "express";
import categoryController from "../controller/categoryController.js";
const router = new Router();

router.get("/", categoryController.getAll);
router.post("/", categoryController.createCategory);
router.delete("/", categoryController.deleteCategory);

export default router;
