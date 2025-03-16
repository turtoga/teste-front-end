import { ReactNode } from "react"
import './ItemFilter.scss'

interface ItemFilter{
  children: ReactNode,
  link: string,
  ativo?: boolean
}

function ItemFilter({children, link,ativo = false}:ItemFilter) {
  return (
    <div className={`item-filter ${ativo ? 'ativo' : ''}`}>
      <a href={link}><p>{children}</p></a>
    </div>
  )
}

export default ItemFilter