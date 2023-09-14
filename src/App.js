import './App.css';
import CounterClass from './component/ClassCounter';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      Name:{process.env.REACT_APP_NAME}
      <CounterClass/>
    </div>
  );
}

export default App;
