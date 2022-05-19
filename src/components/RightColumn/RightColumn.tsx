import React from 'react';
import HighestTransaction from '../transactions/HighestTransaction/HighestTransaction';
import AddTransaction from '../transactions/AddTransaction/AddTransaction';

import './RightColumn.css';

function RightColumn() {
  return (
    <div className="right-column-container">
      <div className="right-column">
        <AddTransaction />
      </div>
      <div className="right-column">
        <HighestTransaction />
      </div>
    </div>
  );
}

export default RightColumn;
