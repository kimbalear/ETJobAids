import React, { Component } from "react"
import { Link, useParams } from "react-router-dom"
import SelectOp from './../select_op'
import LogOut from './../log_out'

class Init1 extends Component {
    render() {
        let receta = {
            nobre: 'pizza',
            ingredientes: ['tomate', 'queso', 'jamon cocid'],
            calorias: 400
        }

        return (
            <div>
                <div className="lyt_one">
                    <div className="grd_top_nav">
                        <div className="grd_left_top">
                            <LogOut />
                        </div>
                        <div className="grd_right_top">
                            <div className="select_lang slide_in_blurred_right" tabindex="1">
                                <SelectOp/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Init1;

