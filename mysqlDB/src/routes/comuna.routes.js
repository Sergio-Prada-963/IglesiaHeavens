import { Router } from "express";
import { methodsHTTP as comunaController } from "../controllers/comuna.controller.js";

const routerComuna = Router();

routerComuna.get("/", comunaController.getComuna);
routerComuna.get("/:id", comunaController.getComunaId);
routerComuna.post("/", comunaController.addComuna);
routerComuna.delete("/:id", comunaController.deleteComuna);
routerComuna.patch("/:id", comunaController.updateComuna);


export default routerComuna;