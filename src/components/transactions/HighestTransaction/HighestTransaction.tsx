import React from 'react';
import { useSelector } from 'react-redux';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TNewTransaction, TTransactionsOnList } from '../../types/types';

import './HighestTransaction.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function HighestTransaction() {
  const transactions = useSelector((state: TTransactionsOnList) => state.transactions);
  const account = useSelector((state: any) => state.account);
  return (
    <div className="highest-transaction-container">
      <div className="h-t-name">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">Highest transaction</Typography>
        </ThemeProvider>
      </div>
      {
        transactions.highest ? (
          transactions.highest.map((transactionObj: TNewTransaction) => (
            <>
              <div className="h-t-amount">
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    Amount:
                    {' '}
                    <b>{transactionObj.amount}</b>
                    {' '}
                    <b>EUR</b>
                  </Typography>
                </ThemeProvider>
              </div>
              <div className="h-t-amount">
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    Amount:
                    {' '}
                    <b>{(transactionObj.amount * account.course).toFixed(2)}</b>
                    {' '}
                    <b>PLN</b>
                  </Typography>
                </ThemeProvider>
              </div>
              <div className="h-t-description">
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    Description:
                    {' '}
                    <b>{transactionObj.description}</b>
                  </Typography>
                </ThemeProvider>
              </div>
            </>
          ))
        ) : (
          <div className="emptyList">
            <p>
              Please add new transaction
            </p>
          </div>
        )
      }
    </div>
  );
}

export default HighestTransaction;
