import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import NewItem from './components/NewItem';
import EditItem from './components/EditItem';
import Reporting from './components/Reporting';
import Search from './components/Search';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <div className='page-container'>
        <div className='top-flex-container'>
          <div className='search bg-dark'><Search /></div>
          <div className='top-nav'><Navbar /></div>
        </div>

        <div className='bottom-flex-container'>
          <div className='sidebar bg-dark'><Sidebar /></div>
          <div className='content-box bg-dark'>
            <Routes>
              <Route path="/new" element={<NewItem />} />
              <Route path="/edit" element={<EditItem />} /> 
              <Route path="/reporting" element={<Reporting />} /> 
            </Routes>
        </div> 
        </div>
        
      </div> 
    </Router>
  );
}

export default App;
