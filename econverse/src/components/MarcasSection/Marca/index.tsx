import './Marca.scss';

interface MarcaProps{
  marca: string,
  img: string,
  link: string
}

function Marca(props: MarcaProps) {
  return (
    <a href={props.link} className='marca'>
      <img alt={props.marca} src={props.img}/>
    </a>
  )
}

export default Marca