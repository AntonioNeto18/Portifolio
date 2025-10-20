import Container from "./Container"
import { TypeAnimation } from 'react-type-animation';
import Destaque from "./Destaque";
import imagem from "../assets/imagem1.png";

const Home = () => {
  return (
    <Container className="flex flex-col md:flex-row gap-6 justify-center items-center">
      <section className="flex flex-col text-center md:text-left md:max-w-1/2">

        <p className="text-white text-2xl font-orbitron">Olá, eu sou Antônio Neto</p>

        <TypeAnimation
          sequence={["Engenhiro de software | Dev Fullstack", 1000]}
          speed={50}
          wrapper="span"
          repeat={1}
          cursor={false}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-white bg-clip-text text-transparent font-orbitron uppercase"
        />

        <p
          className="text-white text-lg mt-2"
        >
          Sou estudante de engenharia de software na FIAP, tenho experiência com <Destaque texto="python, html, css, javascript, react, git, github, node js, tailwind"/>.
        </p>

      </section>
      <section className="flex justify-center items-center md:w-1/2">
        <img 
          className="border-2 border-white shadow-md shadow-white w-80 h-80 md:w-100 md:h-100 rounded-full object-center"
          src={ imagem }
          alt="Antônio Neto" 
        />
      </section>
    </Container>
  )
}

export default Home