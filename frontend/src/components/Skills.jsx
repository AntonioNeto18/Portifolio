import { FaHtml5, FaCss3, FaJs, FaPython, FaNodeJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import Container from './Container'
import Icone from './Icone'
import Titulo from './Titulo'
import Divisor from './Divisor'
import Linguagens from './Linguagens'
import Frameworks from './Frameworks'
import Tecnologias from './Tecnologias'

const Skills = () => {
	return (
		<Container
			name='skills'
			className='flex flex-col'
		>
			<Titulo
				texto="Skills"
			/>
			<section className='flex flex-col md:flex-row gap-32 md:justify-between my-15 w-full'>
				<div className='md:w-1/2 md:mr-5'>
					<Linguagens />
				</div>
				<div className='md:w-1/2 md:ml-5'>
					<Frameworks />
				</div>
			</section>

			<Divisor width='100%'/>

			<section className='flex flex-col w-full items-center'>
				<Tecnologias />
			</section>
		</Container>
	)
}

export default Skills