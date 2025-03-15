import { ReactNode } from 'react'
import './Titulo.scss'

interface TituloProps {
  children: ReactNode,
  linha?: boolean,
  todos?: boolean
}

function Titulo({ children, linha = false, todos = false}: TituloProps) {
  return (
    <div className={`titulo ${todos? "padding-pequeno":"padding-grande"}`}>
      <h1>{children}</h1>
      {linha &&
      <div className={`linha ${todos? "" : "linha-solo"}`}/>
      }
      {todos && 
      <a>Ver todos</a>
      }
    </div>
  )
}

export default Titulo
