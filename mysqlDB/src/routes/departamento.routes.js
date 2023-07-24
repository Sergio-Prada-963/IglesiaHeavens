import { Router } from "express";
import { methodsHTTP as departamentoController } from "../controllers/departamento.controller.js";

const routerDepartamento = Router();

routerDepartamento.get("/", departamentoController.getDepartamento);
routerDepartamento.get("/:id", departamentoController.getDepartamentoId);
routerDepartamento.post("/", departamentoController.addDepartamento);
routerDepartamento.delete("/:id", departamentoController.deleteDepartamento);
routerDepartamento.patch("/:id", departamentoController.updateDepartamento);


export default routerDepartamento;