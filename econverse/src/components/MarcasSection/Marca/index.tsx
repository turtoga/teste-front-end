import './Marca.scss';

interface MarcaProps{
  marca: string,
  img: string
}

function Marca(props: MarcaProps) {
  return (
    <figure className='marca'>
      <img alt={props.marca} src={props.img}/>
    </figure>
  )
}

export default Marca