import SectionLink from "./SectionLink"
import Logo from "./Logo"
import IconeMenu from "./IconeMenu"
import { useState } from "react"
import BotaoCV from "./BotaoCV"

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header
      className={`bg-gray-800 shadow-lg shadow-gray-500 text-white py-4 px-6 flex justify-between items-center z-10 fixed top-0 left-0 rounded-none w-screen`}
    >
      <Logo 
        onClick={() => setMenuAberto(false)}
      />
      <nav className="hidden md:block md:w-1/2">
        <ul className="list-none flex justify-around items-center gap-4">
          <SectionLink label="Home" section="home" />
          <SectionLink label="Skills" section="skills" />
          <SectionLink label="Projetos" section="projetos" />
          <BotaoCV />
        </ul>
      </nav>

      <IconeMenu
        setMenuAberto={setMenuAberto}
        menuAberto={menuAberto}
      />

      <section
        className={`md:hidden absolute h-screen w-screen bg-gray-800 flex flex-col justify-center items-center top-0 transition-all duration-300 ${menuAberto ? "left-0" : "left-full"
          }`}
      >
        <ul className="flex flex-col justify-center items-center gap-10 text-2xl">
          <SectionLink
            label="Home"
            section="home"
            onClick={() => setMenuAberto(false)}
          />
          <SectionLink
            label="Skills"
            section="skills"
            onClick={() => setMenuAberto(false)}
          />
          <SectionLink
            label="Projetos"
            section="projetos"
            onClick={() => setMenuAberto(false)}
          />
          <BotaoCV />
        </ul>
      </section>
    </header>
  )
}

export default Header