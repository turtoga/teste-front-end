import './Input.scss'
import search from '../../assets/icons/Search.svg'

interface InputProps{
  placeholder?: string,
  type: string,
  search?:boolean,
  value?: number | string,
}

function Input(props: InputProps) {
  return (
    <div className='input-container'>
      {props.search && 
      <img className='icone-input' src={search}/>
      }
      <input readOnly={props.type === 'number'} type={props.type} value={props.value} placeholder={props.placeholder} className={`input ${props.search? 'serach': ''}`}/>
    </div> 
  )
}

export default Input