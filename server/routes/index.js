import { Router } from "express";
const router = new Router();
import adminRouter from "./adminRouter.js";
import categoryRouter from "./categoryRouter.js";
import productRouter from "./productRouter.js";
import saleRouter from "./saleRouter.js";

router.use("/admin", adminRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/sale", saleRouter);

export default router;
