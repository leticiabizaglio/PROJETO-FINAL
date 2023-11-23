export class SobrenosList {
    constructor() {
        this.sobrenos = [];
    }

    // C = Create
    createSobrenos(sobrenos) {
        this.sobrenos.push(sobrenos);
    }
    // R = Read
    getAllSobrenos() {
        return this.sobrenos;
    }
    getSobrenosporId(id){
        return this.sobrenos.find((sobrenos) => sobrenos.id === id);
    }
    // U = Update
    updateSobrenos(id, nome, imagem, idade, escola, casa, email){
        const sobrenos = this.getSobrenosporId(id);
        if(!sobrenos){
            return null;
        }
        sobrenos.nome = nome;
        sobrenos.imagem = imagem;
        sobrenos.idade = idade;
        sobrenos.escola = escola;
        sobrenos.casa = casa;
        sobrenos.email = email;

        return sobrenos;
    }

    // D = Delete
    excludeSobrenos(sobrenosId){
        this.sobrenos = this.sobrenos.filter((sobrenos) => sobrenos.id !== sobrenosId);
    }
}