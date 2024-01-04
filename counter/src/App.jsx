import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  let add = () => {
    if (counter === 20) {
      return;
    }
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  };

  let remove = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1)
  };

  return (
    <>
      <h1>Ravi Aajugiya</h1>
      <h2>Counter {counter}</h2>
      <button onClick={add}>Increase</button>
      <button onClick={remove}>Decrease</button>
      <footer><h3>footer {counter}</h3></footer>
    </>
  )
}

export default App