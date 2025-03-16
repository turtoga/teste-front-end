import { useState } from 'react'; 
import './Item.scss';
import Button from '../../Button';
import Modal from '../../Modal';
import { Produto } from '../../../types/types';

interface ItemProps {
  nome: string;
  descricao: string;
  img: string;
  preco: number;
  precoAntigo?: number;
  adicional?: string;
  freteGratis?: boolean
}

function Item({ nome, descricao, img, preco, precoAntigo, adicional, freteGratis=false }: ItemProps) {
  const [itemSelecionado, setItemSelecionado] = useState<Produto | null>(null); 

  const abrirModal = () => {
    setItemSelecionado({ nome, descricao, img, preco });
  };

  const fecharModal = () => {
    setItemSelecionado(null);
  };

  return (
    <>
      <Modal item={itemSelecionado} aoFechar={fecharModal}/>
      <article className="item"> 
        <img alt={nome} src={img} />
        <h2>{nome}</h2>
        {precoAntigo &&
          <p><del>R$ {precoAntigo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</del></p>
        }
        <p><strong>R$ {preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
        {adicional &&
          <p>{adicional}</p>
        }
        {freteGratis &&
          <p><span>Frete grátis</span></p>
        }
        <Button onClick={abrirModal} type="item-btn" aria-label={`Comprar ${nome}`}>
          Comprar
        </Button>
      </article>
    </>
  );
}

export default Item;
