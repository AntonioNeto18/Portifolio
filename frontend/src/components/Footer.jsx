import { FaWhatsapp } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import Divisor from "./Divisor"
import Icone from "./Icone"
import Logo from "./Logo"
import CopiarTexto from "./CopiarTexto"

const Footer = () => {
  return (
    <footer className="md:h-70 mt-5 bg-black flex flex-col gap-4 items-center w-full">
      <div className="flex flex-col items-center md:flex-row gap-2 md:justify-between md:items-center w-full h-full py-8">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <Logo />
        </div>

        <div className="md:w-1 md:h-full h-1 w-11/12">
          <Divisor width="100%" height="100%" />
        </div>
        
        <div className="w-full md:w-1/2 h-full flex flex-col gap-4 justify-center items-center">
          <h2 className="text-3xl bg-gradient-to-tr from-cyan-500 to-white bg-clip-text text-transparent uppercase font-orbitron font-bold text-center md:text-left">Contato</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center text-4xl">
              <Icone icone={<FaWhatsapp />} />
              <CopiarTexto texto="+55 (11) 98460-5852" />
            </div>

            <div className="flex gap-2 items-center text-4xl">
              <Icone icone={<CiMail />} />
              <CopiarTexto texto="antoniojacintoa@gmail.com" />
            </div>
          </div>
        </div>
      </div>
      <span className="text-2xl text-white font-bold">&copy; 2025 - Antônio Neto</span>

    </footer>
  )
}

export default Footer