import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField/TextField';
import FormControl from '@mui/material/FormControl/FormControl';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input/Input';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { v4 as uuidv4 } from 'uuid';
import capitalizeFirstLetter from '../../../helpers/capitalizeFirstLetter';
import { TNewTransaction } from '../../types/types';
import { addTransaction, highestTransaction, sumTransactions } from '../transactionsActions';

import './AddTransaction.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function AddTransaction() {
  const dispatch = useDispatch();
  const account = useSelector((state: any) => state.account);
  const [amount, setAmount] = useState<number>(1);
  const [descLength, setDescLength] = useState<number>(50);
  const [description, setDescription] = useState<string>('');

  const handleAddTransaction = () => {
    if (description === '') return;
    const newTransaction: TNewTransaction = {
      id: uuidv4(),
      amount: Number(amount),
      description,
      createdAt: new Date(),
    };
    dispatch(addTransaction(newTransaction));
    dispatch(highestTransaction());
    dispatch(sumTransactions());
    resetForm();
  };

  const handleChangeAmount = (event: any) => {
    const numberRegex = /^[0-9\b]+$/;
    if (event.target.value === '' || numberRegex.test(event.target.value)) {
      setAmount(event.target.value);
    }
  };

  const handleDescription = (event: any) => {
    if ((event.target.value).length <= descLength) {
      const capitalizeDescription = capitalizeFirstLetter(event.target.value);
      setDescription(capitalizeDescription);
    }
  };

  const resetForm = () => {
    setAmount(1);
    setDescription('');
  };

  return (
    <div className="add-transaction-container">
      <div className="add-transaction-name">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">Add transaction</Typography>
        </ThemeProvider>
      </div>
      <div className="add-transaction-form">
        <div className="add-transaction-desc">
          <TextField fullWidth id="outlined-basic" label="Transaction name" variant="outlined" value={description} onChange={handleDescription} />
        </div>
        <div className="add-transaction-amount">
          <div className="add-transaction-amount-input-name">
            <ThemeProvider theme={theme}>
              <Typography variant="h5">Amount</Typography>
            </ThemeProvider>
          </div>
        </div>
        <div className="add-transaction-amount">
          <div className="add-transaction-amount-input-field">
            <FormControl sx={{ m: 1 }} variant="standard">
              <Input
                className="input-amount"
                type="number"
                onChange={handleChangeAmount}
                value={amount}
                style={{ width: 100, fontSize: 22 }}
                inputProps={{ min: 1, step: 0.01 }}
              />
            </FormControl>
          </div>
        </div>
        <div className="add-transaction-amount">
          <p className="currency-name">€ - </p>
        </div>
        <div className="add-transaction-amount">
          <div className="add-transaction-course">
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              value={account.course}
              variant="filled"
              size="small"
              disabled
              style={{ width: 60, fontSize: 22 }}
            />
          </div>
        </div>
        <div className="add-transaction-amount">
          <p className="currency-name"> - </p>
        </div>
        <div className="add-transaction-amount">
          <div className="add-transaction-course-pln">
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              value={(amount * account.course).toFixed(2)}
              variant="filled"
              size="small"
              disabled
              style={{ width: 90, fontSize: 22 }}
            />
          </div>
        </div>
      </div>
      <div className="form-btns">
        <div className="add-transaction-btn">
          <Button className="submit-btn" variant="contained" color="success" onClick={handleAddTransaction}>Add transaction</Button>
        </div>
        <div className="add-transaction-btn">
          <Button className="cancel-btn-reset" variant="contained" onClick={resetForm}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
