export class PersonagensList {
    constructor() {
        this.personagens = [];
    }

    getAllPersonagens(){
        return this.personagens;
    }

    getPersonagensPorId(id){
        return this.personagens.find((personagem) => personagem.id === id);
    }

    createPersonagem(personagem){
        this.personagens.push(personagem);
    }

    upDatePersonagem(id, nome, imagem, casa, patrono, varinha ){
        const personagens = this.getPersonagensPorId(id);
        if(!personagens){
            return null;
        } 

        personagens.nome = nome;
        personagens.imagem = imagem;
        personagens.casa = casa;
        personagens.patrono = patrono;
        personagens.varinha = varinha;

        return personagens;
    }

    removePersonagem(personagemId){
        this.personagens = this.personagens.filter((personagem) => personagem.id !== personagemId);
    }
}