import { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  children: ReactNode
}

function Button(props: ButtonProps) {
  return (
    <button className="botao">
      {props.children}
    </button>
  )
}

export default Button
