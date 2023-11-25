import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Form from "./components/Form/Form";
// import Right from "./Right/Right";
// import Wrong from "./Wrong/Wrong";
// import mwLogo from "./mwlogo.png";

const words = [
    "accord",
    "adventure",
    "achieve",
    "arrow",
    "arow",
    "attach",
    "await",
    "baggage",
    "board",
    "boarder",
    "bow",
    "brave",
    "camera",
    "cable",
    "candid",
    "chain",
    "charge",
    "comma",
    "computer",
    "contact",
    "content",
    "dog",
    "fade",
    "fan",
    "fare",
    "for",
    "forth",
    "incline",
    "interest",
    "journey",
    "keyboard",
    "light",
    "lose",
    "mail",
    "monitor",
    "mug",
    "news",
    "passage",
    "period",
    "program",
    "property",
    "quirk",
    "react",
    "render",
    "report",
    "respond",
    "remote",
    "recline",
    "ranged",
    "ring",
    "robot",
    "room",
    "row",
    "screen",
    "shatter",
    "sound",
    "space",
    "stop",
    "stay",
    "supply",
    "support",
    "travel",
    "tire",
    "under",
    "win"
];

function App() {

    const [wordChoices, setWordChoices] = useState([]);
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
        setWordChoices(wordChoices);

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
    };


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
    };

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

                {wordChoices.map((wordChoice, index) => {
                    // console.log(wordChoice);
                    return (
                        <Form 
                            key={index}
                            label={wordChoice}
                            value={wordChoice}
                        />
                    )
                })}
            </div>

        </div>

        <div className='resultsDiv'>
            <p>Results will go here.</p>
        </div>

    </div>
    );

    }

export default App;