import { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  children: ReactNode,
  type?: string
}

function Button(props: ButtonProps) {
  return (
    <button className={`botao ${props.type}`}>
      {props.children}
    </button>
  )
}

export default Button
