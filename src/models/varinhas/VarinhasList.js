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
    atualizarVarinhaPorId(id, descrição, origem, imagem) {
        const varinha = this.obterVarinhaPorId(id);

        if (!varinha) {
            varinha.descrição = descrição;
            varinha.origem = origem;
            varinha.imagem = imagem;
        }
        return varinha;
    }
    excluirVarinhaPorId(id) {
        this.varinhas = this.varinhas.filter(varinha => varinha.id !== id);      
}
}