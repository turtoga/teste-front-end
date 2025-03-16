import { ReactNode } from 'react'
import './CategoriaHeader.scss'

interface CategoriaHeaderProps{
  children: ReactNode,
  ativo?: boolean,
  link:string,
  icone?:string
}

function CategoriaHeader({children, link ,ativo = false, icone}:CategoriaHeaderProps) {
  return (
    <a href={link} className={`categoria-header ${ativo? "ativo" : ""}`}>
      {icone && 
      <img src={icone}/>
      }
      {children}
    </a>
  )
}

export default CategoriaHeader