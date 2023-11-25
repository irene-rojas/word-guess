import React from 'react';

const Form = (props) => {

    return (

        <div>
            {/* <input type="radio" label={props.label}/>
            {props.label} */}

            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={props.wordChoice}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    {props.label}
                </label>
            </div>

        </div>

    )

};

export default Form;