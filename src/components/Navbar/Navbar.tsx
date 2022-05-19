import React, { useEffect, useState } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import './Navbar.css';
import Input from '@mui/material/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from '../accountActions';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Navbar() {
  const dispatch = useDispatch();
  const account = useSelector((state: any) => state.account);
  const [course, setCourse] = useState<number>(account.course);
  const handleChangeCourse = (event: any) => {
    setCourse(event.target.value);
    dispatch(updateCourse(event.target.value));
  };

  useEffect(() => {
    if (account !== course) {
      setCourse(account.course);
    }
  }, [account]);

  return (
    <div className="navbar-container">
      <div className="navbar-name">
        <p className="p-navbar">Application processing currency transactions</p>
      </div>
      <div className="course">
        <div className="course-field">
          <div className="course-name">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">Course EUR/PLN</Typography>
            </ThemeProvider>
          </div>
        </div>
        <div className="course-field">
          <div className="course-amount">
            <Input
              className="input-course"
              type="number"
              onChange={handleChangeCourse}
              value={course}
              size="medium"
              style={{ width: 70, fontSize: 22 }}
              disableUnderline
              inputProps={{ min: 1.01, step: 0.01 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
