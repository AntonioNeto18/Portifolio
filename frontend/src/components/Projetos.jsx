import Container from "./Container"
import Titulo from "./Titulo"
import ProjetoCard from "./ProjetoCard"
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"

const Projetos = () => {
  return (
    <Container
      name="projetos"
    >
        <Titulo 
          texto="Projetos"
        />
        <section className='mt-5 grid grid-cols-1 md:grid-cols-2 md:p-5 gap-8'>
          <ProjetoCard 
            deploy="https://landing-page-fotografo.vercel.app/"
            git="https://github.com/AntonioNeto18/Landing-page-fotografo"
            titulo="Landing page fotografo"
            descricao="Projeto de uma landing page simples, com design moderno e responsivo, feito com HTML, CSS e JavaScript, com o objetivo de divulgar o trabalho do fotografo Diego Almeida."
            tecnologias={[<FaHtml5 />, <FaCss3 />, <FaJs />]}
          />

          <ProjetoCard 
            deploy="https://cp4-front-web.vercel.app/"
            git="https://github.com/Grupo-FIAP-Antonio-Felipe-e-Joao-Vitor/cp4-front-web/tree/main"
            titulo="Calculadora"
            descricao="Projeto acadêmico, desenvolvido usando React e Tailwind, para praticar a lógica de programação, componentização e estilização por classes"
            tecnologias={[<FaReact />, <RiTailwindCssFill />, <FaJs />]}
          />
			</section>
    </Container>
  )
}

export default Projetos