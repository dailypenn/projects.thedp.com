import React from 'react'
import { Helmet } from 'react-helmet'
import s from 'styled-components'

import { NavBar, Footer } from '../../../components/shared'
import Alumni from '../../../components/2020/giving-tuesday/Alumni'
import Students from '../../../components/2020/giving-tuesday/Students'
import Years from '../../../components/2020/giving-tuesday/Years'
import Numbers from '../../../components/2020/giving-tuesday/Numbers'
import Social from '../../../components/2020/giving-tuesday/Social'

const NavBarTitles = {
  left: [
    { text: 'Always Here', link: 'always-here' },
    { text: 'Always There', link: 'always-there' },
  ],
  right: [
    { text: 'Always The DP', link: 'always-the-dp' },
    { text: 'Social', link: 'social' },
  ],
}

const Meta = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Your guide for voting in the 2020 elections"
    />
    <title>2020 Giving Tuesday | The Daily Pennsylvanian</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />

    <meta
      property="og:title"
      content="2020 Election Guide | The Daily Pennsylvanian"
    />
    <meta
      property="og:image"
      content="https://snworksceo.imgix.net/dpn/a15d5bfd-cb4c-4588-a420-ebdca0fb2b78.sized-1000x1000.jpg"
    />
    <meta
      property="og:description"
      content="Your guide for voting in the 2020 elections"
    />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content="https://projects.thedp.com/2020/election"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="2020 Election Guide | The Daily Pennsylvanian"
    />
    <meta
      name="twitter:image"
      content="https://snworksceo.imgix.net/dpn/a15d5bfd-cb4c-4588-a420-ebdca0fb2b78.sized-1000x1000.jpg"
    />
    <meta
      name="twitter:description"
      content="Your guide for navigating this unprecedented virtual school year"
    />
    <meta
      name="twitter:url"
      content="https://projects.thedp.com/2020/election"
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
)

const Index = () => (
  <>
    <Meta />
    <NavBar titles={NavBarTitles} />

    <Alumni />
    <Students />
    <Years />
    <Numbers />
    <Social />

    <Footer emoji="💖" />
  </>
)

export default Index
