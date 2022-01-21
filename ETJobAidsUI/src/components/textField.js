import React, { Component } from "react"

export default function TextField(props) {
    return (
        <div className="input slide_in_blurred_right">
            <input type="text" className="input_text" placeholder={props.flds_holder}/>
            <label for="input" className="input_label">{props.flds_lbls}</label>
        </div>
    )
}