import ItemCategoria from './ItemCategoria'
import './Categorias.scss';


const categorias: {titulo:string; img:string; ativo?:boolean; link:string}[] = [
  {titulo: 'Tecnologia', img: '/img/categorias/tecnologia.png', ativo: true, link: "#"},
  {titulo: 'Supermercado', img: '/img/categorias/supermercados.png', link: "#"},
  {titulo: 'Bebidas', img: '/img/categorias/bebidas.png', link: "#"},
  {titulo: 'Ferramentas', img: '/img/categorias/ferramentas.png', link: "#"},
  {titulo: 'Saúde', img: '/img/categorias/saude.png', link: "#"},
  {titulo: 'Esportes e Fitness', img: '/img/categorias/esportes.png', link: "#"},
  {titulo: 'Moda', img: '/img/categorias/moda.png', link: "#"}
]

function Categorias() {


  return (
    <section className='categorias'>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <ItemCategoria
            img={categoria.img}
            titulo={categoria.titulo}
            ativo={categoria.ativo}
            link={categoria.link}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categorias