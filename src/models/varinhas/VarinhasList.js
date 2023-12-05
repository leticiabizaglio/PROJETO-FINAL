export class VarinhaLista {
    constructor() {
        this.varinhas = [];
    }

    // C = Create
    criarVarinha(varinha) {
        this.varinhas.push(varinha);
    }

    // R = Read
    obterTodasVarinhas() {
        return this.varinhas;
    }

    obterVarinhaPorId(id) {
        return this.varinhas.find(varinha => varinha.id === id);
    }
    atualizarVarinha(id, dono, origem, imagem) {
        const varinha = this.obterVarinhaPorId(id);

        if (varinha) {
            varinha.dono = dono;
            varinha.origem = origem;
            varinha.imagem = imagem;
        }
        return varinha;
    }
        // D = Delete
    excluirVarinha(varinhaId) {
        this.varinhas = this.varinhas.filter((varinha) => varinha.id !== varinhaId);
    }
}