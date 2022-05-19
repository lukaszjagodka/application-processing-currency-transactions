import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { updateCourse } from './components/accountActions';
import Dashboard from './components/Dashboard/Dashboard';
import { fetchCourse } from './helpers/fetchCourse';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCourse = async () => {
      const response = await fetchCourse();
      dispatch(updateCourse(response));
    };

    getCourse();
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
