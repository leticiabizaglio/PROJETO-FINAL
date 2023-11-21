import {v4 as uuidv4} from 'uuid';


export class Personagem{
    constructor(nome, imagem, casa, patrono, varinha, ator){
        this.id = uuidv4();
        this.nome = nome;
        this.imagem = imagem;
        this.casa = casa;
        this.patrono = patrono;
        this.varinha = varinha;
        this.ator = ator;
    }
}