import { Router } from "express";
import { methodsHTTP as barrioController } from "../controllers/barrio.controller.js";

const routerBarrio = Router();

routerBarrio.get("/", barrioController.getBarrio);
routerBarrio.get("/:id", barrioController.getBarrioId);
routerBarrio.post("/", barrioController.addBarrio);
routerBarrio.delete("/:id", barrioController.deleteBarrio);
routerBarrio.patch("/:id", barrioController.updateBarrio);


export default routerBarrio;