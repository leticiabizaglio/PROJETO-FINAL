import {v4 as uuidv4} from 'uuid';

export class Varinha {
  constructor(id, dono, origem, imagem) {
    this.id = uuidv4();
    this.dono = dono;
    this.origem = origem;
    this.imagem = imagem;
  }
}