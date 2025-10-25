import Divisor from "./Divisor"
import Icone from "./Icone"
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"

const ProjetoCard = ({ titulo, descricao, deploy, git, tecnologias }) => {

  const tagsTecnologias = (tecnologia) => {
    switch (tecnologia) {
      case "FaHtml5":
        return <FaHtml5 />
      case "FaCss3":
        return <FaCss3 />
      case "FaJs":
        return <FaJs />
      case "FaReact":
        return <FaReact />
      case "RiTailwindCssFill":
        return <RiTailwindCssFill />
    }
  }
  return (
    <article
      onClick={() => window.open(deploy, "_blank")}
      className='flex flex-col cursor-pointer justify-between items-center hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-700 gap-2 w-auto bg-gray-900 rounded-2xl'
    >
      <div className="relative w-full h-[250px] overflow-hidden rounded-t-2xl shadow-lg group">
        <iframe
          src={deploy}
          className="w-full h-[600px] transition-transform duration-[8s] ease-in-out group-hover:-translate-y-[350px]"
          scrolling="no"
        ></iframe>
      </div>

      <div className="flex justify-between w-full items-center px-6">
        <h4
          className='text-white text-left text-lg md:text-2xl uppercase font-bold'
        >
          {titulo}
        </h4>
        <div className="flex gap-2 text-4xl justify-center items-center">
          {tecnologias.map((tecnologia) => (
            <Icone icone={tagsTecnologias(tecnologia)}/>
          ))}
        </div>
      </div>
      <Divisor width="90%" />

      <p
        className='text-white text-xl p-2 text-center'
      >
        {descricao}
      </p>
      <section
        className="flex justify-between w-full p-2"
      >
        <a
          href={deploy}
          target="_blank"
          className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-white text-xl text-white px-2 uppercase font-bold rounded-lg"
        >
          Projeto
        </a>
        <a
          href={git}
          target="_blank"
          className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-white text-xl text-white px-2 uppercase font-bold rounded-lg"
        >
          {"<Codigo />"}
        </a>
      </section>
    </article>
  )
}

export default ProjetoCard