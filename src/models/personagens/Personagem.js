import {v4 as uuidv4} from 'uuid';


export class Personagem{
    constructor(nome, imagem, casa, feiticos, varinha){
        this.id = uuidv4();
        this.nome = nome;
        this.imagem = imagem;
        this.casa = casa;
        this.feiticos = feiticos;
        this.varinha = varinha;
    }
}