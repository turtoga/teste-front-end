import React from 'react'
import Button from '../../Button'
import './Banner.scss'

interface BannerProps{
  titulo: string,
  descricao: string,
  img: string
}

function Banner(props:BannerProps) {
  return (
    <section className='banner'>
      <figure>
        <img src={props.img}/>
        <figcaption>
          <h1>{props.titulo}</h1>
          <p>{props.descricao}</p>
          <Button type='banner-btn'>CONFIRA</Button>
        </figcaption>
      </figure>
    </section>
  )
}

export default Banner