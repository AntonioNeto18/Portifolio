const Icone = ({ icone, link = null, label = null }) => {
  return (
    <a
      target="_blank"
      href={link}
      className={`flex flex-col items-center gap-1 text-white w-fit hover:drop-shadow-sm hover:drop-shadow-cyan-500 hover:text-cyan-500 cursor-pointer`}
    >
      {icone}
      <span
        className="md:text-lg text-sm uppercase text-center font-bold"
      >
        {label}
      </span>
    </a>
  )
}

export default Icone