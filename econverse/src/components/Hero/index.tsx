import "./Hero.scss";
import imgBanner from '../../assets/img/Banner.png'
import Button from "../Button";

function Hero() {
  return (
    <section className="hero">
      <img src={imgBanner} alt="aaa" />
      <div className="hero-txt">
        <h1>Venha conhecer nossas promoções</h1>
        <h3><span>50% Off</span> nos produtos</h3>
        <Button>Ver Produto</Button>
      </div>
    </section>
  )
}

export default Hero