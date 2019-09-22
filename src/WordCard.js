import React, { Component } from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';

const word = ['eat' , 'glad' , 'hello' , 'studio' , 'ability' , 'computer' ]; 

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word)) 
    return { 
         word, 
         chars, 
         attempt: 1, 
         guess: [], 
         completed: false 
    } 
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(word[0])
    }
    activationHandler = (c) =>{
        let guess = [...this.state.guess, c.toUpperCase()]
        if(guess.length == 1){
            document.getElementById('your-answer').innerHTML = `Your Answer : ${c.toUpperCase()}` 
        }else
            document.getElementById('your-answer').innerHTML += c.toUpperCase();
        this.setState({guess})

        if(guess.length == this.state.chars.length){
            console.log('Mistake Word: '+guess.join('').toString())
            console.log('Correct Word: '+this.state.word)
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], complete: true})
                document.getElementById('result').innerHTML = `Congratulations!`
                document.getElementById('newgame').style.display = "inline-block";
                document.getElementById('end').style.display = "none";
                
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('result').innerHTML = `Attempt Or Try Again: ${this.state.attempt} `
            }
            if(this.state.attempt == 3){
                document.getElementById('result').innerHTML = `Game Over!`
                setTimeout(() => window.location.reload(false),3000)
            }
        }
    }
    render() {
        if(this.props.isSurrenderConfirm){
            this.props.getAnswer(this.state.chars.join(' -> '))
        }
        return (
            <div>
                { Array.from(this.state.chars.join('').toString()).map((c, i) =><CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>) }
            </div>
        );
    }
}