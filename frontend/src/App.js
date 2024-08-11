import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Profile data={data} />
    </div>
  );
}

export default App;
