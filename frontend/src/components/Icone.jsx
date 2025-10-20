const Icone = ({ icone, link = null}) => {
	return (
		<a
			target="_blank"
			href={ link }
			className={`text-white w-fit hover:drop-shadow-sm hover:drop-shadow-cyan-500 hover:text-cyan-500 cursor-pointer`}
		>
			{icone}
		</a>
	)
}

export default Icone