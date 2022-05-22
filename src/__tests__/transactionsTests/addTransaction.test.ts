import { v4 as uuidv4 } from 'uuid';
import { TNewTransaction } from '../../components/types/types';
import { addTransaction } from '../../components/transactions/transactionsActions';
import transactionsReducer from '../../components/transactions/transactionsReducer';

test('should return the initial state', () => {
  expect(transactionsReducer(undefined, {})).toEqual(
    {
      transactions: [],
      highest: [],
      sum: 0,
    },
  );
});

test('should handle a transaction being added to an empty list', () => {
  const previousState = {
    transactions: [],
    highest: [],
    sum: 0,
  };

  const newTransaction: TNewTransaction = {
    id: uuidv4(),
    amount: Number(100),
    description: 'Lorem ipsum',
    createdAt: new Date(),
  };

  expect(transactionsReducer(previousState, addTransaction(newTransaction))).toEqual(
    {
      transactions: [
        {
          id: expect.any(String),
          amount: expect.any(Number),
          description: expect.any(String),
          createdAt: expect.any(Date),
        },
      ],
      highest: [],
      sum: 0,
    },
  );
});
