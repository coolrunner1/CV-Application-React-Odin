import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const buttonClick=()=>{
    setCount((count+1));
  }

  return (
    <>
      <Button onClick={buttonClick} text="Hello world" />
      <DisplayCnt count={count}/>
    </>
  )
}

function DisplayCnt({count}){
  return(
    <div>{count}</div>
  )
}

function Button(props){
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default App
