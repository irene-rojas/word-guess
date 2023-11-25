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
            {word: "passage", id: 31}, 
            {word: "react", id: 32}, 
            {word: "under", id: 33}, 
            {word: "tire", id: 34}, 
            {word: "support", id: 35}, 
            {word: "brave", id: 36}, 
            {word: "report", id: 37}, 
            {word: "attain", id: 38}, 
            {word: "achieve", id: 39}, 
            {word: "respond", id: 40}, 
            {word: "attach", id: 41}, 
            {word: "quirk", id: 42}, 
            {word: "expect", id: 43}, 
            {word: "await", id: 44}, 
            {word: "stay", id: 45}, 
            {word: "room", id: 46}, 
            {word: "space", id: 47}, 
            {word: "period", id: 48}, 
            {word: "ranged", id: 49}, 
            {word: "incline", id: 50}, 
            {word: "recline", id: 51}, 
            {word: "fade", id: 52}, 
            {word: "lose", id: 53}, 
            {word: "accord", id: 54}, 
            {word: "render", id: 55}, 
            {word: "supply", id: 56}, 
            {word: "win", id: 57}, 
            {word: "property", id: 58}, 
            {word: "forth", id: 59}, 
            {word: "shatter", id: 60}, 
            {word: "interest", id: 61}, 
            {word: "ring", id: 62}, 
            {word: "chain", id: 63}, 
            {word: "content", id: 64}, 
            {word: "board", id: 65},
            {word: "candid", id: 66}
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