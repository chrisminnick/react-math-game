import React,{useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Game from '../components/Game';

function App() {
  const [operation, setOperation] = useState('+');
  const [maxNumber, setMaxNumber] = useState(0);

  return (
    <div className="App">
      <Header />
      <h1>Mathificent</h1>
      <p>Select your operator and max number to practice your arithmetic!</p>

      <Route exact path="/"
        render={()=>{
          return(<Main  operation = {operation}
                        setOperation = {setOperation}
                        maxNumber = {maxNumber}
                        setMaxNumber = {setMaxNumber} 
                  />);}
                } />
      <Route path="/play"
        render={()=>{
          return(<Game  operation = {operation}
                        maxNumber = {maxNumber}
                  />);}
                } />
      
      <Footer />
    </div>
  );
}

export default App;
