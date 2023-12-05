import { VarinhaLista } from "../models/varinhas/VarinhasList.js";
import { Varinha } from "../models/varinhas/Varinha.js";
import varinhas from "../data/data.varinha.js";


const list = new VarinhaLista();

varinhas.map(varinha => new Varinha (
    varinha.id,
    varinha.descricao,
    varinha.origem,
    varinha.imagem
)).forEach(varinha => list.criarVarinha(varinha));


export const buscarVarinhas = (req, res) => {
const varinhas = list.obterTodasVarinhas();
return res.status(200).send({message: "Todas as varinhas via controller!", status:"Ok!", data: varinhas});
}

export const buscarVarinhaPorId = (req, res) => {
    const { id } = req.params;
    const varinha = list.obterVarinhaPorId(id);
    if(!varinha){
        return res.status(404).send({message: "Varinha não encontrada!"});
    }
    return res.status(200).send({message: `Varinha com id ${id}`, status:"Ok!"});
}

export const criarVarinha = (req, res) => {
    const {descricao, origem, imagem } = req.body;
    if(!descricao || !origem || !imagem){
        return res.status(400).send({message: "Dados inválidos!"});
    }
    const varinha = new Varinha(descricao, origem, imagem);
    list.criarVarinha(varinha);
    return res.status(200).send({message: "Varinha criada com sucesso!", status:"Ok!"});
}

export const atualizarVarinha = (req, res) => {
    const { id } = req.params;
    const { descricao, origem, imagem } = req.body;
    if(!descricao || !origem || !imagem){
        return res.status(400).send({message: "Dados inválidos!"});
    }
    const varinha = list.atualizarVarinha(id, descricao, origem, imagem);
    if(!varinha){
        return res.status(404).send({message: "Varinha não encontrada!"});
    }
    return res.status(200).send({message: `Varinha com id ${id} atualizada com sucesso!`, status:"Ok!"});
}

export const deletarVarinha = (req, res) => {
    const { id } = req.params;
    const varinha = list.obterVarinhaPorId(id);
    if(!varinha){
        return res.status(404).send({message: "Varinha não encontrada!"});
    }
    list.excluirVarinha(id);
    return res.status(200).send({message: `Varinha com id ${id} deletada com sucesso!`, status:"Ok!"});
}

