import casa from "../../data/data.casa.js";


export class casasList {
    constructor() {
        this.casas = [];
    }
    //C = Create
    createCasa(casa) {
        this.casas.push(casa);
    }
    //R = Read
    getAllCasas() {
        return this.casas;
    }
    getCasaById(id) {
        return this.casas.find((casa) => casa.id === id);
    }
    //U = Update
    updateCasa(id, nome, imagem, origem){
        const casa = this.getCasaById(id);

        if(!casa) {
            return null;
        }
        casa.id = id;
        casa.nome = nome;
        casa.imagem = imagem;
        casa.origem = origem;

        return casa;
    }
    //D = Delete
    excludeCasa(casaId) {
     this.casas = this.casas.filter((casa) => casa.id !== casaId);
    }
}