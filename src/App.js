import { useState } from 'react';
import './App.css';
import CounterClass from './component/ClassCounter';
import Counter from './component/Counter';

function App() {
  const [name, setName] = useState('amit')
  return (
    <div className="App">
      Name: {process.env.REACT_APP_MYNAME}
      <Counter/>
      <CounterClass name={name}/>
    </div>
  );
}

export default App;
