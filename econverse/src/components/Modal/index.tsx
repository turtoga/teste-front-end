import { useEffect, useRef, useState } from 'react';
import { Produto } from '../../types/types';
import "./Modal.scss"
import Button from '../Button';
import Input from '../Input';

interface ModalProps {
  item: Produto | null;
  aoFechar: () => void;
}

function Modal(props: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [aberto, setAberto] = useState(false);

  const[contador, setContador] = useState(1)

  const maisContador = () => {
    setContador(contador+1)
  }

  const menosContador = () => {
    contador-1 < 0? setContador(0):setContador(contador-1);
  }

  const aoFecharModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setAberto(false); 
      props.aoFechar();
    }
  };

  useEffect(() => {
    if (props.item) {
      setAberto(true); 
    }
  }, [props.item]);

  return (
    <>
      {props.item && aberto && (
        <>
          <div className='overlay' onClick={aoFecharModal}></div>
          <dialog className='modal' ref={dialogRef} open={aberto}>
            <button onClick={aoFecharModal} className='fechar'>✕</button>
            <figure>
              <img src={props.item.img}/>
              <figcaption>
                <div className='texto-card'>
                  <p className='nome-produto'>{props.item.nome}</p>
                  <p className='preco-produto'>R$ {props.item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p className='descricao-produto'>{props.item.descricao}</p>
                  <a className='detalhes'>Veja mais detalhes sobreo produto &gt;</a>
                </div>
                
                <div className='botoes'>
                  <div className='contador'>
                    <button onClick={menosContador}>-</button>
                    <Input type='number' value={contador} />
                    <button onClick={maisContador}>+</button>
                  </div>
                  <Button>Comprar</Button>
                </div>
              </figcaption>
            </figure>
          </dialog>
        </>
      )}
    </>
  );
}

export default Modal;
