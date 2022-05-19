import React from 'react';
import Navbar from '../Navbar/Navbar';
import RightColumn from '../RightColumn/RightColumn';
import TransactionsList from '../transactions/TransactionsList/TransactionsList';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="columns">
        <div className="column">
          <TransactionsList />
        </div>
        <div className="column">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
