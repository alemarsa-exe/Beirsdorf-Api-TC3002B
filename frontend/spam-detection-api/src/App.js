import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './homepage/homepage'
import SpamTool from "./SpamTool/SpamTool";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NewHome from './newHome/NewHome';
import Footer from './components/footer/Footer';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data.message));  // Extract the message from the API response
  }, []);

  // Hola
  /*
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
  */
   return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/spam-tool" element={<SpamTool />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
