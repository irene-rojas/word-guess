import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


const words = 
[
    {word: "baggage", id: 1}, 
    {word: "fan", id: 2}, 
    {word: "charge", id: 3}, 
    {word: "computer", id: 4}, 
    {word: "monitor", id: 5}, 
    {word: "keyboard", id: 6}, 
    {word: "news", id: 7}, 
    {word: "space", id: 8}, 
    {word: "fare", id: 9}, 
    {word: "camera", id: 10}, 
    {word: "cable", id: 11}, 
    {word: "boarder", id: 12}, 
    {word: "dog", id: 13}, 
    {word: "robot", id: 14}, 
    {word: "comma", id: 15}, 
    {word: "mug", id: 16}, 
    {word: "bow", id: 17}, 
    {word: "arow", id: 18}, 
    {word: "row", id: 19}, 
    {word: "arrow", id: 20}, 
    {word: "screen", id: 21}, 
    {word: "sound", id: 22}, 
    {word: "mail", id: 23}, 
    {word: "stop", id: 24}, 
    {word: "travel", id: 25}, 
    {word: "program", id: 26}, 
    {word: "light", id: 27}, 
    {word: "remote", id: 28}, 
    {word: "contact", id: 29}, 
    {word: "adventure", id: 30}, 
    {word: "journey", id: 31}, 
    {word: "passage", id: 32}, 
    {word: "react", id: 33}, 
    {word: "under", id: 34}, 
    {word: "tire", id: 35}, 
    {word: "support", id: 36}, 
    {word: "brave", id: 37}, 
    {word: "report", id: 38}, 
    {word: "attain", id: 39}, 
    {word: "achieve", id: 40}, 
    {word: "respond", id: 41}, 
    {word: "attach", id: 42}, 
    {word: "quirk", id: 43}, 
    {word: "expect", id: 44}, 
    {word: "await", id: 45}, 
    {word: "stay", id: 46}, 
    {word: "room", id: 47}, 
    {word: "space", id: 48}, 
    {word: "period", id: 49}, 
    {word: "ranged", id: 50}, 
    {word: "incline", id: 51}, 
    {word: "recline", id: 52}, 
    {word: "fade", id: 53}, 
    {word: "lose", id: 54}, 
    {word: "accord", id: 55}, 
    {word: "render", id: 56}, 
    {word: "supply", id: 57}, 
    {word: "win", id: 58}, 
    {word: "property", id: 59}, 
    {word: "forth", id: 60}, 
    {word: "shatter", id: 61}, 
    {word: "interest", id: 62}, 
    {word: "ring", id: 63}, 
    {word: "chain", id: 64}, 
    {word: "content", id: 65}, 
    {word: "board", id: 66}
];

class App extends Component {

    state = {
        word: "",
        def: "",
        altChoices: []
    }

    componentDidMount() {
        this.resetGame();
    }

    resetGame = () => {
        // select target word
        let word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
        this.setState({
            word: word,
        });

        // select altChoice words
        let altWord1 = words[Math.floor(Math.random() * words.length) - this.state.word];
        console.log(altWord1);
        let altWord2 = words[Math.floor(Math.random() * words.length) - this.state.word];
        console.log(altWord2);
        let newAltChoices = this.state.altChoices;
        newAltChoices.push(word);
        newAltChoices.push(altWord1);
        newAltChoices.push(altWord2);        
        this.setState({
            altChoices: newAltChoices[Math.floor(Math.random() * this.state.altChoices.length)]
        });
        console.log(this.state.altChoices);

        // API call
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            const result = res.data[0].def[0].sseq[0][0][1].dt[0][1]; // shortdef
            const defResult = result.replace(/{bc}|{it}|a_link|d_link|sx/gi, "").replace(/[^a-zA-Z0-9(*), ]/gi, "");  
            //1st replace: specific exclusions. 2nd replace: protected items
            this.setState({
                def: defResult
            });
            console.log(defResult);
        });
    }



  render() {

    return (
      <div className="App">

        <div className="header">

            <h1 className="title">Title Goes Here</h1>

            <div>Instructions here</div>

        </div>

        <div className="contentDiv">

            <div className="def">
                Definition: {this.state.def}
            </div>

            <div className="choices"> 
                Target Word: {this.state.word}
                <br />
                {this.state.altChoices}
                {/* only first word at this time */}


            </div>

        </div>

      </div>
    );
  }
}

export default App;
