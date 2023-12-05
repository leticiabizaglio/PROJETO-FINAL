import { Casa } from "../models/casas/Casa.js";
import { casasList } from "../models/casas/CasasList.js";
import casa from "../data/data.casa.js";

const instanciaLista = new casasList(); 

casa.map(casa => new Casa (
    casa.id,
    casa.nome,
    casa.imagem,
    casa.origem
)).forEach(casa => instanciaLista.createCasa(casa));

export const getCasas = (req, res) =>{
    const casas = instanciaLista.getAllCasas();
    if(!casas.length){
        res.status(404).json({message:"Não existem casas cadastradas.", registros: `${casas.length}` })
    } else{
        res.status(200).json({message:"Operação realizada com sucesso.", status:"OK", data:casas, registros: `${casas.length}` })
    }
}
export const getCasaId = (req, res) =>{
    const { id } = req.params;

    const casa = instanciaLista.getCasaById(id);

    if(!casa) {
        return res.status(404).send({
             message: "Not Found.",
             
            });
    }
    return res.status(200).send({ message: `id: ${id}!`, data:casa });
}
export const createCasa = (req, res) => {
    const { nome, imagem, origem} = req.body;
    // Verificação do URL válido
    const isURLValid = (url) => {
        if(url.match(/\.(jpeg|jpg|gif|png)$/) !=null) {
            return true;
        }else {
            return false;
        }
        // Verificação preencha todos os campos!
    }
     if(!nome || !imagem || !origem){
        return res.status(404).send({message: "Preencha todos os campos!"});
    }
    //Verificação que o nome do personagem deve ter entre 3 e 50 caracteres
    if(nome.length < 3 || nome.length > 50) {
        return res.status(400).send({
            message: "Nome deve ter entre 3 e 50 caracteres!"
        });
    }
    // Verificação de que a casa do personagem precisa estar na API
    if (nome !== "grifinoria" && nome !=="sonserina"&& nome !== "lufa-lufa" && nome !== "corvinal") {
        return res.status(400).send({
            message: "Casa inválida!"
        });
    }    
    if(origem.length < 3 || origem.length > 50) {
        return res.status(400).send({
            message: "A origem deve ter entre 3 e 50 caracteres!"
        });
    }
   
    if(isURLValid(imagem) === false) {
        return res.status(400).send({ message: "a imagem deve ser uma URL valida" });
    }
    const casaInstancia = new Casa(nome, imagem, origem)

    instanciaLista.createCasa(casaInstancia);

    return res.status(200).send({ message: "Registrado com sucesso", data: casaInstancia});

};
export const updateCasa = (req, res) => {
    const { id } = req.params;
    const { nome, imagem, origem } = req.body;
    if(!nome || !origem || !imagem){
        return res.status(404).send({message: "Not Found"});
    }
    const casa = instanciaLista.updateCasa(id, nome, imagem, origem);
    if(!casa){
        return res.status(404).send({ message: "Not Found"});
    }

    return res.status(200).send({message: `id: ${id}`, data: casa});
};
export const deleteCasa = (req, res) => {
    const { id } = req.params;

    const casa = instanciaLista.getCasaById(id);

    if(!casa) {
        return res.status(404).send({ message: "Not Found."});
    }

    instanciaLista.excludeCasa(id);
    return res.status(200).send({ message: `id: ${id}!`, data: casa });
}
export const isURLValid = (url) => {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}