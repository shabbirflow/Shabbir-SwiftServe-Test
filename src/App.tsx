import { useState } from 'react'
import './App.css'
import shrekImage from './assets/shrek.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>TESTING SWIFTSERVE STUFF</h1>
        <h2>HOPE IT WORKS</h2>
        <img src={shrekImage} alt="Shrek" height={300} width={600} />
        
        </div>
    </>
  )
}

export default App
