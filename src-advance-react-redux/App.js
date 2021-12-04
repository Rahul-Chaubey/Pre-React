import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import Counter from './Counter';
import NewCounter from './NewCounter';


function App() {
  return <div className = "App">
    <Counter/>
    <NewCounter/>
  </div>

}

export default App;
