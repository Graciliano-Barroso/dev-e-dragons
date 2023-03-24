import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Personagem } from "./modules/personagem.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroSalazar = new Arqueiro('Salazar', 4, 4, 'flechas')
const arqueiraDaniela = new Arqueiro('Daniela', 8, 7, 'flechas')
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiraJorge = new Guerreiro('Jorge', 8)

const personagem = [magoAntonio, magaJulia, arqueiroSalazar, arqueiraDaniela, arqueiroMagoChico, guerreiraJorge]

new PersonagemView(personagem).render()
console.log(Personagem.verificarVencedor(arqueiroSalazar, magoAntonio))
