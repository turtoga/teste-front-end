import './ItemCategoria.scss';
interface ItemCategoriaProps {
  img: string,
  titulo: string,
  ativo?: boolean;
}

function ItemCategoria({img, titulo, ativo = false}:ItemCategoriaProps) {
  return (
    <section className='item-categoria'>
      <figure className={`${ativo? 'ativo':''}`}>
        <img src={img} alt={titulo}/>
        <figcaption>
          <h5>{titulo}</h5>
        </figcaption>
      </figure>
    </section>
  )
}

export default ItemCategoria
