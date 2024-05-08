import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Test(){
  return(
    <button onClick={buttonClick}>Hello world</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test />
    </>
  )
}

const buttonClick=()=>{
  console.log("Hello world")
}

export default App
