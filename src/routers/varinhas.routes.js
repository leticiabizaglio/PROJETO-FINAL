import { Router } from "express";
import { obterTodasVarinhas, obterVarinhaPorId, criarVarinha, 
atualizarVarinha, excluirVarinha} from "../controller/varinhas.controller.js";

const rotasVarinhas = Router();
rotasVarinhas.get('/', obterTodasVarinhas);
rotasVarinhas.get('/:id', obterVarinhaPorId);
rotasVarinhas.post('/', criarVarinha);
rotasVarinhas.put('/:id', atualizarVarinha);
rotasVarinhas.delete('/:id', excluirVarinha);

export default rotasVarinhas;

