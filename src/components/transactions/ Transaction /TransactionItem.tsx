import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import './TransactionItem.css';
import Button from '@mui/material/Button/Button';
import { TNewTransaction } from '../../types/types';
import { deleteTransaction, highestTransaction, sumTransactions } from '../transactionsActions';

let theme = createTheme();
theme = responsiveFontSizes(theme);

type TProps = {
  params: TNewTransaction,
}

function TransactionItem(props: TProps) {
  const dispatch = useDispatch();
  const account = useSelector((state: any) => state.account);
  const { params } = props;

  const deleteItem = () => {
    dispatch(deleteTransaction(params.id));
    dispatch(highestTransaction());
    dispatch(sumTransactions());
  };

  return (
    <div className="transaction-item-container">
      <div className="transaction-item-name">
        <ThemeProvider theme={theme}>
          <Typography className="transaction-item-name-typo" variant="h5">{params.description}</Typography>
        </ThemeProvider>
        <div className="transaction-item-delete">
          <Button variant="contained" className="delete-btn" size="small" color="error" onClick={deleteItem}>delete</Button>
        </div>
      </div>
      <div className="amount">
        <p className="amount-typo-euro">
          {params.amount}
          {' '}
          EUR -
        </p>
      </div>
      <div className="amount">
        <p className="amount-typo-pln">
          {(params.amount * account.course).toFixed(2)}
          {' '}
          PLN
        </p>
      </div>
    </div>
  );
}

export default TransactionItem;
