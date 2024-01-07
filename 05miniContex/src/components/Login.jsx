import React, { useState, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        type="text"
        placeholder='UserName' />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="text" placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login