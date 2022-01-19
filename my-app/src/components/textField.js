import React, { Component } from "react"

const TextField = () => {
    let fieldlabel = "Name"
    let fieldHolder = "Your full name"

    return (
        <div className="Input">
            <input type="text" id="input" className="Input-text" placeholder={fieldHolder}/>
            <label for="input" className="Input-label">{fieldlabel}</label>
        </div>
    )
}
export default TextField;