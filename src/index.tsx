import React from 'react';
import ReactDOM from 'react-dom';

import { createServer } from 'miragejs';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 1000,
          type: 'deposity',
          category: 'Desenvolvimento',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 500,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date()
        }
      ]
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);