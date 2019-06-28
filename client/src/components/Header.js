import React from 'react';
import Navigation from './Navigation';

import './components.css';
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="head-bar">
      <img src={logo} className="App-logo" alt="brand" />
      <Navigation />
    </header>
  );
}
