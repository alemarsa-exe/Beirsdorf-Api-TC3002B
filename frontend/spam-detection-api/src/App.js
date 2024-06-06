import React, { useEffect, useState } from 'react';
import './App.css';
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
