import React, { Component } from "react"
import { ReactComponent as Logo } from './../../assets/images/logout.svg'

const SelectOp = () => {
    return (
        <div className="btnLogOut slide_in_blurred_left">
            <div>
                <svg className="logout_icon slide_in_blurred_left" width="48" height="48" viewBox="0 0 48 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 34L16.82 31.18L11.66 26L32 26V22L11.66 22L16.82 16.84L14 14L4 24L14 34ZM40 38H24V42H40C42.2 42 44 40.2 44 38L44 10C44 7.8 42.2 6 40 6H24V10H40L40 38Z"
                        fill="#F5CBA3" />
                </svg>
            </div>
            <div>Log out</div>
        </div>
    )
}
export default SelectOp;