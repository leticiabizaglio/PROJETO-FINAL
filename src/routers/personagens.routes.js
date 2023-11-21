import { Router } from "express";
import { buscarPersonagemPorId, buscarTodosPersonagens, criarPersonagem, deletarPersonagem } from "../controller/personagens.controller.js";

const rotaPersonagens = Router();

rotaPersonagens.get("/", buscarTodosPersonagens);
rotaPersonagens.get("/:id", buscarPersonagemPorId);
rotaPersonagens.post("/", criarPersonagem);
rotaPersonagens.delete("/:id", deletarPersonagem);
rotaPersonagens.put("/:id", criarPersonagem);

export default rotaPersonagens;
