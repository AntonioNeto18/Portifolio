import BarraProgresso from "./BarraProgresso"
import Icone from "./Icone"

const Skill = ({ icone, skill, porcentagem }) => {
  return (
    <div className="flex gap-2 items-center text-2xl md:text-4xl">
      <Icone icone={icone} />
      <BarraProgresso skill={skill} porcentagem={porcentagem} />
    </div>
  )
}

export default Skill