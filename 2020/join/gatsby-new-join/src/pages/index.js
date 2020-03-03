import React from 'react'
import Header from '../components/header'
import Intro from '../components/intro'
import '../components/styles.css'
import Editorial from '../components/editorial'
import Business from '../components/business'
import Street from '../components/street'
import UTB from '../components/utb'
import Join from '../components/join'

const IndexPage = () => (
  <>
    <Header siteTitle="Join The Daily Pennsylvanian, Inc." />
    <Intro />
    <Editorial />
    <Business />
    <Street />
    <UTB />
    <Join />
  </>
)

export default IndexPage
