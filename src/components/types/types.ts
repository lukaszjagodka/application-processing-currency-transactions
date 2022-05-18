export type TNewTransaction = {
  id: string,
  amount: number,
  description: string,
  createdAt: Date
};

export type TTransactionAction = {
  type: string,
  payload?: any
};

export type TTransactions = {
  transactions: Array<TNewTransaction>
};

export type TTransactionsOnList = {
  transactions: {
    transactions: Array<TNewTransaction>
  }
};
