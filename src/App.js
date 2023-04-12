import React from 'react';
import { Navbar , Clients , CTA , SelectDate } from './Component';
import { Aboutus } from './About Us';
import './App.css';
import { Header , Package , Stays , Footer } from './Containers';
import { BrowserRouter as Router , Route , Routes, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router >
      <div className='App'>
        <Routes><Route path='/Travel_Landing-pg/about-us' Component={Aboutus}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={Navbar}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={Header}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={SelectDate}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={Package}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={Stays}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={CTA}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={Clients}></Route></Routes>
        <Routes><Route path='/Travel_Landing-pg' Component={Footer}></Route></Routes>
      </div>
    </Router>
  )
}

export default App