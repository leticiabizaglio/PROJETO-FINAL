import { Router } from "express";
import { atualizarSobrenos, buscarSobrenosPorId, buscarTodosSobrenos, criarSobrenos, excluirSobrenos } from "../controller/sobrenos.controller.js";


const rotaSobrenos = Router();

rotaSobrenos.get("/", buscarTodosSobrenos);
rotaSobrenos.get("/:id", buscarSobrenosPorId);
rotaSobrenos.post("/", criarSobrenos);
rotaSobrenos.delete("/:id", excluirSobrenos);
rotaSobrenos.put("/:id", atualizarSobrenos);

export default rotaSobrenos;