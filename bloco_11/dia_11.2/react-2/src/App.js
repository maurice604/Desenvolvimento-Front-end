import React from 'react';

import Pokedex from './components/Pokedex';
import Navbar from './components/Navbar';
import  { pokemons } from './data';

import './App.css';


class App extends React.Component {
    render() {
      return (
        <main className="main-container">
          <Navbar />
          <Pokedex pokemons={pokemons} />
        </main>
    )
  }
}

export default App;
