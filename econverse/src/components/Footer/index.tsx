import insta from '../../assets/icons/instagram.svg'
import face from '../../assets/icons/facebook.svg'
import linke from '../../assets/icons/linkedin.svg'
import logo from '../../assets/Logo.svg'

import './Footer.scss'
import LinkSection from './LinkSection'

const insti = [
  {
    nome: "Sobre Nós",
    link: "#"
  },
  {
    nome: "Movimento",
    link: "#"
  },
  {
    nome: "Trabalhe conosco",
    link: "#"
  }
]

const ajuda = [
  {
    nome: "Suporte",
    link: "#"
  },
  {
    nome: "Fale Conosco",
    link: "#"
  },
  {
    nome: "Perguntas Frequentes",
    link: "#"
  }
]

const termos = [
  {
    nome: "Termos e Condições",
    link: "#"
  },
  {
    nome: "Política de Privacidade",
    link: "#"
  },
  {
    nome: "Troca e Devolução",
    link: "#"
  }
]
function Footer() {
  return (
    <footer className='footer'>
      <section className='top-footer'>
        <div className='econverse-section'>
          <img alt='Econverse Logo' src={logo} className='logo-footer'/>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <nav className='redes'>
            <ul>
              <li><a href='#'><img alt='instagram logo' src={insta}/></a></li>
              <li><a href='#'><img alt='facebook logo' src={face}/></a></li>
              <li><a href='#'><img alt='linkedin logo' src={linke}/></a></li>
            </ul>
          </nav>
        </div>
        <section className='links'>
          <LinkSection titulo='Institucional' links={insti}/>
          <LinkSection titulo='Ajuda' links={ajuda}/>
          <LinkSection titulo='Termos' links={termos}/>
        </section>
      </section>
      <section className='bottom-footer'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </footer>
  )
}

export default Footer