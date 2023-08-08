import { Router } from "express";
import * as alumno from "../controllers/alumno.controller.js";
const router = Router();
router.get("/all", alumno.getAlumnoAll);
export default router;