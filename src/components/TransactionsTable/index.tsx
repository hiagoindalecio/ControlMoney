import { useEffect, useState } from 'react';

import { Container } from './styles';

import { getTransactions } from '../../services/transactionService';

import { transaction } from '../../types';

export function TransactionTable() {
  const [transactions, setTransactions] = useState<transaction[]>([]);

  useEffect(() => {
    getTransactions()
      .then((transactions) => {
        if(transactions.data.length > 0) {
          setTransactions(transactions.data);
        }
      })
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map( transaction =>
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </Container>
  );
}