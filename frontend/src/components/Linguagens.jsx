import { FaCss3, FaHtml5, FaJava, FaJs, FaPython } from "react-icons/fa"
import Skill from "./Skill"

const Linguagens = () => {
    return (
        <section className="flex flex-col gap-4 w-full">
            <h4 className='text-white text-center text-2xl uppercase font-bold'>Linguagens</h4>
            <section className="flex flex-col gap-8">
                <Skill icone={<FaHtml5 />} skill="Html" porcentagem="100"/>
                <Skill icone={<FaCss3 />} skill="Css" porcentagem="100"/>
                <Skill icone={<FaJs />} skill="JavaScript" porcentagem="100"/>
                <Skill icone={<FaPython />} skill="Python" porcentagem="80"/>
                <Skill icone={<FaJava />} skill="Java" porcentagem="60"/>
            </section>
        </section>
    )
}

export default Linguagens