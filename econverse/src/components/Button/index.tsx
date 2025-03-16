import { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  children: ReactNode,
  type?: string
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button className={`botao ${props.type}`} onClick={props.onClick}>
      {props.children}
    </button>
    
  )
}

export default Button
