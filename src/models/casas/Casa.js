import {v4 as uuidv4} from 'uuid';
export class Casa {
    constructor(id, nome, imagem, origem) {
        this.id = uuidv4();
        this.nome = nome;
        this.imagem = imagem;
        this.origem = origem;
    }
}