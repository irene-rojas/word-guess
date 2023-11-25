import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// import Right from "./Right/Right";
// import Wrong from "./Wrong/Wrong";
// import mwLogo from "./mwlogo.png";


function App() {

        const [words, setWordsArray] = useState([
            "baggage",
            "fan", 
            "charge", 
            "computer", 
            "monitor", 
            "keyboard", 
            "news", 
            "space", 
            "fare", 
            "camera", 
            "cable", 
            "boarder", 
            "dog", 
            "robot", 
            "comma", 
            "mug", 
            "bow", 
            "arow", 
            "row", 
            "arrow", 
            "screen", 
            "sound", 
            "mail", 
            "stop", 
            "travel", 
            "program", 
            "light", 
            "remote", 
            "contact", 
            "adventure", 
            "journey", 
            "passage", 
            "react", 
            "under", 
            "tire", 
            "support", 
            "brave", 
            "report", 
            "attain", 
            "achieve", 
            "respond", 
            "attach", 
            "quirk", 
            "expect", 
            "await", 
            "stay", 
            "room", 
            "space", 
            "period", 
            "ranged", 
            "incline", 
            "recline", 
            "fade", 
            "lose", 
            "accord", 
            "render", 
            "supply", 
            "win", 
            "property", 
            "forth", 
            "shatter", 
            "interest", 
            "ring", 
            "chain", 
            "content", 
            "board",
            "candid"
        ]);
            // console.log(words);
        const [wordDetails] = useState(words[Math.floor(Math.random() * words.length)]);
        const word = wordDetails.word;
        const wordId = wordDetails.id;
        const [wordDef, setWordDef] = useState("");
        const [wordChoices] = useState([]);
        // const [userChoice, setUserChoice] = useState("");

        // API call
        // function getWordDef() {
        //     axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_API_KEY_MW}`)
        //     .then(res => {
        //         // console.log(res.data[0].shortdef[0]);
        //         setWordDef(res.data[0].shortdef[0]);
        //     });
        // };

        function shuffleArray(words) {
            for (let i = words.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [words[i], words[j]] = [words[j], words[i]];
            }
        
            const wordChoices = words.slice(0, 3);
        
            // Log the shuffled array
            console.log("Shuffled Array:", wordChoices);
        
            // Randomly select a word from the shuffled array
            const randomIndex = Math.floor(Math.random() * wordChoices.length);
            const randomWord = wordChoices[randomIndex];
        
            // Log the randomly selected word
            console.log("Randomly Selected Word:", randomWord);
        
            // Call getWordDef inside the axios .then block
            // axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=${process.env.REACT_APP_API_KEY_MW}`)
            //     .then(res => {
            //         console.log(res.data[0].shortdef[0]);
            //         setWordDef(res.data[0].shortdef[0]);
            //     });
        
            return randomWord;
        }
        
        // Rest of your code
        
        // Assuming 'words' is defined somewhere in your code
        const shuffledWord = shuffleArray(words);
        

        // onLoad
        useEffect(() => {

        }, []);
        // [] tells it to run just once


        
    return (

        <div className="App">

        <div className="header">
            <h1>What Does It Mean?</h1>
            <p>Match the word to the definition.<br />
            Sometimes it's an obsolute usage!</p>
        </div>

        <div className='gameDiv'>

            <div className='definition'>
                <p>Definition:<br />
                {wordDef}</p>
            </div>
            
            <hr />

            <div className='wordChoices'>
                <p>Word Choices:</p>

                <form 
                />
            </div>

        </div>

        <div className='resultsDiv'>
            <p>Results will go here.</p>
        </div>

    </div>
    );

    }

export default App;