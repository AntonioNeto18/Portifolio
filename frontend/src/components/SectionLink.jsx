import { Link } from "react-scroll"

const SectionLink = ({ label, section, onClick = null }) => {
  return (
    <Link
      to={ section }
      smooth={true}
      duration={500}
      offset={-50} 
      onClick={onClick}
      className="text-lg font-orbitron uppercase cursor-pointer hover:text-cyan-500 transition-all duration-300"
    >
      { label }
    </Link>
  )
}

export default SectionLink