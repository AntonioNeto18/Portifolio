const BarraProgresso = ({ skill, porcentagem }) => {
	return (
		<div className="flex flex-col justify-center w-full">
			<header className="flex justify-between items-center">
				<span className="text-white text-xl uppercase font-bold">{ skill }</span>
				<span className="text-white text-xl uppercase font-bold">{ porcentagem }%</span>
			</header>
			<div className="h-1 w-full rounded-full bg-white">
				<div className="h-full bg-cyan-600" style={{width: `${porcentagem}%`}}></div>
			</div>
		</div>
	)
}

export default BarraProgresso