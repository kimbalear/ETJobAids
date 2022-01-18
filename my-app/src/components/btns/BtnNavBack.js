import React, { Component } from "react"

export default function BtnNavBack(props) {
    return (
        <div className="btn_back slide_in_blurred_left">
            {props.text_btn}
            <i className="fa fa-arrow-left"></i>
        </div>
    )
}