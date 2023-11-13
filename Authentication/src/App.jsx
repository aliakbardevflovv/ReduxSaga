import { useState } from 'react'
import './App.css'
import Signup from './Components/Pages/Signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup/>
    </>
  )
}

export default App
