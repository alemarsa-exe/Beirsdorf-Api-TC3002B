import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data.message));  // Extract the message from the API response
  }, []);

  // Hola

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple homepage built with React and Flask.</p>
        {data ? <p>{data}</p> : <p>Loading data from API...</p>}
        <p>Holas</p>
      </header>
    </div>
  );
}

export default App;
