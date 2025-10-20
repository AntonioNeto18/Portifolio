import Divisor from "./Divisor"

const ProjetoCard = ({ imagem, titulo, descricao, deploy, git }) => {
	return (
		<article 
			className='flex flex-col justify-between items-center hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-700 gap-2 w-auto bg-gray-900 rounded-2xl'
		>
			<img 
				src={imagem} 
				alt={titulo} 
				className='h-[200px] w-full rounded-t-2xl object-cover object-center'
			/>
			<h4 
				className='text-white text-center text-2xl uppercase font-bold'
			>
				{titulo}
			</h4>
			<Divisor width="10/12" />
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
					className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-white text-xl text-white px-2 uppercase font-bold rounded-lg"
				>
					Projeto
				</a>
				<a
					href={git}
					className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300 border-2 border-white text-xl text-white px-2 uppercase font-bold rounded-lg"
				>
					{"<Codigo />"}
				</a>
			</section>
		</article>
	)
}

export default ProjetoCard