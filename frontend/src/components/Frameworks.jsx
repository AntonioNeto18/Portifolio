import { FaNodeJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import Skill from "./Skill"

const Frameworks = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h4 className='text-white text-center text-2xl uppercase font-bold'>Frameworks</h4>
      <section className="flex flex-col gap-8">
        <Skill icone={<FaReact />} skill="React" porcentagem="80"/>
        <Skill icone={<FaNodeJs />} skill="Node Js" porcentagem="70"/>
        <Skill icone={<RiTailwindCssFill />} skill="Tailwind" porcentagem="100"/>
      </section>
    </section>
  )
}

export default Frameworks