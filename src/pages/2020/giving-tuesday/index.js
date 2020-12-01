import React from 'react'
import { Helmet } from 'react-helmet'

import { NavBar, Footer } from '../../../components/shared'
import Hero from '../../../components/2020/giving-tuesday/Hero'
import Alumni from '../../../components/2020/giving-tuesday/Alumni'
import Students from '../../../components/2020/giving-tuesday/Students'
import AlwaysTheDP from '../../../components/2020/giving-tuesday/AlwaysTheDP'
import AlwaysThere from '../../../components/2020/giving-tuesday/AlwaysThere'
import AlwaysHere from '../../../components/2020/giving-tuesday/AlwaysHere'
import { GREY } from '../../../components/2020/giving-tuesday/shared'

import { GOPHER_REGULAR } from '../../../utils/font'

const NavBarTitles = {
  left: [
    { text: 'Always Here', link: 'always-here' },
    { text: 'Always There', link: 'always-there' },
  ],
  right: [
    { text: 'Always The DP', link: 'always-the-dp' },
    { text: 'Donate', link: 'https://www.thedp.com/page/donate' },
  ],
}

const Index = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="#GivingTuesday"
      />
      <title>Always The DP</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />

      <meta
        property="og:title"
        content="Always The DP"
      />
      <meta
        property="og:image"
        content="https://snworksceo.imgix.net/dpn/eb48484c-3a7a-4089-9cfb-8c064987cd4f.sized-1000x1000.png"
      />
      <meta
        property="og:description"
        content="#GivingTuesday"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://projects.thedp.com/2020/giving-tuesday"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Always The DP"
      />
      <meta
        name="twitter:image"
        content="https://snworksceo.imgix.net/dpn/eb48484c-3a7a-4089-9cfb-8c064987cd4f.sized-1000x1000.png"
      />
      <meta
        name="twitter:description"
        content="#GivingTuesday"
      />
      <meta
        name="twitter:url"
        content="https://projects.thedp.com/2020/giving-tuesday"
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

    <NavBar titles={NavBarTitles} font={GOPHER_REGULAR} />
    <Hero />
    <AlwaysHere />
    <Students />
    <Alumni />
    <AlwaysThere />
    {/* <AlwaysTheDP /> */}

    <Footer emoji="💖" bgColor={GREY} />
  </>
)

export default Index
