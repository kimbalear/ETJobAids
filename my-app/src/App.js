import React from 'react';
import { BrowserRouter, HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
/**
 * COMPONENTS
 */
import ProgramDetails from "./components/first_component";

const name = 'John'
const element = <p>Hello {name}</p>

export const App = () => {
  return (element)
}