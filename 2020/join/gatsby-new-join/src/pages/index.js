import React, { Component, useState } from "react"
// import { Link } from "gatsby"

import Header from "../components/header"
import Intro from "../components/intro"
import Editorial from "../components/editorial"
import Business from "../components/business"
import Street from "../components/street"
import UTB from "../components/utb"
import Join from "../components/join"

const IndexPage = () => (
  <>
    <Header/>
    <Intro/>
    <Editorial/>
    <Business/>
    <Street/>
    <UTB/>
    <Join/>
  </>
)

export default IndexPage
