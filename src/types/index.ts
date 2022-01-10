export type transaction = {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: Date
}

export type setTransaction = {
  title: string,
  value: string,
  category: string,
  type: string,
}

export type messageResponse = {
  message: string,
}