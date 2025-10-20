const Rede = ({ icone, link }) => {
	return (
		<a
			target="_blank"
			href={ link }
			className="hover:drop-shadow-sm hover:text-cyan-500 cursor-pointer hover:drop-shadow-cyan-500"
		>
			{icone}
		</a>
	)
}

export default Rede