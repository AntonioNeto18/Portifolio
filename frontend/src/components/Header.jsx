import Link from "./Link"
import Logo from "./Logo"

const Header = () => {
  return (
    <header 
      className={`bg-gray-800 shadow-xl md:shadow-2xl shadow-gray-500 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 rounded-none w-screen`}
    >
      <Logo />
      <nav className="md:w-1/2">
        <ul className="list-none flex justify-around gap-4">
          <Link label="Home"/>
          <Link label="Sobre"/>
          <Link label="Projetos"/>
        </ul>
      </nav>
    </header>
  )
}

export default Header