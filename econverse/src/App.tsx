import './app.scss'
import BannerSection from './components/BannerSection'
import Categorias from './components/Categorias'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MarcasSection from './components/MarcasSection'
import Newsletter from './components/Newsletter'
import Titulo from './components/Titulo'

function App() {

  return (
    <>
      <main>
        <Hero/>
        <Categorias/>
        <BannerSection/>
        <BannerSection/>
        <MarcasSection/>
        <Newsletter/>
        <Footer/>
      </main>
    </>
  )
}

export default App
