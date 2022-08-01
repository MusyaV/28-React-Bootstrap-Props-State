import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

function App(props) {
  return (
    <>
      <Header 
      arrCart={props.appState.arrCart} 
      arrNav={props.appState.arrNav}
      arrCardsBlock={props.appState.arrCardsBlock}
      />
    </>
  );
}

export default App;
