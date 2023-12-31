import { Router } from "express";
import {
    getCasas,
    getCasaId,
    createCasa,
    updateCasa,
    deleteCasa
} from "../controller/casas.controller.js";

const casaRoutes = Router();

casaRoutes.get("/", getCasas);

casaRoutes.get("/:id", getCasaId);

casaRoutes.post("/", createCasa);

casaRoutes.put("/:id", updateCasa);

casaRoutes.delete("/:id", deleteCasa);

export default casaRoutes;