import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem {
    destreza
    tipo = 'Arqueiro'

    constructor(nome, level, destreza) {
        super(nome, level)
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5) {
            return 'Dominador de flechas'
        }
        return super.obterInsignia()
    }
}

console.log(new Arqueiro('gelo', 7, 9))