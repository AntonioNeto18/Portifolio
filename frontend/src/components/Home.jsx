import Container from "./Container"
import { TypeAnimation } from 'react-type-animation';
import Destaque from "./Destaque";
import imagem from "../assets/imagem1.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Icone from "./Icone";
import BotaoCV from "./BotaoCV";

const Home = () => {
  return (
    <Container
      name="home"
      className="flex flex-col md:flex-row gap-6 justify-center items-center"
    >

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
          Sou estudante de engenharia de software na FIAP, tenho experiência com <Destaque texto="python, html, css, javascript, react, git, github, node js, tailwind" />.
        </p>

        <section className="flex flex-col mt-5 gap-4">
          <section className="flex justify-center items-center text-4xl md:justify-start gap-2">
            <Icone icone={<FaGithub />} link="https://github.com/AntonioNeto18" />
            <Icone icone={<FaLinkedin />} link="https://www.linkedin.com/in/antonio-neto-2231b7357/" />
            <Icone icone={<FaWhatsapp />} link="https://wa.me/5511984605852" />
          </section>
          <section>
            <BotaoCV />
          </section>
        </section>

      </section>
      <section className="flex justify-center items-center md:w-1/2">
        <img
          className="border-2 border-white w-80 h-80 md:w-100 md:h-100 rounded-full object-center"
          src={imagem}
          alt="Antônio Neto"
        />
      </section>
    </Container>
  )
}

export default Home