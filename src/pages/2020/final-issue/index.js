import React from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-bootstrap'

import { NavBar, Footer, Ads } from '../../../components/shared'
import Timeline from '../../../components/2020/final-issue/Timeline'
import News from '../../../components/2020/final-issue/News'
import Opinion from '../../../components/2020/final-issue/Opinion'
import Street from '../../../components/2020/final-issue/Street'
import UTB from '../../../components/2020/final-issue/UTB'
import Multimedia from '../../../components/2020/final-issue/Multimedia'
import Sports from '../../../components/2020/final-issue/Sports'

import { LIBRE_REGULAR } from '../../../utils/font'

const NavBarTitles = {
  left: [
    { text: 'NEWS', link: 'news' },
    { text: 'OPINION', link: 'opinion' },
    { text: 'SPORTS', link: 'sports' },
  ],
  right: [
    { text: 'MULTIMEDIA', link: 'multimedia' },
    { text: '34th ST', link: '34st' },
    { text: 'UNDER THE BUTTON', link: 'utb' },
  ],
}

const Index = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="final-issue" content="#FinalIssue" />
      <title>Final Issue</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />

      <meta property="og:title" content="Final Issue" />
      <meta
        property="og:image"
        content="https://snworksceo.imgix.net/dpn/6240fb3c-f7fb-4ac9-b404-d97f0246684f.sized-1000x1000.png"
      />
      <meta property="og:description" content="Final Issue" />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://projects.thedp.com/2020/final-issue"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Final Issue" />
      <meta
        name="twitter:image"
        content="https://snworksceo.imgix.net/dpn/6240fb3c-f7fb-4ac9-b404-d97f0246684f.sized-1000x1000.png"
      />
      <meta name="twitter:description" content="#FinalIssue" />
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

    <NavBar titles={NavBarTitles} font={LIBRE_REGULAR} />
    <div>
      <img src="/img/final-issue/hero.png" style={{ width: '100%' }} />
    </div>
    <Row>
      <Col lg={2} md={0}>
        <Timeline />
      </Col>
      <Col lg={10} md={12}>
        <News />
        <Opinion />
        <Sports />
        <Multimedia />
        <Street />
      </Col>
    </Row>

    <Ads />

    <UTB />
    <Footer emoji="💖" bgColor="white" />
  </>
)

export default Index
