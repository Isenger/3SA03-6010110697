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

  getAnswer = (answer) => {
    document.getElementById('complete').innerHTML = `Answer : ${answer}`;
  }

  render() {
    return (
      <div className="App">
        <h1 id="welcome">Welcome to CardGame with React!</h1>
       
        <div id="main">
            <h2 id="your-answer"></h2>
            <h1 id="complete"></h1>
            <h1 id="nod">Attempt : 0</h1>
            {
              <Reset getReset = {this.getReset}/>
            }
        </div>
        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
        <button id="reset" className = "button" onClick={this.reseet}>Reset</button>   
        
      </div>
    );
  }
}
export default App;




