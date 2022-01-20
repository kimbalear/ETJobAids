import React, { Component } from "react"

const SelectOp = (props) => {
    return (
        <div className="select_op slide_in_blurred_left" tabindex="1">
            <div className="option_s slide_in_blurred_right" tabindex="1">
                <input className="selectopt" name={props.ops[4]} type="radio" id={props.ops[0] + "_0"} checked />
                <label for={props.ops[0] + "_0"} className="option">{props.ops[0]}</label>
                <input className="selectopt" name={props.ops[4]} type="radio" id={props.ops[0] + "_1"} />
                <label for={props.ops[0] + "_1"} className="option">{props.ops[1]}</label>
                <input className="selectopt" name={props.ops[4]} type="radio" id={props.ops[0] + "_2"} />
                <label for={props.ops[0] + "_2"} className="option">{props.ops[2]}</label>
                <input className="selectopt" name={props.ops[4]} type="radio" id={props.ops[0] + "_3"} />
                <label for={props.ops[0] + "_3"} className="option">{props.ops[3]}</label>
            </div>
        </div>
    )
}
export default SelectOp;