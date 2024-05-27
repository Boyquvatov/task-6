import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Components/login/login';
import Cars from './Components/cars/cars';
import Singlecar from './Components/single-car/singlecar';


function App() {

  return (
    <>
      <Router> 
        <Routes>
          <Route path='' element={<Login/>}/>
          <Route path='cars' element={<Cars/>}/>
          <Route path='singlecar/:id' element={<Singlecar/>}/>
        </Routes>
      </Router> 
    </>
  )
};

export default App;
