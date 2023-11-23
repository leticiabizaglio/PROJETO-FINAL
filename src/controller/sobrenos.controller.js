import { Sobrenos } from "../models/sobrenos/Sobrenos.js";
import { SobrenosList } from "../models/sobrenos/SobrenosList.js";


const list = new SobrenosList();

// Função de buscar todas as pessoas;
export const buscarTodosSobrenos = (req, res) => {
    const sobrenos = list.getAllSobrenos();
    return res.status(200).send({message: "Todos os sobrenos via controller!", status:"Ok!", data: sobrenos });
}

// Função de buscar as pessoas pelo ID;
export const buscarSobrenosPorId = (req, res) => {
    const { id } = req.params;
    const sobrenos = list.getSobrenosporId(id);
    if(!sobrenos){
        return res.status(404).send({message: "Pessoa não encontrada!"});
    }
    return res.status(200).send({message: `Pessoa com id ${id}`, status:"Ok!" });
}

// Função de criar uma nova pessoa;
export const criarSobrenos = (req, res) => {
    const {nome, imagem, idade, escola, casa, email} = req.body;

    if(!nome || !imagem || !idade || !escola || !casa || !email){
        return res.status(400).send({message: "Dados inválidos!"});
    }

    const sobrenos = new Sobrenos(nome, imagem, idade, escola, casa, email);
    list.createSobrenos(sobrenos);
    return res.status(200).send({message: "Pessoa criada com sucesso!", data: sobrenos });
}

// Função de editar e atualizar uma pessoa;
export const atualizarSobrenos = (req, res) => {
    const { id } = req.params;
    const { nome, imagem, idade, escola, casa, email} = req.body;

    if(!nome || !imagem || !idade || !escola || !casa || !email){
        return res.status(400).send({message: "Dados inválidos!"});
    }

    const sobrenos = list.upDateSobrenos(id, nome, imagem, idade, escola, casa, email);
    if(!sobrenos){
        return res.status(404).send({message: "Pessoa não encontrada!"});
    }
    return res.status(200).send({message: `Pessoa com id ${id} atualizada com sucesso!`});
}

// Função de deletar uma pessoa;
export const deletarSobrenos = (req, res) => {
    const { id } = req.params;
    const sobrenos = list.getSobrenosporId(id);
    if(!sobrenos){
        return res.status(404).send({message: "Pessoa não encontrada!"});
    }
    list.excludeSobrenos(id);
    return res.status(200).send({message: `Pessoa com id ${id} deletada com sucesso!`});
}