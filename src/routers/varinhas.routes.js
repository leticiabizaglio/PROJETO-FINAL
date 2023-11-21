import { Router } from "express";
import { obterTodasVarinhas, obterVarinhaPorId, criarVarinha, 
atualizarVarinhaPorId, excluirVarinhaPorId } from "../controllers/varinhas.controller.js";

const rotasVarinhas = Router();
rotasVarinhas.get('/varinhas', obterTodasVarinhas);
rotasVarinhas.get('/varinhas/:id', obterVarinhaPorId);
rotasVarinhas.post('/varinhas', criarVarinha);
rotasVarinhas.put('/varinhas/:id', atualizarVarinhaPorId);
rotasVarinhas.delete('/varinhas/:id', excluirVarinhaPorId);

export default rotasVarinhas;

