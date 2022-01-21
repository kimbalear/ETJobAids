import React, { Component } from "react"

export default function NumField(props) {
    return (
        <div className="input slide_in_blurred_right">
            <input type="number" className="input_num" placeholder={props.flds_holder} min="0"/>
            <label for="input" className="input_label">{props.flds_lbls}</label>
        </div>
    )
}