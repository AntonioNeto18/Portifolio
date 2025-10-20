import { FaHtml5, FaCss3, FaJs, FaPython, FaNodeJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import Container from './Container'
import Icone from './Icone'
import Titulo from './Titulo'

const Skills = () => {
	return (
		<Container
			name='skills'
			className='flex flex-col h-screen'
		>
			<Titulo
				texto="Skills"
			/>
			<section
				className='flex flex-col justify-center gap-16 items-center h-full'
			>

				<section
					className='grid grid-cols-5 text-4xl md:text-8xl col-auto gap-8 md:gap-16 items-center'
				>
					<Icone icone={<FaHtml5 />} />
					<Icone icone={<FaCss3 />} />
					<Icone icone={<FaJs />} />
					<Icone icone={<FaNodeJs />} />
					<Icone icone={<FaPython />} />
				</section>

				<section
					className='grid grid-cols-3 text-4xl md:text-8xl col-auto gap-8 md:gap-16 items-center'
				>
					<Icone icone={<FaReact />} />
					<Icone icone={<FaGitAlt />} />
					<Icone icone={<FaGithub />} />
				</section>

			</section>
		</Container>
	)
}

export default Skills