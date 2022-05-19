import React from 'react';
import { useSelector } from 'react-redux';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TTransactionsOnList } from '../../types/types';

import './HighestTransaction.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function HighestTransaction() {
  const transactions = useSelector((state: TTransactionsOnList) => state.transactions);
  return (
    <div className="highest-transaction-container">
      <div className="h-t-name">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">Highest transaction</Typography>
        </ThemeProvider>
      </div>
      <div className="h-t-amount">
        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            Amount:
            {' '}
            <b>{transactions.highest.amount}</b>
            {' '}
            <b>Euro</b>
          </Typography>
        </ThemeProvider>
      </div>
      <div className="h-t-description">
        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            Description:
            {' '}
            <b>{transactions.highest.description}</b>
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default HighestTransaction;
