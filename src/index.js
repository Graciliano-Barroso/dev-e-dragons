import { PersonagemView } from "./components/personagem-view.js"
import { Personagem } from "./modules/personagem.js"
import { Mago } from "./modules/mago.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)

const personagem = [magoAntonio, magaJulia]

new PersonagemView(personagem).render()
