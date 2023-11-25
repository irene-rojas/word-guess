import React from 'react';

const Form = (props) => {

    return (

        <div>
            {/* <input type="radio" label={props.label}/>
            {props.label} */}

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                    {props.label}
                </label>
            </div>

        </div>

    )

};

export default Form;