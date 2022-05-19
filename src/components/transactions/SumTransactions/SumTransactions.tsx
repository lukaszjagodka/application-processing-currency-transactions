import React from 'react';
import { useSelector } from 'react-redux';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TTransactionsOnList } from '../../types/types';

import './SumTransactions.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function SumTransaction() {
  const transactions = useSelector((state: TTransactionsOnList) => state.transactions);
  return (
    <div className="sum-transaction-container">
      <div className="sum-transaction-name">
        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            Sum of all transactions -
            {' '}
            <b>{(transactions.sum).toFixed(2)}</b>
            {' '}
            <b>EUR</b>
            {' '}
            with
            {' '}
            <b>{transactions.transactions.length}</b>
            {' '}
            transactions
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SumTransaction;
