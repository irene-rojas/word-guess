import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// import Right from "./Right/Right";
// import Wrong from "./Wrong/Wrong";
// import mwLogo from "./mwlogo.png";


function App() {

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
        {word: "board", id: 66},
        {word: "candid", id: 67}
    ];
    // words that reach shortdef endpoint without error

        const [word, setWord] = useState("");
        const [wordDef, setWordDef] = useState("");
        // const [userChoice, setUserChoice] = useState("");
        // const [wrongWords, setWrongWords] = useState([]);

        function selectWord() {
            setWord(words[Math.floor(Math.random() * words.length)].word);
        };

        // API call
        function getWordDef() {
            axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=d083e0a0-8233-44b7-9989-11db737afbd4`)
            .then(res => {
                // console.log(res.data[0].shortdef);
                setWordDef(res.data[0].shortdef);
            });
        };

        // onLoad
        useEffect(() => {
            selectWord();
            getWordDef();
        }, []);
        // [] tells it to run just once

        console.log(word);
        console.log(wordDef);

    return (
        <p>{word}</p>
    );

    }

export default App;