import { Router } from "express";
import { atualizarPersonagem, buscarPersonagemPorId, buscarTodosPersonagens, criarPersonagem, deletarPersonagem } from "../controller/personagens.controller.js";

const rotaPersonagens = Router();

rotaPersonagens.get("/", buscarTodosPersonagens);
rotaPersonagens.get("/:id", buscarPersonagemPorId);
rotaPersonagens.post("/", criarPersonagem);
rotaPersonagens.delete("/:id", deletarPersonagem);
rotaPersonagens.put("/:id", atualizarPersonagem);

export default rotaPersonagens;
