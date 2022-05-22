import { deleteTransaction } from '../../components/transactions/transactionsActions';
import transactionsReducer from '../../components/transactions/transactionsReducer';

test('should delete a transaction', () => {
  const previousState = {
    transactions: [
      {
        id: '2c1e30d3-a087-44d2-940c-08e03b5077ff',
        amount: expect.any(Number),
        description: expect.any(String),
        createdAt: expect.any(Date),
      },
      {
        id: 'fe68ca6e-a027-4f2f-97dc-1696b1e7ddbd',
        amount: expect.any(Number),
        description: expect.any(String),
        createdAt: expect.any(Date),
      },
    ],
    highest: [],
    sum: 0,
  };

  expect(transactionsReducer(previousState, deleteTransaction('2c1e30d3-a087-44d2-940c-08e03b5077ff'))).toEqual(
    {
      transactions: [
        {
          id: 'fe68ca6e-a027-4f2f-97dc-1696b1e7ddbd',
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
