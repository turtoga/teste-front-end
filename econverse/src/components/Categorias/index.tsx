import ItemCategoria from './ItemCategoria'
import './Categorias.scss';


const categorias: {titulo:string; img:string; ativo?:boolean}[] = [
  {titulo: 'Tecnologia', img: '/img/categorias/tecnologia.png', ativo: true},
  {titulo: 'Supermercado', img: '/img/categorias/supermercados.png'},
  {titulo: 'Bebidas', img: '/img/categorias/bebidas.png'},
  {titulo: 'Ferramentas', img: '/img/categorias/ferramentas.png'},
  {titulo: 'Saúde', img: '/img/categorias/saude.png'},
  {titulo: 'Esportes e Fitness', img: '/img/categorias/esportes.png'},
  {titulo: 'Moda', img: '/img/categorias/moda.png'}
]

function Categorias() {


  return (
    <section className='categorias'>
      <ul>
        {categorias.map((categoria, index) => (
          <li>
            <ItemCategoria
            key={index}
            img={categoria.img}
            titulo={categoria.titulo}
            ativo={categoria.ativo}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categorias