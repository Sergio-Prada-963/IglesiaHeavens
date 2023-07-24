import { Router } from "express";
import { methodsHTTP as creyentesController } from "../controllers/creyentes.controller.js";

const routerCreyentes = Router();

routerCreyentes.get("/", creyentesController.getCreyentes);
routerCreyentes.get("/:id", creyentesController.getCreyentesId);
routerCreyentes.post("/", creyentesController.addCreyentes);
routerCreyentes.delete("/:id", creyentesController.deleteCreyentes);
routerCreyentes.patch("/:id", creyentesController.updateCreyentes);


export default routerCreyentes;