import { FormEvent, useRef, useState } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { useTransactions } from '../../hooks/useTransactions';

import { transaction } from '../../types';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen , onRequestClose }: NewTransactionModalProps) {
  const { FindTransactions, CreateTransaction } = useTransactions();

  const formElement = useRef<HTMLFormElement>(null);
  const [type, setType] = useState('deposit');

  async function handleNewTransaction(e: FormEvent) {
    e.preventDefault();
    if(formElement.current) {
      const form = formElement?.current;
      const data: transaction = {
        id: 0,
        title: form['titulo'].value,
        ammount: Number(form['valor'].value),
        type: type,
        category: form['categoria'].value,
        createdAt: new Date(),
      };
      
      CreateTransaction(data).then((creationResponse) => {
        if (creationResponse.status === 201) {
          FindTransactions();
          onRequestClose();
        } else {
          alert(`Ocorreu um erro!\nTente novamente\n${creationResponse.statusText}`);
        }
      });
    }
  }
    
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button'
        onClick={onRequestClose}
        className='react-modal-close-button'
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container
        ref={formElement}
        onSubmit={handleNewTransaction}
      >
        <h2>Cadastrar transação</h2>
        <input 
          type="text"
          placeholder='Título'
          name='titulo'
        />
        <input 
          type="number"
          placeholder='Valor'
          name='valor'
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text"
          placeholder='Categoria'
          name='categoria'
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}