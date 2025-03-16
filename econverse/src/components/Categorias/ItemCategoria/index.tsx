import './ItemCategoria.scss';
interface ItemCategoriaProps {
  img: string,
  titulo: string,
  link: string,
  ativo?: boolean,
}

function ItemCategoria({img, titulo, ativo = false, link}:ItemCategoriaProps) {
  return (
    <a href={link} className='item-categoria'>
      <figure className={`${ativo? 'ativo':''}`}>
        <img src={img} alt={titulo}/>
        <figcaption>
          <h2>{titulo}</h2>
        </figcaption>
      </figure>
    </a>
  )
}

export default ItemCategoria
