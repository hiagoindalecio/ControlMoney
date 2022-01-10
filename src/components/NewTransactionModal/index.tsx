import { FormEvent, useRef, useState } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { setTransactions } from '../../services/transactionService';

import { setTransaction } from '../../types';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen , onRequestClose }: NewTransactionModalProps) {
  const formElement = useRef<HTMLFormElement>(null);
  const [type, setType] = useState('deposit');

  async function handleNewTransaction(e: FormEvent) {
    e.preventDefault();
    if(formElement.current) {
      const form = formElement?.current;
      const data: setTransaction = {
        title: form['titulo'].value,
        value: form['valor'].value,
        category: form['categoria'].value,
        type: type,
      };
      const response = await setTransactions(data);
      
      console.log(response);
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