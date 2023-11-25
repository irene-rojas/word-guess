import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// import Right from "./Right/Right";
// import Wrong from "./Wrong/Wrong";
// import mwLogo from "./mwlogo.png";

const words = [
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
];

function App() {


    const [wordDef, setWordDef] = useState("");

    function shuffleArray(words, setWordDef) {
        const shuffledWords = [...words]; // Create a copy to avoid modifying the original array
        for (let i = shuffledWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
        }

        // Log the shuffled array
        // console.log("Shuffled Array:", shuffledWords);

        // Take the first three elements
        const wordChoices = shuffledWords.slice(0, 3);

        // Log the randomly selected words
        console.log("Randomly Selected Words:", wordChoices);

        // Randomly select a word from the shuffled array
        const randomIndex = Math.floor(Math.random() * 3); // Always use the first three elements
        const randomWord = wordChoices[randomIndex];

        // Log the randomly selected word
        console.log("Randomly Selected Word:", randomWord);

        // Call getWordDef with the randomly selected word
        getWordDef(randomWord, setWordDef);

        return randomWord;
    }

    function getWordDef(randomWord, setWordDef) {
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=${process.env.REACT_APP_API_KEY_MW}`)
            .then(res => {
                if (res.data && res.data.length > 0 && res.data[0].shortdef && res.data[0].shortdef.length > 0) {
                    const definition = res.data[0].shortdef[0];
                    console.log(definition);
                    setWordDef(definition);
                } else {
                    console.error("Error: Invalid response format");
                }
            })
            .catch(error => {
                console.error("Error fetching word definition:", error);
            });
    }

        useEffect(() => {
            shuffleArray(words, setWordDef);
        }, []);


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