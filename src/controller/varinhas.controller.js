import varinhas from "../data/data.varinha.js";
import { Varinha } from "../models/varinhas/Varinha.js";
import { VarinhaLista } from "../models/varinhas/VarinhasList.js";

const lista = new VarinhaLista();

varinhas.map(varinha => new Varinha (
    varinha.id,
    varinha.descricao,
    varinha.origem,
    varinha.imagem
)).forEach(varinha => lista.criarVarinha(varinha));

export const obterTodasVarinhas = (req, res) => {
    const varinhas = lista.obterTodasVarinhas();

    if (!varinhas.length) {
        return res.status(404).send({ mensagem: "Não há varinhas cadastradas." });
    }
    return res.status(200).send({ message: 'Varinhas encontradas com sucesso!', status: 'ok', data: varinhas });
}

export const obterVarinhaPorId = (req, res) => {
    const { id } = req.params;
    const varinha = lista.obterVarinhaPorId(id);

    if (!varinha) {
        return res.status(404).send({ mensagem: 'Varinha não encontrada.' });
    }
    return res.status(200).send({ message: `Varinha com id ${id}} encontrada com sucesso!`, status: 'ok', data: varinha });
}

export const criarVarinha = (req, res) => {
    const { descricao, origem, imagem } = req.body
    const urlValido = (url) => {
        if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return true;

        } else {
            return false
        }
    }
    
    if (!descricao || !origem || !imagem) {
        return res.status(400).send({ mensagem: 'Dados inválidos' });
    }

    if (urlValido(imagem) === false) {
        return res.status(400).send({ mensagem: 'URL inválida.' });
    }
    const varinhasInstancia = new Varinha(descricao, origem, imagem);
    lista.criarVarinha(varinhasInstancia);
    return res.status(201).send({ message: `descricao: ${descricao}, origem: ${origem}, imagem: ${imagem}`, status: 'ok', data: varinhasInstancia });
};

export const atualizarVarinha = (req, res) => {
    const {id} = req.params;
    const {descricao, origem, imagem} = req.body;

    if (!descricao || !origem || !imagem) {
        return res.status(400).send({ mensagem: 'Dados inválidos.' });
    }
    const varinha = lista.atualizarVarinha(id, descricao, origem, imagem);
    if(!varinha) {
        return res.status(404).send({ mensagem: 'Varinha não encontrada.' });
    }

    return res.status(200).send({ message: `Varinha com id ${id} atualizada com sucesso!`});
};


export const excluirVarinha = (req, res) => {
    const {id} = req.params;
    const varinhas = lista.obterVarinhaPorId(id);
    if(!varinhas) {
        return res.status(404).send({ mensagem: "Varinha não encontrada!" });
    }
    lista.excluirVarinha(id);
    return res.status(200).send({ message: `Varinha com id ${id} excluída com sucesso!`, status: 'ok'});

};

