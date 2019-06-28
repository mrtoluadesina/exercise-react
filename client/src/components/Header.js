import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

import './components.css';
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="head-bar">
      <Link to="/">
        <img src={logo} className="App-logo" alt="brand" />
      </Link>
      <Navigation />
    </header>
  );
}
