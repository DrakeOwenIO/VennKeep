import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import NewItem from './components/NewItem';
import EditItem from './components/EditItem';
import Reporting from './components/Reporting';
import Search from './components/search';

function App() {
  return (
    <Router>
      <div className='top-container'>
        <div className='top-search'><Search /></div>
        <div className='top-nav'><Navbar /></div> 
      </div>

      <div className='content-box'>
        <Routes>
          <Route path="/new" element={<NewItem />} />
          <Route path="/edit" element={<EditItem />} /> 
          <Route path="/reporting" element={<Reporting />} /> 
        </Routes>
      </div>
        
    </Router>
  );
}

export default App;
