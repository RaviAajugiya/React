import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);


  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  })

  const generatePassword = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';
    let charIndex;
    if (number) str += '1234567890';
    if (specialChar) str += '!@#$%^&*(){}';

    for (let i = 0; i < length; i++) {
      charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass)

  }, [length, number, specialChar])

  useEffect(() => {
    generatePassword();
  }, [length, number, specialChar, generatePassword])

  return (
    <>
      <div className='text-2xl mt-16 p-4'>
        <div className='w-full'>
          <input
            className='p-4 rounded-l-lg w-1/3'
            value={password}
            ref={passwordRef}
          />
          <button
            className='bg-blue-500 p-4 rounded-r-lg hover:bg-blue-600'
            onClick={() => copyPass()}
          >Copy</button>
        </div>
        <div className='flex gap-4 mt-5 justify-center text-white'>
          <input
            type="range"
            value={length}
            min={5}
            max={40}
            onChange={e => setLength(e.target.value)}
          />
          <label>Length: {length}</label>

          <input
            type="checkbox"
            id="numInput"
            defaultChecked={number}
            onChange={() => setNumber(prev => !prev)}
          />
          <label htmlFor="numInput">Number</label>

          <input
            type="checkbox"
            id="charInput"
            defaultChecked={specialChar}
            onChange={() => setSpecialChar(prev => !prev)}
          />
          <label htmlFor="charInput">Special Character</label>

        </div>
      </div>
    </>
  )
}

export default App
