import { TransactionsApi } from './base/api';

import { messageResponse, setTransaction, transaction } from '../types';

import { AxiosResponse } from 'axios';

export function getTransactions() {
  return new Promise<AxiosResponse<transaction[], any>>((resolve) => {
    TransactionsApi.get<transaction[]>('http://localhost:3000/api/transactions')
      .then(data => {
        resolve(data);
      });
  });
}

export function setTransactions(data: setTransaction) {
  return new Promise<AxiosResponse<messageResponse, any>>((resolve) => {
    TransactionsApi.post<messageResponse>('http://localhost:3000/api/transactions', data)
      .then(data => {
        resolve(data);
      });
  });
}