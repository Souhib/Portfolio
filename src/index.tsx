import React from 'react'

import GA4React from 'ga-4-react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import reportWebVitals from './reportWebVitals'

const ga4react = new GA4React('G-YGFNP9DBVS')
ga4react.initialize()
  .then((ga4) => {
    ga4.pageview('/')
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
