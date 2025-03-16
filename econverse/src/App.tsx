import { useEffect, useState } from 'react'
import './app.scss'
import BannerSection from './components/BannerSection'
import Categorias from './components/Categorias'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MarcasSection from './components/MarcasSection'
import Newsletter from './components/Newsletter'
import Carrossel from './components/Carrossel'
import items from './data/Produtos.json'

interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}


function App() {

  const [dadosCar, setDadosCar] = useState<Produto[]>([])

  useEffect(() => {
    const carregarDados = async () => {
      try{
        const resposta = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        const resultado = await resposta.json()
        setDadosCar(resultado.products);
      } catch(error){
        setDadosCar(items.products)
      }
    }

    carregarDados()
  }, [])

  return (
    <>
      <main>
        <Header/>
        <Hero/>
          <div className='content-container'>
            <Categorias/>
            <Carrossel versao='ver1' dados={dadosCar}/>
            <BannerSection/>
            <Carrossel dados={dadosCar}/>
            <BannerSection/>
            <MarcasSection/>
            <Carrossel dados={dadosCar}/>
            <Newsletter/>
          </div>
        <Footer/>
      </main>
    </>
  )
}

export default App
