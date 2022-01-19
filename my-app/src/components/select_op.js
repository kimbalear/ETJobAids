import React, { Component } from "react"
import { Link, useParams } from "react-router-dom"

const SelectOp = () => {
    let Options = {
        Languages: ['English', 'Spanish', 'Portuguese', 'French']
    }

    return (
        <div>
            <div className="select_lang slide_in_blurred_right" tabindex="1">
                <input className="selectopt" name="test" type="radio" id="opt1" checked />
                <label for="opt1" className="option">{Options.Languages[0]}</label>
                <input className="selectopt" name="test" type="radio" id="opt2" />
                <label for="opt2" className="option">{Options.Languages[1]}</label>
                <input className="selectopt" name="test" type="radio" id="opt3" />
                <label for="opt3" className="option">{Options.Languages[2]}</label>
                <input className="selectopt" name="test" type="radio" id="opt4" />
                <label for="opt4" className="option">{Options.Languages[3]}</label>
                <input className="selectopt" name="test" type="radio" id="opt5" />
            </div>
        </div>
    )
}
export default SelectOp;