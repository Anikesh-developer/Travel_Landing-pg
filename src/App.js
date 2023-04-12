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
        <Routes><Route path='/about-us' Component={Aboutus}></Route></Routes>
        <Routes><Route path='/' Component={Navbar}></Route></Routes>
        <Routes><Route path='/' Component={Header}></Route></Routes>
        <Routes><Route path='/' Component={SelectDate}></Route></Routes>
        <Routes><Route path='/' Component={Package}></Route></Routes>
        <Routes><Route path='/' Component={Stays}></Route></Routes>
        <Routes><Route path='/' Component={CTA}></Route></Routes>
        <Routes><Route path='/' Component={Clients}></Route></Routes>
        <Routes><Route path='/' Component={Footer}></Route></Routes>
      </div>
    </Router>
  )
}

export default App