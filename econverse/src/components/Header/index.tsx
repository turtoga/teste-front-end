import './Header.scss';
import escudo from '../../assets/icons/ShieldCheck.svg'
import caminhao from '../../assets/icons/Truck.svg'
import cartao from '../../assets/icons/CreditCard.svg'
import logoHeader from '../../assets/Logo.svg'
import Input from '../Input';
import box from '../../assets/icons/Box.png'
import heart from '../../assets/icons/Heart.svg'
import profile from '../../assets/icons/UserCircle.svg'
import cart from '../../assets/icons/ShoppingCart.svg'
import CategoriaHeader from './CategoriaHeader';
import coroa from '../../assets/icons/CrownSimple.svg'

const categorias: {nome:string, link:string, ativo?:boolean, icone?:string}[] = [
  {nome: 'TODAS CATEGORIAS', link:'#'},
  {nome: 'SUPERMERCADO', link:'#'},
  {nome: 'LIVROS', link:'#'},
  {nome: 'MODA', link:'#'},
  {nome: 'LANÇAMENTOS', link:'#'},
  {nome: 'OFERTAS DO DIA', link:'#', ativo:true},
  {nome: 'ASSINATURA', link:'#', icone: coroa}
]

function Header() {
  return (
    <header className="header">
      <section className="utilitario">
        <ul>
          <li>
            <img src={escudo}/>
            <p>Compra <strong>100% segura</strong></p>
          </li>
          <li>
            <img src={caminhao}/>
            <p><strong>Frete grátis</strong> acima de R$ 200</p>
          </li>
          <li>
            <img src={cartao}/>
            <p><strong>Parcele</strong> suas compras</p>
          </li>
        </ul>
      </section>
      <section className="principal">
        <img className='logo' src={logoHeader}/>
        <Input search type='text' placeholder='O que você está buscando?'/>
        <nav>
          <ul>
            <li>
              <a href="#"><img src={box}/></a>
            </li>
            <li>
              <a href="#"><img src={heart}/></a>
            </li>
            <li>
              <a href="#"><img src={profile}/></a>
            </li>
            <li>
              <a href="#"><img src={cart}/></a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="categorias-header">
        <nav>
          <ul>
          {categorias.map((categoria,index) => (
            <li key={index}>
              <CategoriaHeader
                link={categoria.link}
                icone={categoria.icone}
                ativo = {categoria.ativo}
              >
                {categoria.nome}
              </CategoriaHeader>
            </li>
          ))}
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header