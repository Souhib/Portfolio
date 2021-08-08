import React from 'react'

import { googleAnalyticsInit } from 'functions/googleAnalytics'

import Body from './components/Layout/Body/Body'
import './App.css'

const App: React.FunctionComponent = () => {

  googleAnalyticsInit()

  return <Body />
}

export default App
