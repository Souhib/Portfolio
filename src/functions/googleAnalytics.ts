/* utils/ga.js */

import GA4React from 'ga-4-react'

let ga4react: GA4React

export async function googleAnalyticsInit (): Promise<void> {
  if (!GA4React.isInitialized() && typeof window !== 'undefined') {
    ga4react = new GA4React('G-YGFNP9DBVS')

    await ga4react.initialize()
    logPageView()
  }
}

const logPageView = (): void => ga4react.pageview(window.location.pathname)