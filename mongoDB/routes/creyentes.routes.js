import express from "express"
const router = express.Router();
import {addCreyente, getId, deleteCreyente, updateCreyente, obtenerCreyente} from "../controllers/creyentes.controllers.js";
import validateDocuments from "../middlewares/validate.documents.js";
import {check} from "express-validator"
import Creyente from "../models/creyente.js";
router.get("/",obtenerCreyente);

export default router;