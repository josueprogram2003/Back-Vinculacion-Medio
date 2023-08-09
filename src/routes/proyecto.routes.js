import { Router } from "express";
import * as proyecto from "../controllers/proyecto.controller";
const router = Router();
router.get("/all", proyecto.getProyectoAll);
router.delete("/:id", async(req,res)=>{
  const {id} = req.params;
  proyecto.deleteProject(req,res,id); 
});
export default router;