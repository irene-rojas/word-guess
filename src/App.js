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
        function getWordDef() {
            axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_API_KEY_MW}`)
            .then(res => {
                // console.log(res.data[0].shortdef[0]);
                setWordDef(res.data[0].shortdef[0]);
            });
        };

        // create wordChoices array. need to prevent [word] from being used twice
        function choicesArray() {
            // add word to wordChoices array
            wordChoices.push(word);
            // create array without word
            let updatedArray1 = words.filter((_,index) => index !== wordId);
            setWordsArray(updatedArray1);
            // console.log(updatedArray1);
            // run for wrong1
            let wrong1 = updatedArray1[Math.floor(Math.random() * updatedArray1.length)];
            // console.log(`Wrong1: ${wrong1.word}`);
            // put into array
            wordChoices.push(wrong1.word);
            // create new array without word and wrong 1
            let updatedArray2 = words.filter((_,index) => index !== wordId && index !== wrong1.id);
            // console.log(updatedArray2);
            // run again for wrong2
            let wrong2 = updatedArray2[Math.floor(Math.random() * updatedArray1.length)];
            // console.log(`Wrong2: ${wrong2.word}`);
            // put into array
            wordChoices.push(wrong2.word);
            // how scramble word order each time it loads?
        };


        // onLoad
        useEffect(() => {
            // getWord();
            getWordDef();
            // call wordChoices array
            choicesArray();
        }, []);
        // [] tells it to run just once
        console.log(`Word: ${word}. ID: ${wordId}. Def: ${wordDef}`);
        console.log(`wordChoices: ${wordChoices}`);



        
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