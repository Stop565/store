import { Router } from "express";
import adminController from "../controller/adminController.js";
const router = new Router();

router.post("/login", adminController.login);
router.get("/auth", adminController.check);

export default router;
