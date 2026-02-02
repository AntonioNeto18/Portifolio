import Container from "./Container"
import Titulo from "./Titulo"
import ProjetoCard from "./ProjetoCard"
import dados from "../data/projetos.json"
import { useState } from "react"

const Projetos = () => {
  const [projetos] = useState(dados)

  return (
    <Container
      name="projetos"
    >
        <Titulo 
          texto="Projetos"
        />
        <section className='mt-5 grid grid-cols-1 md:grid-cols-2 md:p-5 gap-8'>

          {projetos.map((projeto) => (
            <ProjetoCard 
              key={projeto.titulo}
              {...projeto}
          />
          ))}
			</section>
    </Container>
  )
}

export default Projetos