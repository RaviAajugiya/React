import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Ravi",
    age: 20
  }

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-xl text-black mb-4'>Tailwind CSS</h1>
      <div className='flex gap-5'>
        <Card username="Chai Aur Code" btnText="Click Me" obj={myObj} />
        <Card username="Chai Aur React" btnText="Visit Me"/>
        <Card username="Chai Aur JS" />

      </div>

    </>
  )
}

export default App
