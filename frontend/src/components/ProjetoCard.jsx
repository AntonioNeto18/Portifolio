import Divisor from "./Divisor"
import TagTecnologia from "./TagTecnologia"

const ProjetoCard = ({ titulo, descricao, deploy, git, tecnologias, image }) => {

  return (
    <article
      onClick={() => window.open(deploy ? deploy : git, "_blank")}
      className='flex flex-col cursor-pointer justify-between items-center hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-700 gap-2 w-auto bg-gray-900 rounded-2xl'
    >
      <div className="relative w-full h-[250px] overflow-hidden rounded-t-2xl shadow-lg group">
        
        <img
          src={image}
          className="w-full h-full object-fit object-center"
          scrolling="no"
        />
      </div>

      <div className="flex flex-col justify-between w-full items-center px-6">
        <h4
          className='text-white text-left text-lg md:text-2xl uppercase font-bold mb-2'
        >
          {titulo}
        </h4>
        <div className="flex flex-wrap gap-4 text-4xl justify-center items-center">
          {tecnologias.map((tecnologia) => (
            <TagTecnologia tecnologia={tecnologia} />
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
        className={`flex ${deploy != null ? "justify-between" : "justify-start"} w-full p-2`}
      >
        {deploy != null && (
          <a
          href={deploy}
          target="_blank"
          className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-white text-xl text-white px-2 uppercase font-bold rounded-lg"
        >
          Projeto
        </a>
        )}
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