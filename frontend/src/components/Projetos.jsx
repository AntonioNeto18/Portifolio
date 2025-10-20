import Container from "./Container"
import Titulo from "./Titulo"
import img from "../assets/imagem1.png"
import ProjetoCard from "./ProjetoCard"

const Projetos = () => {
  return (
    <Container
      name="projetos"
    >
        <Titulo 
          texto="Projetos"
        />
        <section className='mt-5 grid grid-cols-3'>
				<ProjetoCard
					imagem={img}
					titulo="Teste"
					descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis alias expedita esse placeat nostrum dolorum nemo incidunt excepturi, reiciendis pariatur, vero numquam aspernatur mollitia, natus nam ullam nihil totam."
				/>
			</section>
    </Container>
  )
}

export default Projetos