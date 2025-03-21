import Titulo from '../Titulo'
import Marca from './Marca'
import imgMarca from "../../assets/img/marcas/LogoMarca.svg"
import './MarcasSection.scss'

function MarcasSection() {
  const marcas = new Array(5).fill({ marca: 'econverse', img: imgMarca, link:'#' });

  return (
    <section className='marcas-section'>
      <Titulo>Navegue por marcas</Titulo>
      <ul>
      {marcas.map((item, index) => (
        <li key={index}>
          <Marca marca={item.marca} img={item.img} link={item.link}/>
        </li>
      ))}
      </ul>
    </section>
  )
}

export default MarcasSection
