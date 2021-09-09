import './App.css';
import { useCounter } from './useCounter';
import Joke from './Joke/Joke';
import Pokemon from './Pokemon/Pokemon';

function App() {
  const { count, increment, decrement } = useCounter();
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>
        <Joke></Joke>

        <Pokemon></Pokemon>
      </div>
    </div>
  );
}

export default App;
