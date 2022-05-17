import React, { useState } from 'react';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import './Navbar.css';
import Input from '@mui/material/Input/Input';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Navbar() {
  const [course, setCourse] = useState<number>();

  const handleChangeCourse = (event: any) => {
    setCourse(event.target.value);
  };

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
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
