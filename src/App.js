import './App.css';

import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
import Product from './pages/product';
import Fundraise from './pages/fundraise';
import Company from './pages/company';

import ReactGA from 'react-ga';


export default function App() {

  useEffect(() => {
    // report site data to google analytics
    ReactGA.initialize('UA-112008242-3', {
      siteSpeedSampleRate: 100
    });
  },[])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/Fundraise" element={<Fundraise/>}/>
            <Route path="/Company" element={<Company/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
