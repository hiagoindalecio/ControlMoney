import { AxiosResponse } from "axios"

import { Dispatch } from "react"

export type summaryData = {
  deposits: number,
  withdraws: number,
}

export type transaction = {
  id: number,
  title: string,
  ammount: number,
  type: string,
  category: string,
  createdAt: Date
}

export type transactions = {
  transactions: transaction[],
}

export type messageResponse = {
  message: string,
}

export type TransactionsContextData = {
  transactions: transaction[],
  setTransactions: Dispatch<React.SetStateAction<transaction[]>>,
  FindTransactions(): void,
  CreateTransaction(data: transaction): Promise<AxiosResponse<messageResponse, any>>,
}