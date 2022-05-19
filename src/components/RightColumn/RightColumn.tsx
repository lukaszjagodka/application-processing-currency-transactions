import React from 'react';
import HighestTransaction from '../transactions/HighestTransaction/HighestTransaction';
import AddTransaction from '../transactions/AddTransaction/AddTransaction';

function RightColumn() {
  return (
    <div>
      <AddTransaction />
      <HighestTransaction />
    </div>
  );
}

export default RightColumn;
