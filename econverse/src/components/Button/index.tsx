import { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  children: ReactNode,
  type?: string
}

function Button(props: ButtonProps) {
  return (
    <a>
      <button className={`botao ${props.type}`}>
        {props.children}
      </button>
    </a>
    
  )
}

export default Button
