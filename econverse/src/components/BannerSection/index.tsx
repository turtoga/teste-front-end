import Banner from "./Banner"
import img from '../../assets/img/bannerApoio.png'
import './BannerSection.scss'

const banners = [
  { img, titulo: 'Parceiros', descricao: 'Lorem ipsum dolor sit amet, consectetur' },
  { img, titulo: 'Parceiros', descricao: 'Lorem ipsum dolor sit amet, consectetur' },
  
]

function BannerSection() {
  return (
    <section className='banner-section'>
      {banners.map((banner, index) => (
        <Banner key={index} img={banner.img} titulo={banner.titulo} descricao={banner.descricao} />
      ))}
    </section>
  )
}

export default BannerSection
