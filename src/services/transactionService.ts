import { TransactionsApi } from './base/api';
import { transaction } from '../types';

import { AxiosResponse } from 'axios';

export function getTransactions() {
  return new Promise<AxiosResponse<transaction[], any>>((resolve) => {
    TransactionsApi.get<transaction[]>('http://localhost:3000/api/transactions')
      .then(data => {
        resolve(data);
      });
  });
}