import { useState } from "react";
import Item from "./Item";
import './Carrossel.scss'
import gtIcon from '../../assets/icons/gt.svg'
import ltIcon from '../../assets/icons/lt.svg'
import Titulo from "../Titulo";
import ItemFilter from "./ItemFilter";
import Modal from "../Modal";

interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface CarrosselProps {
  dados: Produto[];
  versao?: 'ver1' | 'ver2';
}

const filtros = [
  {nome: "CELULAR", ativo: true, link: '#'},
  {nome: "ACESSÓRIOS", link: '#'},
  {nome: "TABLETS", link: '#'},
  {nome: "NOTEBOOKS", link: '#'},
  {nome: "TVS", link: '#'},
  {nome: "VER TODOS", link: '#'}
]

const infoAdicional= {
  precoAntigo: 30.90,
  adicional: 'ou 2x de R$ 49,95 sem juros',
  freteGratis: true
}

function Carrossel({ dados = [], versao }: CarrosselProps) {
  const [indexAtual, setIndexAtual] = useState([0,1,2,3])

  const proxItem = () => {
    setIndexAtual((indexAnt) => {
      const novoIndex = indexAnt.map((index) => {
        return (index + 1) >= dados.length? 0 : index + 1;
      })
      return novoIndex;
    })
  }

  const antItem = () => {
    setIndexAtual((prevIndex) => {
      const novoIndex = prevIndex.map((index) => {
        return (index - 1) < 0 ? dados.length - 1 : index - 1;
      });
      return novoIndex;
    })}

  const dadosAtuais = indexAtual
  .map((index) => dados[index >= 0 && index < dados.length ? index : 0]) 
  .filter((item) => item !== undefined); 

  

  return (
    <section className="carrossel-section">
      <Titulo linha todos={versao === 'ver1'? false: true}>Produtos relacionados</Titulo>
      {versao === 'ver1' &&
        <nav className="filtro">
          {filtros.map((filtro, index) => (
            <ItemFilter key={index} ativo={filtro.ativo} link={filtro.link}>
              {filtro.nome}
            </ItemFilter>
          ))}
        </nav>
      }  
        
      <article className="carrossel">
        <button className="carrossel-btn" onClick={antItem}><img src={ltIcon}/></button>
        <ul>
          {dadosAtuais.map((item: Produto, index) => (  
            <li key={index}>
              <Item 
              nome={item.productName} 
              descricao={item.descriptionShort} 
              img={item.photo} 
              preco={item.price} 
              precoAntigo={infoAdicional.precoAntigo}
              adicional={infoAdicional.adicional}
              freteGratis={true}
              />
            </li>
          ))}
        </ul>
        <button className="carrossel-btn" onClick={proxItem}><img src={gtIcon}/></button>
      </article>
    </section>
    
  )
}

export default Carrossel;