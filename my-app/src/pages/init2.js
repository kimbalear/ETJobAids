import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";


class Init2 extends Component {
    render() {
        let receta = {
            nobre: 'pizza',
            ingredientes: ['tomate', 'queso', 'jamon cocid'],
            calorias: 400
        }

        return (
            <div>Hola</div>
        )
    }
}
export default Init2;

