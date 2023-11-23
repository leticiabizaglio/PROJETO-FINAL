import { v4 as uuidv4 } from "uuid";

export class Sobrenos{
    constructor(nome, imagem, idade, escola, casa, email){
        this.id = uuidv4();
        this.nome = nome;
        this.imagem = imagem;
        this.idade = idade;
        this.escola = escola;
        this.casa = casa;
        this.email = email;
    }
}