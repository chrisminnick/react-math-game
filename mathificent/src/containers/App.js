import React,{useState} from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

function App() {
  const [operation, setOperation] = useState('addition');
  const [maxNumber, setMaxNumber] = useState(0);

  return (
    <div className="App">
      <Header />
      <h1>Mathificent</h1>
      <ul>
        <li>Current operation: {operation}</li>
        <li>Current maxNumber: {maxNumber}</li>
      </ul>
      <Main operation = {operation}
            setOperation = {setOperation}
            maxNumber = {maxNumber}
            setMaxNumber = {setMaxNumber} />
      
      <Footer />
    </div>
  );
}

export default App;
