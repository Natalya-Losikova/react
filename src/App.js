
import { useState } from 'react';
import './App.css';
import { Message } from './components/Message'



function App() {
  const [message_prop, setMessage_prop] = useState('I m a prop');//обновление UI
  const handleClick = () => {
    alert('Good luck');
    setMessage_prop('I m a new prop');
  }
  return (
    <div className="App">
      <header className="App-header">
        <Message message={ message_prop}  onCmcClick={handleClick}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
