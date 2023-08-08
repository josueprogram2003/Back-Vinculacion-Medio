import { Router } from "express";
import * as proyecto from "../controllers/proyecto.controller";
const router = Router();
router.get("/all", proyecto.getProyectoAll);
export default router;