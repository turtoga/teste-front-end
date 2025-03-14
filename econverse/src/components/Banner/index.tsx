import React from 'react'

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
        </figcaption>
      </figure>
    </section>
  )
}

export default Banner