import "./Hero.scss";
import imgBanner from '../../assets/img/Banner.png'
import Button from "../Button";

function Hero() {
  return (
    <section className="hero">
      <img src={imgBanner} alt="banner blackfriday"/>
      <div className="hero-txt">
        <h1>Venha conhecer nossas promoções</h1>
        <p><strong>50% Off</strong> nos produtos</p>
        <Button>Ver Produto</Button>
      </div>
    </section>
  )
}

export default Hero