export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }
    obterInsignia() {
        if (this.level >= 5) {
            return `${this.constructor.tipo} implacavel `;
        }
        return `${this.constructor.tipo} iniciante`;
    }
}
