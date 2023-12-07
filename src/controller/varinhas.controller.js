// Importações
import { VarinhaLista } from "../models/varinhas/VarinhasList.js";
import { Varinha } from "../models/varinhas/Varinha.js";
import varinhas from "../data/data.varinha.js";


const list = new VarinhaLista();

varinhas.map(varinha => new Varinha (
    varinha.id,
    varinha.dono,
    varinha.origem,
    varinha.imagem
)).forEach(varinha => list.criarVarinha(varinha));

// Funções de busca de varinhas
export const buscarVarinhas = (req, res) => {
const varinhas = list.obterTodasVarinhas();
return res.status(200).send({message: "Todas as varinhas via controller!", status:"Ok!", data: varinhas});
}
// Função de buscar as varinhas de acordo com o ID delas.
export const buscarVarinhaPorId = (req, res) => {
    const { id } = req.params;
    const varinha = list.obterVarinhaPorId(id);
    if(!varinha){
        return res.status(404).send({message: "Varinha não encontrada!"});
    }
    return res.status(200).send({message: `Varinha com id ${id}`, status:"Ok!"});
}
// Função de criar as varinhas
export const criarVarinha = (req, res) => {
    const {dono, origem, imagem } = req.body;
    // Verificação para saber se o URL da imagem é valido.
    const isURLValid = (url) => {
        if(url.match(/\.(jpeg|jpg|gif|png)$/) !=null) {
            return true;
        }else {
            return false;
        }
    }
    // Verificação para preencher todos os campos.
    if(!dono || !origem || !imagem){
        return res.status(400).send({message: "Preencha todos os campos!"});
    }
    // Verificação para saber se o nome do dono deve ter entre 3 e 50 caracteres.
    if(dono.length < 3 || dono.length > 50) {
        return res.status(400).send({
            message: "Nome do dono deve ter entre 3 e 50 caracteres!"
        });
    }
    // Verificação para saber se a origem deve ter entre 3 e 50 caracteres.
    if(origem.length < 3 || origem.length > 50) {
        return res.status(400).send({
            message: "Origem deve ter deve ter entre 3 e 50 caracteres!"
        });
    }
   
    // // Verificação para saber se o dono já está cadastrado na API.
    // if (varinhas.find((varinha) => varinha.dono.toLowerCase() === dono.toLowerCase())) {
    //     return res.status(400).send({message: "Este dono ja existe!"});
    // }
      // Verificação de que o nome do dono precisa estar na API
    if (dono !== "Harry Potter" && dono !=="Hermione Granger"&& dono !== "Ronald Weasley" && dono !== "Draco Malfoy"
     && dono !== "Minerva McGongall" && dono !== "Cedric Diggory" && dono !== "Cho Chang" && dono !== "Severus Snape" && 
     dono !== "Rúbeo Hagrid" && dono !== "Luna Lovegood" && dono !== "Neville Longbottom" && dono !== "Ginerva Weasley" &&
     dono !== "Sirius Black" && dono !== "Remus Lupin" && dono !== "Arthur Weasley" && dono !== "Bellatrix Lestrange" &&
     dono !== "Lord Voldemort" && dono !== "Horácio Slughorn" && dono !== "Dolores Umbridge" && dono !== "Fred Weasley" && dono !== "Jorge Weasley"
     && dono !== "Alvo Dumbledore") {
         return res.status(400).send({
             message: "Nome do dono precisa estar cadastrado na API!"
         });
     } 
    
    if (isURLValid(imagem) === false) {
        return res.status(400).send({
            message: "URL da imagem é invalida!"
        });
    }
    const varinha = new Varinha(dono, origem, imagem);
    list.criarVarinha(varinha);
    return res.status(200).send({message: "Varinha criada com sucesso!", status:"Ok!"});
}
// Função de editar/ atualizar as varinhas
export const atualizarVarinha = (req, res) => {
    const { id } = req.params;
    const { dono, origem, imagem } = req.body;
    if(!dono || !origem || !imagem){
        return res.status(400).send({message: "Dados inválidos!"});
    }
    const varinha = list.atualizarVarinha(id, dono, origem, imagem);
    if(!varinha){
        return res.status(404).send({message: "Varinha não encontrada!"});
    }
    return res.status(200).send({message: `Varinha com id ${id} atualizada com sucesso!`, status:"Ok!"});
}
// Função de deletar a varinha
export const deletarVarinha = (req, res) => {
    const { id } = req.params;
    const varinha = list.obterVarinhaPorId(id);
    if(!varinha){
        return res.status(404).send({message: "Varinha não encontrada!"});
    }
    list.excluirVarinha(id);
    return res.status(200).send({message: `Varinha com id ${id} deletada com sucesso!`, status:"Ok!"});
}

