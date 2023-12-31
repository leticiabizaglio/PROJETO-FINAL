// Importações das classes;
import { Personagem } from '../models/personagens/Personagem.js';
import { PersonagensList } from '../models/personagens/PersonagensList.js';
import personagens from '../data/data.personagem.js';


const list = new PersonagensList();

personagens.map(personagens => new Personagem (
    personagens.nome,
    personagens.imagem,
    personagens.casa,
    personagens.patrono,
    personagens.varinha,
    personagens.ator
)).forEach(personagens => list.createPersonagem(personagens));

// Função de buscar todos os personagens com base no nome;
export const buscarTodosPersonagens = (req, res) => {

    const personagens = list.getAllPersonagens();
    

    const {nome} = req.query;
    
    if(nome){
        const filter= personagens.filter((personagens) => personagens.nome == nome);
        if(!filter.length){
            return res.status(404).send({message: `Nenhum personagem foi cadastrado!`});
        }

        return res.status(200).send({message: `Todos os personagens do nome ${filter.length}`, status:"Ok!", data: filter});
    }
    return res.status(200).send({message: "Todos os personagens via controller!", status:"Ok!", data: personagens});
}

// Função de buscar os personagens com o critério de ID;
export const buscarPersonagemPorId = (req, res) => {
    const { id } = req.params;

    const personagem = list.getPersonagensPorId(id);
    if(!personagem){
        return res.status(404).send({message: "Personagem não encontrado!"});
    }
    return res.status(200).send({message: `Personagem com id ${id}`, nome: personagem.nome, imagem: personagem.imagem, casa: personagem.casa, patrono: personagem.patrono, varinha: personagem.varinha, ator: personagem.ator, status:"Ok!"});
}

// Função de criar um novo personagem;
export const criarPersonagem = (req, res) => {

    const { nome, imagem, casa, patrono, varinha, ator } = req.body;
    if(!nome || !imagem || !casa || !patrono || !varinha || !ator){
        return res.status(400).send({message: "Preencha todos os campos!"});
    }

    const personagens = list.getAllPersonagens();
    // Verificação se o personagem existe

    if (personagens.find((personagem) => personagem.nome.toLowerCase() === nome.toLowerCase())) {
        return res.status(400).send({message: "Personagem ja existe!"});
    }
  
    // Verificação de que o nome deve ter entre 3 e 50 caracteres
    if(nome.length < 3 || nome.length > 50) {
        return res.status(400).send({
            message: "Nome deve ter deve ter entre 3 e 50 caracteres!"
        });
    }

// Verificação para verificar se o URL da imagem é valido
    if(!isURLValid(imagem) === false){
        return res.status(400).send({message: "URL inválida!"});
    }

    const personagem = new Personagem(nome, imagem, casa, patrono, varinha, ator);
    list.createPersonagem(personagem);
    return res.status(200).send({message: "Personagem criado com sucesso!", data: personagem});

}

// Função de editar e atualizar um personagem;
export const atualizarPersonagem = (req, res) => {
    const { id } = req.params;
    const { nome, imagem, casa, patrono, varinha, ator} = req.body;

    if(!nome || !imagem || !casa || !patrono || !varinha || !ator){
        return res.status(400).send({message: "Dados inválidos!"});
    }

    const personagem = list.upDatePersonagem(id, nome, imagem, casa, patrono, varinha, ator);
    if(!personagem){
        return res.status(404).send({message: "Personagem não encontrado!"});
    }
    return res.status(200).send({message: `Personagem com id ${id} atualizado com sucesso!`});
}

// Função de deletar um personagem;
export const deletarPersonagem = (req, res) => {
    const { id } = req.params;
    const personagem = list.getPersonagensPorId(id);

    if(!personagem){
        return res.status(404).send({message: "Personagem não encontrado!"});
    }
    list.removePersonagem(id);
    return res.status(200).send({message: `Personagem com id ${id} deletado com sucesso!`});
}



// Função de verificação da URL da imagem;
export const isURLValid = (url) => {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return false;
    } else {
        return true;
    }
}