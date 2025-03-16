import './app.scss'
import BannerSection from './components/BannerSection'
import Categorias from './components/Categorias'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MarcasSection from './components/MarcasSection'
import Newsletter from './components/Newsletter'

function App() {

  return (
    <>
      <main>
        <Header/>
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
