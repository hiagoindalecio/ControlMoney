import { useEffect, useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { summaryData } from '../../types';

import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();
  const [ summaryData, setSummaryData ] = useState<summaryData>();

  useEffect(() => {
    var deposits = 0, withdraws = 0;
    transactions.forEach((transaction) => {
      switch(transaction.type) {
        case 'deposit': {
          deposits += transaction.ammount;
          break;
        }
        case 'withdraw': {
          withdraws += transaction.ammount;
          break;
        }
      }
    });

    setSummaryData({
      deposits, 
      withdraws
    });
  }, [transactions]);

  return(
    <Container>
      <div>
        <header>
          Entradas
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summaryData ? summaryData.deposits : 0)
          }
        </strong>
      </div>
      <div>
        <header>
          Saídas
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summaryData ? summaryData.withdraws : 0)
          }
        </strong>
      </div>
      <div className={summaryData ? (summaryData.deposits - summaryData.withdraws) > 0 ? `highlight-background` : `lowlight-background` : `highlight-background`}>
        <header>
          Total
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summaryData ? summaryData.deposits - summaryData.withdraws : 0)
          }
        </strong>
      </div>
    </Container>
  )
}