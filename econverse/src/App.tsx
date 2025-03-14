import './app.scss'
import ItemCategoria from './components/Categorias/ItemCategoria'
import Hero from './components/Hero'
import img from './assets/img/categorias/supermercados.png'

function App() {

  return (
    <>
      <main>
        <Hero/>
        <ItemCategoria img={img} titulo={"Supermercado"}/>
      </main>
    </>
  )
}

export default App
