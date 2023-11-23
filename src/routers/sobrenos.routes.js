import { Router } from "express";
import { atualizarSobrenos, buscarSobrenosPorId, buscarTodosSobrenos, criarSobrenos, deletarSobrenos } from "../controller/sobrenos.controller.js";


const rotaSobrenos = Router();

rotaSobrenos.get("/", buscarTodosSobrenos);
rotaSobrenos.get("/:id", buscarSobrenosPorId);
rotaSobrenos.post("/", criarSobrenos);
rotaSobrenos.delete("/:id", deletarSobrenos);
rotaSobrenos.put("/:id", atualizarSobrenos);

export default rotaSobrenos;