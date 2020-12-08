import React from 'react'
import { Helmet } from 'react-helmet'

import { NavBar, Footer } from '../../../components/shared'
import News from '../../../components/2020/final-issue/News'
import Opinion from '../../../components/2020/final-issue/Opinion'

import { GOPHER_REGULAR } from '../../../utils/font'

const NavBarTitles = {
  left: [
    { text: 'News', link: 'news' },
    { text: 'Opinion', link: 'opinion' },
    { text: 'Sports', link: 'sports' },
  ],
  right: [
    { text: 'Multimedia', link: 'multimedia' },
    { text: '34th Street', link: '34thst' },
    { text: 'Under the Button', link: 'utb' },
  ],
}

const Index = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="final-issue"
        content="#FinalIssue"
      />
      <title>Final Issue</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />

      <meta
        property="og:title"
        content="Final Issue"
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
        content="https://projects.thedp.com/2020/final-issue"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Final Issue"
      />
      <meta
        name="twitter:image"
        content="https://snworksceo.imgix.net/dpn/eb48484c-3a7a-4089-9cfb-8c064987cd4f.sized-1000x1000.png"
      />
      <meta
        name="twitter:description"
        content="#FinalIssue"
      />
      <meta
        name="twitter:url"
        content="https://projects.thedp.com/2020/final-issue"
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
    <News />
    <Opinion />

    <Footer emoji="💖" bgColor={'#F5F4F4'} />
  </>
)

export default Index
