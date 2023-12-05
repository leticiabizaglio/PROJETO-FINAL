import { Router } from "express";
import { buscarVarinhas, buscarVarinhaPorId, criarVarinha, 
atualizarVarinha, deletarVarinha} from "../controller/varinhas.controller.js";

const rotasVarinhas = Router();
rotasVarinhas.get('/', buscarVarinhas);
rotasVarinhas.get('/:id', buscarVarinhaPorId);
rotasVarinhas.post('/', criarVarinha);
rotasVarinhas.put('/:id', atualizarVarinha);
rotasVarinhas.delete('/:id', deletarVarinha);

export default rotasVarinhas;

