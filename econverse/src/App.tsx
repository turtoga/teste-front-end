import './app.scss'
import Banner from './components/Banner'
import Categorias from './components/Categorias'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import img from './assets/img/bannerApoio.png'


function App() {

  return (
    <>
      <main>
        <Hero/>
        <Categorias/>
        <Newsletter/>
        <Banner img={img} titulo='aaa' descricao='aaaaa'/>
      </main>
    </>
  )
}

export default App
