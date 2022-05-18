/* eslint-disable no-case-declarations */
import { TTransactionAction, TTransactions } from '../types/types';

const initialState = {
  transactions: [],
  highest: {},
};

const transactionsReducer = (state: TTransactions = initialState, action: TTransactionAction) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'DELETE_TRANSACTION':
      const index = state.transactions.findIndex((item) => item.id === action.payload);
      if (index !== -1) { state.transactions.splice(index, 1); }
      return state;
    case 'HIGHEST_TRANSACTION':
      const max = state.transactions.reduce((prev, current) => ((prev.amount > current.amount) ? prev : current));
      return {
        ...state,
        highest: max,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
