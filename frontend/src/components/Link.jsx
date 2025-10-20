const Link = ({ label }) => {
  return (
    <li 
      className="text-lg font-orbitron uppercase cursor-pointer hover:text-cyan-500 transition-all duration-300"
    >
      { label }
    </li>
  )
}

export default Link