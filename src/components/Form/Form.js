import React from 'react';

const Form = (props) => {

    return (
        <div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={`flexRadioDefault_${props.label}`}
                    value={props.label}
                    onChange={() => props.onClick(props.label)}  // Pass the selected value directly
                />
                    <label className="form-check-label" htmlFor={`flexRadioDefault_${props.label}`}>
                        {props.label}
                    </label>
            </div>
            <br />
        </div>
    );
};

export default Form;