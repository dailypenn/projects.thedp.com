import React from "react"
import { Helmet } from "react-helmet"
import s from 'styled-components'

import { Navbar } from "../../../components/2020/election/Navbar"
import { FUTURA_REGULAR } from '../../../utils/font'

import Arts from "../../../components/2020/election/Arts.js"
import Ego from "../../../components/2020/election/Ego.js"
import Features from "../../../components/2020/election/Features.js"
import HotTakes from "../../../components/2020/election/HotTakes.js"
import WatchingListening from "../../../components/2020/election/WatchingListening.js"

const HEADER = `https://s3.amazonaws.com/snwceomedia/dpn/87ba14cb-b4db-4ff6-9278-4483d77881d1.original.gif`

const Credit = s.div`
  ${FUTURA_REGULAR}
  color: #000000;
  padding: 1rem;
  font-size: 80%;
  margin: 1 0rem;
  text-align: center;
  background-color: #FFD4DD;
`

const IndexPage = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="How civic engagement resulted in a Biden win"
      />
      <title>Election 2020 | 34th Street Magazine</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />

      <meta
        property="og:title"
        content="Election 2020 | 34th Street Magazine"
      />
      <meta
        property="og:image"
        content="https://snworksceo.imgix.net/dpn-34s/84b5b953-d567-41a8-b56a-882659847cdc.sized-1000x1000.png"
      />
      <meta
        property="og:description"
        content="How civic engagement resulted in a Biden win"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://projects.thedp.com/2020/34st-election"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Election 2020 | 34th Street Magazine"
      />
      <meta
        name="twitter:image"
        content="https://snworksceo.imgix.net/dpn-34s/84b5b953-d567-41a8-b56a-882659847cdc.sized-1000x1000.png"
      />
      <meta
        name="twitter:description"
        content="How civic engagement resulted in a Biden win."
      />
      <meta
        name="twitter:url"
        content="https://projects.thedp.com/2020/34st-election"
      />
      <meta name="twitter:site" content="@dailypenn"></meta>

      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
    </Helmet>

    <Navbar />
    <img src={HEADER} className="img-fluid"/>

    
    <Features />
    <Ego />
    <HotTakes />
    <Arts />
    <WatchingListening />

    <Credit> Made with <span role="img"> 🇺🇸 </span> by The Daily Pennsylvanian © 2020. All rights reserved.  </Credit>
  </>
)

export default IndexPage
