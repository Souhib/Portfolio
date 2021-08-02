import React, { useEffect } from 'react'

import GA4React from 'ga-4-react'

import './App.css'
import Main from './Main'

const App: React.FunctionComponent = () => {

  useEffect(() => {
    const ga4react = new GA4React('G-YGFNP9DBVS')
    ga4react.initialize().then((ga4) => {
      ga4.pageview('/')
    })
  }, [])
  
  return <Main />
}

export default App
