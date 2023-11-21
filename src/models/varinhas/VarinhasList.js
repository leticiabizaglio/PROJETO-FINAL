export class VarinhhaLista {
    constructor() {
        this.varinhas = [];
    }
    obterTodasVarinhas() {  
        return this.varinhas;
    }
    obterVarinhaPorId(id) {
        return this.varinhas.find(varinha => varinha.id === id);
    }
    atualizarVarinhaPorId(id, descricao, origem, imagem) {
        const varinha = this.obterVarinhaPorId(id);

        if (!varinha) {
            varinha.descricao = descricao;
            varinha.origem = origem;
            varinha.imagem = imagem;
        }
        return varinha;
    }
    excluirVarinhaPorId(id) {
        this.varinhas = this.varinhas.filter(varinha => varinha.id !== id);      
}
}