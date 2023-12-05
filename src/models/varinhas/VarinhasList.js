export class VarinhaLista {
    constructor() {
        this.varinhas = [];
    }

    criarVarinha(varinha) {
        this.varinhas.push(varinha);
    }

    obterTodasVarinhas() {
        return this.varinhas;
    }
    obterVarinhaPorId(id) {
        return this.varinhas.find(varinha => varinha.id === id);
    }
    atualizarVarinha(id, descricao, origem, imagem) {
        const varinha = this.obterVarinhaPorId(id);

        if (varinha) {
            varinha.descricao = descricao;
            varinha.origem = origem;
            varinha.imagem = imagem;
        }
        return varinha;
    }
    excluirVarinha(varinhaId) {
        this.varinhas = this.varinhas.filter((varinha) => varinha.id !== varinhaId);
    }
}