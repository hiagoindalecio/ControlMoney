import { TransactionsApi } from './base/api';

import { messageResponse, transactions, transaction } from '../types';

import { AxiosResponse } from 'axios';

export function getTransactions() {
  return new Promise<AxiosResponse<transactions, any>>((resolve) => {
    TransactionsApi.get<transactions>('http://localhost:3000/api/transactions')
      .then(data => {
        resolve(data);
      });
  });
}

export function setTransactions(data: transaction) {
  return new Promise<AxiosResponse<messageResponse, any>>((resolve) => {
    TransactionsApi.post<messageResponse>('http://localhost:3000/api/transactions', data)
      .then(data => {
        resolve(data);
      });
  });
}