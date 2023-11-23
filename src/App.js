import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// import Right from "./Right/Right";
// import Wrong from "./Wrong/Wrong";
// import mwLogo from "./mwlogo.png";


function App() {

        const [words, setWordsArray] = useState([
            {word: "baggage", id: 0}, 
            {word: "fan", id: 1}, 
            {word: "charge", id: 2}, 
            {word: "computer", id: 3}, 
            {word: "monitor", id: 4}, 
            {word: "keyboard", id: 5}, 
            {word: "news", id: 6}, 
            {word: "space", id: 7}, 
            {word: "fare", id: 8}, 
            {word: "camera", id: 9}, 
            {word: "cable", id: 10}, 
            {word: "boarder", id: 11}, 
            {word: "dog", id: 12}, 
            {word: "robot", id: 13}, 
            {word: "comma", id: 14}, 
            {word: "mug", id: 15}, 
            {word: "bow", id: 16}, 
            {word: "arow", id: 17}, 
            {word: "row", id: 18}, 
            {word: "arrow", id: 19}, 
            {word: "screen", id: 20}, 
            {word: "sound", id: 21}, 
            {word: "mail", id: 22}, 
            {word: "stop", id: 23}, 
            {word: "travel", id: 24}, 
            {word: "program", id: 25}, 
            {word: "light", id: 26}, 
            {word: "remote", id: 27}, 
            {word: "contact", id: 28}, 
            {word: "adventure", id: 29}, 
            {word: "journey", id: 30}, 


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
            {word: "board", id: 66},
            {word: "candid", id: 67}
        ]);
            // console.log(words);
        const [wordDetails] = useState(words[Math.floor(Math.random() * words.length)]);
        const word = wordDetails.word;
        const wordId = wordDetails.id;
        const [wordDef, setWordDef] = useState("");
        const [wordChoices, setWordChoices] = useState([]);
        // const [userChoice, setUserChoice] = useState("");
        const [wrongWords, setWrongWords] = useState([]);

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

            wordChoices.push(word);
            let updatedArray1 = words.filter((_,index) => index !== wordId);
            setWordsArray(updatedArray1);
            // console.log(updatedArray1);
            // run for wrong1
            let wrong1 = updatedArray1[Math.floor(Math.random() * updatedArray1.length)];
            console.log(`Wrong1: ${wrong1.word}`);
            // put into array
            wordChoices.push(wrong1.word);
            console.log(wordChoices);
            // run again for word2
            let updatedArray2 = words.filter((_,index) => index !== wordId && index !== wrong1.id);
            // console.log(updatedArray2);
            // put into array
            let wrong2 = updatedArray2[Math.floor(Math.random() * updatedArray1.length)];
            console.log(`Wrong2: ${wrong2.word}`);
            wordChoices.push(wrong2.word);
            // how scramble words each time it loads?
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