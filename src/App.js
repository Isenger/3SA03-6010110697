import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Reset from './Reset';


// const word = "Hello";
class App extends Component {

  constructor() {
    super()
    this.state = {
      ResetConfirm: false,
    };
    
  }

  newgame = () => {
    window.location.reload(false);
  }

  getReset = (Reset) => {
    if(Reset){
      this.setState({ResetConfirm:true});
    }
  }

  // getAnswer = (answer) => {
  //   document.getElementById('complete').innerHTML = `Answer : ${answer}`;
  // }

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




