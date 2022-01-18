import React from 'react';
import Init1 from './components/layouts/init1'
import { BrowserRouter, HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
/**
 * COMPONENTS
 */
import ProgramDetails from "./components/select_op";

const name = 'John'
const element = <p>Hello {name}</p>

export const App = () => {
  return (
    <Init1/>
  )
}