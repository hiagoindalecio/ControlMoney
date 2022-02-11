import { AxiosResponse } from 'axios';
import React, {createContext, useEffect, useState} from 'react';

import { getTransactions as getTransactionsService, setTransactions as setTransactionsService} from '../services/transactionService';

import { TransactionsContextData, transaction, messageResponse } from '../types';

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider: React.FC = ({ children }) => {

  const [transactions, setTransactions] = useState<transaction[]>([]);

  function FindTransactions() {
    getTransactionsService()
      .then((response) => {
        if(response.data.transactions.length > 0) {
          setTransactions(response.data.transactions);
        }
      });
  }

  async function CreateTransaction(data: transaction): Promise<AxiosResponse<messageResponse, any>> {
    return new Promise((resolve) => {
      setTransactionsService(data).then((response) => {
        resolve(response);
      });
    });
  }

  useEffect(() => {
    getTransactionsService()
      .then((response) => {
        if(response.data.transactions.length > 0) {
          setTransactions(response.data.transactions);
        }
      });
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions, FindTransactions, CreateTransaction }}>
      { children }
    </TransactionsContext.Provider>
  )
}

export default TransactionsContext;