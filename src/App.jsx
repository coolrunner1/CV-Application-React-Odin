import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
function App() {
  const [count, setCount] = useState(0)

  const buttonClick=()=>{
    setCount((count+1));
  }

  return (
    <>
      <Button onClick={buttonClick} text="Hello world" />
      <DisplayCnt count={count}/>
      <GeneralInfo/>
      <Education/>
      <Experience/>
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
