import React from 'react'
import { Navbar , Clients , CTA , SelectDate } from './Component'
import './App.css';
import { Header , Package , Stays , Footer } from './Containers';
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Router >
      <div className='App'>
        <Navbar />
        <Header />
        <SelectDate />
        <Package />
        <Stays />
        <CTA />
        <Clients />
        <Footer />
      </div>
    </Router>
  )
}

export default App

