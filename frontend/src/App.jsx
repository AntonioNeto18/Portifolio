import Header from "./components/Header"
import Home from "./components/Home"
import Projetos from "./components/Projetos"
import Skills from "./components/Skills"

function App() {
  return (
    <section className="min-h-screen p-2 bg-gradient-to-br from-gray-700 to-gray-900">
      <section className="md:max-w-10/12 md:m-auto">
        <Header />
        <main className="flex flex-col mt-10">
          <Home />
          <Skills />
          <Projetos />
        </main>
      </section>
      
    </section>
  )
}

export default App
