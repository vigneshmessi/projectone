import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import New from './App';

function Url() {
    return (

    
      <Routes>
<Route Path = "/New" element={<New />} /> </Routes>
  );
}

export default Url;

