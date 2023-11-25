import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Form from "./components/Form/Form";
import Right from "./components/Right/Right";
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
    const [userChoice, setUserChoice] = useState("");
    const [result, setResult] = useState(null);
    const [randomWord, setRandomWord] = useState("");
    const [showRightComponent, setShowRightComponent] = useState(false);
    const [isDataReady, setIsDataReady] = useState(false);

    function shuffleArray(words) {
        const shuffledWords = [...words];
        for (let i = shuffledWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
        }

        const wordChoices = shuffledWords.slice(0, 3);
        setWordChoices(wordChoices);

        console.log("Randomly Selected Words:", wordChoices);

        const randomIndex = Math.floor(Math.random() * 3);
        const randomWord = wordChoices[randomIndex];

        console.log("Randomly Selected Word:", randomWord);

        return randomWord;
    }

    function getWordDef(randomWord) {
        setRandomWord(randomWord);
        axios
            .get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=${process.env.REACT_APP_API_KEY_MW}`)
            .then((res) => {
                if (res.data && res.data.length > 0 && res.data[0].shortdef && res.data[0].shortdef.length > 0) {
                    const definition = res.data[0].shortdef[0];
                    console.log(definition);
                    setWordDef(definition);
                } else {
                    console.error("Error: Invalid response format");
                }
            })
            .catch((error) => {
                console.error("Error fetching word definition:", error);
            })
            .finally(() => {
                setIsDataReady(true);
            });
    }

    function handleChange(selectedWord) {
        setUserChoice(selectedWord);
        console.log("User choice: ", selectedWord);
    }

    function handleSubmit() {
        if (userChoice === randomWord) {
            setResult("Correct!");
            setShowRightComponent(true);
        } else {
            setResult("Incorrect. Try again!");
        }
    }

    function handlePlayAgain() {
        setIsDataReady(false); // Reset data readiness
        setResult(null);
        setShowRightComponent(false);
        setUserChoice("");
        const randomWord = shuffleArray(words);
        getWordDef(randomWord);
    }

    // Fetch data when isDataReady changes
    useEffect(() => {
        if (!isDataReady) return;
        const randomWord = shuffleArray(words);
        getWordDef(randomWord);
    }, [isDataReady]);

    useEffect(() => {
        const randomWord = shuffleArray(words);
        getWordDef(randomWord);
    }, []);

    return (
        <div className="App">
            <div className="header">
                <h1>What Does It Mean?</h1>
                <p>Match the word to the definition.<br />Sometimes it's an obsolete usage!</p>
            </div>

            <div className="gameDiv">
                <div className="definition">
                    <p>Definition:<br />{wordDef}</p>
                </div>

                <hr />

                <div className="wordChoices">
                    <p>Word Choices:</p>
                    {isDataReady ? (
                        wordChoices.map((wordChoice, index) => (
                            <Form key={index} label={wordChoice} value={wordChoice} onClick={handleChange} />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <div className="resultsDiv">
                    <p>{result}</p>
                    {showRightComponent && <Right value={randomWord} onPlayAgain={handlePlayAgain} />}
                </div>
            </div>
        </div>
    );
}

export default App;