import { TNewTransaction } from '../types/types';

export const addTransaction = (payload: TNewTransaction) => ({
  type: 'ADD_TRANSACTION',
  payload,
});

export const deleteTransaction = (payload: string) => ({
  type: 'DELETE_TRANSACTION',
  payload,
});

export const highestTransaction = () => ({
  type: 'HIGHEST_TRANSACTION',
});

export const sumTransactions = () => ({
  type: 'SUM_TRANSACTIONS',
});
