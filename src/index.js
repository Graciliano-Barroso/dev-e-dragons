import { PersonagemView } from "./components/personagem-view.js"
import { Personagem } from "./modules/personagem.js"

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
const personagemJose = new Personagem('José', 3, 'Arqueiro')

const personagem = [personagemPedrinho, personagemJose]

new PersonagemView(personagem).render()
