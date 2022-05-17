import { combineReducers } from 'redux';
import transactionsReducer from './components/transactions/ transactionsReducer';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

export default rootReducer;
