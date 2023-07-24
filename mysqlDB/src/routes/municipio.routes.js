import { Router } from "express";
import { methodsHTTP as municipioController } from "../controllers/municipio.controller.js";

const routerMunicipio = Router();

routerMunicipio.get("/", municipioController.getMunicipio);
routerMunicipio.get("/:id", municipioController.getMunicipioId);
routerMunicipio.post("/", municipioController.addMunicipio);
routerMunicipio.delete("/:id", municipioController.deleteMunicipio);
routerMunicipio.patch("/:id", municipioController.updateMunicipio);


export default routerMunicipio;