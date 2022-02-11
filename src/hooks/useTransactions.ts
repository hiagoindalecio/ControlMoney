import { useContext } from "react";

import TransactionsContext from "../contexts/TransactionsContexts";

export function useTransactions() {
  return useContext(TransactionsContext);
}