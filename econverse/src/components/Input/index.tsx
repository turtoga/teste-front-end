import React from 'react'
import './Input.scss'
import search from '../../assets/icons/Search.svg'

interface InputProps{
  placeholder?: string,
  type: string,
  search?:boolean
}

function Input(props: InputProps) {
  return (
    <div className='input-container'>
      {props.search && 
      <img className='icone-input' src={search}/>
      }
      <input type={props.type} placeholder={props.placeholder} className={`input ${props.search? 'serach': ''}`}/>
    </div> 
  )
}

export default Input