import React, { Component } from "react"
import { ReactComponent as Logo } from './../assets/images/logout.svg'

class SelectOp extends Component {
    render() {
        return (
            <div className="btnLogOut slide_in_blurred_left">
                <div><Logo /></div>
                <div>Log out</div>
            </div>
        )
    }
}
export default SelectOp;