import './Header.scss';
import escudo from '../../assets/icons/ShieldCheck.svg'
import caminhao from '../../assets/icons/Truck.svg'
import cartao from '../../assets/icons/CreditCard.svg'
import logoHeader from '../../assets/Logo.svg'
import Input from '../Input';

function Header() {
  return (
    <header className="header">
      <section className="utilitario">
        <ul>
          <li>
            <img src={escudo}/>
            <p>Compra <span>100% segura</span></p>
          </li>
          <li>
            <img src={caminhao}/>
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </li>
          <li>
            <img src={cartao}/>
            <p><span>Parcele</span> suas compras</p>
          </li>
        </ul>
      </section>
      <section className="principal">
        <img className='logo' src={logoHeader}/>
        <Input type='text'/>
        <ul>
          <li>
            <a><img></img></a>
          </li>
          <li>
            <a><img></img></a>
          </li>
          <li>
            <a><img></img></a>
          </li>
          <li>
            <a><img></img></a>
          </li>
        </ul>
      </section>
      <section className="categorias-header">
        
      </section>
    </header>
  )
}

export default Header