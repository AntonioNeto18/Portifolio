import { FaDocker, FaGitAlt, FaGithub } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc";
import { MdTerminal } from "react-icons/md";
import Icone from "./Icone"
import { DiPostgresql } from "react-icons/di";

const Tecnologias = () => {
  return (
    <section className="flex flex-col mt-5 gap-4 w-full">
      <h4 className='text-white text-center text-2xl uppercase font-bold'>Tecnologias e Habilidades</h4>
      <section className="grid md:grid-cols-6 grid-cols-2 text-7xl mx-auto w-fit md:text-8xl gap-16 md:gap-32">
        <Icone icone={<FaGitAlt />} label="Git"/>
        <Icone icone={<FaGithub />} label="GitHub"/>
        <Icone icone={<VscVscode />} label="VS Code"/>
        <Icone icone={<MdTerminal />} label="API REST"/>
        <Icone icone={<FaDocker />} label="Docker"/>
        <Icone icone={<DiPostgresql />} label="Postgres"/>
      </section>
    </section>
  )
}

export default Tecnologias