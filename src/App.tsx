import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DisplayMapClass} from './components/DisplayMapClass';
import { DisplayMapFc } from "./components/DisplayMapFC";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <DisplayMapClass/>
    //   </header>
    // </div>
    <DisplayMapClass/>
    // <DisplayMapFc/>
  );
}

export default App;
