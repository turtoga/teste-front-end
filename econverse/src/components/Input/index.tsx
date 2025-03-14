import React from 'react'
import './Input.scss'

interface InputProps{
  placeholder?: string,
  type: string
}

function Input(props: InputProps) {
  return (
    <input type={props.type} placeholder={props.placeholder} className='input'/>
  )
}

export default Input