import './app.scss'
import BannerSection from './components/BannerSection'
import Categorias from './components/Categorias'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'


function App() {

  return (
    <>
      <main>
        <Hero/>
        <Categorias/>
        <BannerSection/>
        <BannerSection/>
        <Newsletter/>
      </main>
    </>
  )
}

export default App
