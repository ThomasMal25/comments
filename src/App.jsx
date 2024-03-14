import { useEffect, useState } from 'react'

import data from './assets/data'
import './App.css'
import Card from './componnets/Card'

// for every like the user cannot re like the like 
// 
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <p className="bg-blue-500 text-white p-4"> OK </p>
     <Card comments={data}/>
    </>
  )
}

export default App
