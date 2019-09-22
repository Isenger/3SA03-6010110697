import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';


const word = ['Library','Computer','Engineer']
var item = word[Math.floor(Math.random()*word.length)];

// const word = "Hello";
class App extends Component {

  newgame = () => {
    window.location.reload(false);
  }
  render() {
    return (
      <div className= "App">
        <h1 className="welcom"> Let To Play Game</h1>

        <WordCard value={item.toUpperCase()}/>
        <h1 id="result"></h1>
        <button id="newgame" className="button" onClick={this.newgame}>New Game</button>
      </div>
    );

  }
}
export default App;




