/* eslint-disable no-case-declarations */
import { TTransactionAction, TTransactions } from '../types/types';

const initialState = {
  transactions: [],
};

const transactionsReducer = (state: TTransactions = initialState, action: TTransactionAction) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default transactionsReducer;
