import {v4 as uuidv4} from 'uuid';

export class Varinha {
  constructor(id, descricao, origem, imagem) {
    this.id = uuidv4();
    this.descricao = descricao;
    this.origem = origem;
    this.imagem = imagem;
  }
}