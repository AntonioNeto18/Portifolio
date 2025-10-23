import { Link } from "react-scroll"

const Logo = ({ onClick = null }) => {
  return (
    <Link
      onClick={onClick}
      to="home"
      smooth={true}
      duration={500}
      offset={-50} 
      className="text-3xl z-10 text-white font-orbitron font-bold uppercase cursor-pointer hover:text-cyan-500 transition-all duration-300"
    >
      AN
    </Link>
  )
}

export default Logo