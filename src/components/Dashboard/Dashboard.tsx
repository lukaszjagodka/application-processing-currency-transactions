import React from 'react';
import Navbar from '../Navbar/Navbar';
import RightColumn from '../RightColumn/RightColumn';
import TransactionsList from '../transactions/TransactionsList/TransactionsList';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <TransactionsList />
      <RightColumn />
    </div>
  );
}

export default Dashboard;
