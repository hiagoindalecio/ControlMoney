import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import { App } from './App';
import { TransactionsProvider } from './contexts/TransactionsContexts';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          ammount: 1000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          ammount: 500,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date()
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      schema.create('transaction', data);

      return { message: `Transação ${data.title} salva com sucesso!` }
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);