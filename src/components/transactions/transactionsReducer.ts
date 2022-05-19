/* eslint-disable no-case-declarations */
import { TTransactionAction, TTransactions } from '../types/types';

const initialState = {
  transactions: [],
  highest: {},
  sum: 0,
};

const transactionsReducer = (state: TTransactions = initialState, action: TTransactionAction) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'DELETE_TRANSACTION':
      const newList = state.transactions.filter((item) => item.id !== action.payload);
      return {
        ...state,
        transactions: newList,
      };
    case 'HIGHEST_TRANSACTION':
      let max;
      if (state.transactions.length === 0) {
        max = 0;
      } else {
        max = state.transactions.reduce((prev, current) => ((prev.amount > current.amount) ? prev : current));
      }
      return {
        ...state,
        highest: max,
      };
    case 'SUM_TRANSACTIONS':
      const sum = state.transactions.reduce((prev, current) => prev + +current.amount, 0);
      return {
        ...state,
        sum,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
