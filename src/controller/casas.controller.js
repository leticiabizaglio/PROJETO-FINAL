import { Casa } from "../models/casas/Casa.js";
import { casasList } from "../models/casas/CasasList.js";
import casa from "../data/data.casa.js";

const instanciaLista = new casasList(); 

casa.map(casa => new Casa (
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

    if(!nome || !imagem || !origem){
        return res.status(404).send({message: "Not Found"});
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