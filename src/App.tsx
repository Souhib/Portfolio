import React from 'react'

import './App.css'
import { googleAnalyticsInit } from 'functions/googleAnalytics'

import Main from './Main'
const App: React.FunctionComponent = () => {

  googleAnalyticsInit()

  return <Main />
}

export default App
