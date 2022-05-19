import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Collapse from '@mui/material/Collapse';
import TransactionItem from '../ Transaction /TransactionItem';
import { TNewTransaction, TTransactionsOnList } from '../../types/types';
import SumTransaction from '../SumTransactions/SumTransactions';

import './TransactionsList.css';

function TransactionsList() {
  const transactions = useSelector((state: TTransactionsOnList) => state.transactions.transactions);

  return (
    <div className="transactions-list-container">
      <SumTransaction />
      <div className="transactions-list">
        {
          transactions.length ? transactions.map((transactionObj: TNewTransaction) => (
            <TransactionItem key={transactionObj.id} params={transactionObj} />
          )) : (
            <div className="emptyList">
              <p>
                Please add new transaction
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default TransactionsList;
