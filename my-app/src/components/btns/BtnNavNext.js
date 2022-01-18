import React, { Component } from "react"
import { Link } from "react-router-dom";

export default function BtnNavNext(props) {
    return (
        <div className="btn_next slide_in_blurred_right">
            {props.text_btn}
            <i className="fa fa-arrow-right"></i>
        </div>
    )
}