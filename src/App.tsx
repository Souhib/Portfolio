import React, { useEffect } from 'react'

import ReactGa from 'react-ga'

import './App.css'
import Main from './Main'

ReactGa.initialize('G-G6L04L5260')
const App: React.FunctionComponent = () => {

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  
  return <Main />
}

export default App
