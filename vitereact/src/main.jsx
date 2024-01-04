import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

const user = 'Admin'
const ReactElement = React.createElement(
  'a',
  {href : 'http://google.com'},
  'Google',
  user
)
const html = (<h1>hii</h1>)

ReactDOM.createRoot(document.getElementById('root'))
.render(
    // ReactElement,
    // html
    <App />
)