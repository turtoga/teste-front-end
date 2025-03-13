

interface ItemCategoriaProps {
  img: string,
  titulo: string
}

function ItemCategoria(props: ItemCategoriaProps) {
  return (
    <section className="item-categoria">
      <figure>
        <img src={props.img} alt={props.titulo} />
        <figcaption>
          <h5>{props.titulo}</h5>
        </figcaption>
      </figure>
    </section>
  )
}

export default ItemCategoria
