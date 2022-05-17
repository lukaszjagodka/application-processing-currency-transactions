import React, { useState } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import './TransactionItem.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function TransactionItem() {
  const [euro, setEuro] = useState<number>(0);
  const [pln, setPln] = useState<number>(0);
  return (
    <div className="transaction-item-container">
      <div className="transaction-item-name">
        <ThemeProvider theme={theme}>
          <Typography className="transaction-item-name-typo" variant="h5">Transaction name</Typography>
        </ThemeProvider>
      </div>
      <div className="amount">
        <p className="amount-typo-euro">
          {euro}
          {' '}
          Euro -
        </p>
      </div>
      <div className="amount">
        <p className="amount-typo-pln">
          {pln}
          {' '}
          Pln
        </p>
      </div>
    </div>
  );
}

export default TransactionItem;
