import { Router } from "express";
import { obterTodasVarinhas, obterVarinhaPorId, criarVarinha, 
atualizarVarinhaPorId, excluirVarinhaPorId } from "../controller/varinhas.controller.js";

const rotasVarinhas = Router();
rotasVarinhas.get('/', obterTodasVarinhas);
rotasVarinhas.get('/:id', obterVarinhaPorId);
rotasVarinhas.post('/', criarVarinha);
rotasVarinhas.put('/:id', atualizarVarinhaPorId);
rotasVarinhas.delete('/:id', excluirVarinhaPorId);

export default rotasVarinhas;

