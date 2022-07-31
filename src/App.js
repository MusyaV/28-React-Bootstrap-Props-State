import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';


function App(props) {

  return (
    <>
      <Header 
      arrCart={props.arrCart} 
      arrNav={props.arrNav}
      arrCardsBlock={props.arrCardsBlock}
      />
    </>
  );
}

export default App;
