import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
import Product from './pages/product';
import Fundraise from './pages/fundraise';
import Company from './pages/company';


export default function App() {
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
