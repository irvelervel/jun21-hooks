import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

// REACT HOOKS RULES!
// 1) USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS
// 2) USE REACT HOOKS ALWAYS AT THE TOP LEVEL (do not nest them, do not put them after the return)

// useState -> allows you to create state variables in a functional component
// useEffect -> allows you to use lifecycle methods in a functional component

function App() {
  // state = {
  //   name: 'Stefano',
  //   counter: 0
  // }
  const [name, setName] = useState('Stefano')
  const [counter, setCounter] = useState(0)
  // the first element is the state variable you can directly use in your component
  // the second element is a function capable of updating just the state variable it comes with
  // the argument you're invoking useState with is going to be the initial value of your state variable

  // console.log(useState('manish'))
  // useState is a function returning an array!
  // const useState = () => {
  //   // .. do stuff
  //   return ['one', () => {}]
  // }

  const createArray = () => {
    return [1, 2]
  }

  const [stefano, justas] = createArray()

  console.log(stefano)
  console.log(justas)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <button onClick={() => setName('Vinay')}>CHANGE NAME</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>INCREASE COUNTER</button>
      </header>
    </div>
  )

  // you cannot put them here!
}

export default App
