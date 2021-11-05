
import { useState } from 'react';
import './App.css';
//import { Counter } from './components/Counter';
//import { Message } from './components/Message';
import { MessageList } from './components/MessageList';





function App() {
  //const [message_prop, setMessage_prop] = useState('I m a prop');//обновление UI
  //const [showCounter, setShowCounter] = useState(true); //паттерн will unmount по кнопке button
  // const handleClick = () => {
  //   alert('Good luck');
  //   setMessage_prop('I m a new prop');
  // }
  const handleToggleCounter = () => {
    setShowMessageList(prevShow => !prevShow);
  }
  const [showMessageList, setShowMessageList] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick= {handleToggleCounter}>{showMessageList ? 'Close chat  ' : 'Open chat'}</button>
        {showMessageList && <MessageList />}
      </header>
    </div>
  );
}
export default App;


// <Message message={ message_prop}  onCmcClick={handleClick}/>
//{showCounter && <Counter />} 