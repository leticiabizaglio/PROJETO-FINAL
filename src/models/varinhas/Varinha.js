import {v4 as uuidv4} from 'uuid';

export class Varinha {
  constructor(descrição, origem, imagem) {
    this.id = uuidv4();
    this.descrição = descrição;
    this.origem = origem;
    this.imagem = imagem;
  }
}