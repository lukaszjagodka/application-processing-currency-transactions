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

import './AddTransaction.css';
import { v4 as uuidv4 } from 'uuid';
import capitalizeFirstLetter from '../../../helpers/ capitalizeFirstLetter';
import { TNewTransaction } from '../../types/types';
import { addTransaction } from '../transactionsActions';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function AddTransaction() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | string>('');
  const [description, setDescription] = useState<string>('');

  const handleAddTransaction = () => {
    if (amount === '' || description === '' || amount === undefined || amount === '') return;
    const newTransaction: TNewTransaction = {
      id: uuidv4(),
      amount: Number(amount),
      description,
      createdAt: new Date(),
    };
    dispatch(addTransaction(newTransaction));
    resetForm();
  };

  const handleChangeAmount = (event: any) => {
    setAmount(event.target.value);
  };

  const handleDescription = (event: any) => {
    const capitalizeDescription = capitalizeFirstLetter(event.target.value);
    setDescription(capitalizeDescription);
  };

  const resetForm = () => {
    setAmount('');
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
          <p className="add-transaction-amount-input-name">
            <ThemeProvider theme={theme}>
              <Typography variant="h5">Amount</Typography>
            </ThemeProvider>
          </p>
        </div>
        <div className="add-transaction-amount">
          <div className="add-transaction-amount-input-field">
            <FormControl sx={{ m: 1 }} variant="standard">
              <Input
                className="input-amount"
                type="number"
                onChange={handleChangeAmount}
                value={amount}
                style={{ width: 80, fontSize: 22 }}
              />
            </FormControl>
          </div>
        </div>
        <div className="add-transaction-amount">
          <p className="currency-name">€</p>
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
