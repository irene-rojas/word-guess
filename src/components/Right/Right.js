import React from 'react';

const Right = (props) => {
    return (
        <div>
            Good job! 
            Learn more about <a href={`https://www.merriam-webster.com/dictionary/${props.value}`} target="_blank" rel="noopener noreferrer">{props.value}</a>.
            <br/>
            <br/>
            Want to play again?
            <br/>
            <button onClick={props.onPlayAgain}>Yes!</button>
        </div>
    );
};

export default Right;