import React from 'react'
import { Helmet } from 'react-helmet'

import s from 'styled-components'

const Wrapper = s.div`
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  }

  h1, h3, p {
    margin: 0;
  }

  p {
    font-size: 110%;
  }

  h1 {
    margin-bottom: 20px;
  }

  h3:first-of-type {
    margin-top: 20px;
  }

  .container {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url('https://snworksceo.imgix.net/dpn/120078a5-e00e-45a1-92f4-56743ad95825.sized-1000x1000.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .inner-container {
    position: absolute;
    bottom: 0;
    padding: 50px;
  }

  .title-box {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .information {
    background-color: rgba(255, 255, 255, 0.8);
    margin-top: 20px;
    padding: 20px;
  }

  .mobile-information {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    .container {
      background-image: url('https://s3.amazonaws.com/snwceomedia/dpn/120078a5-e00e-45a1-92f4-56743ad95825.original.jpg');
    }
  }

  @media screen and (max-width: 768px) {
    h1, h3, p {
      text-align: center;
    }

    h1 {
      padding-top: 40px;
    }

    .container {
      height: 50vh;
    }

    .inner-container {
      display: none;
    }

    .mobile-information {
      height: 50vh;
      display: block;
      padding: 0 20px;
      background-color: rgb(232, 232, 232);
    }
  }
`

const App = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>William Schoepe Properties</title>

      <meta property="og:title" content="William Schoepe Properties" />
      <meta
        property="og:image"
        content="https://snworksceo.imgix.net/dpn/120078a5-e00e-45a1-92f4-56743ad95825.sized-1000x1000.jpg"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://projects.thedp.com/clients/william-schoepe-properties/"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="William Schoepe Properties" />
      <meta
        name="twitter:image"
        content="https://snworksceo.imgix.net/dpn/120078a5-e00e-45a1-92f4-56743ad95825.sized-1000x1000.jpg"
      />
      <meta
        name="twitter:url"
        content="https://projects.thedp.com/clients/william-schoepe-properties/"
      />
    </Helmet>

    <Wrapper>
      <div class="container">
        <div class="inner-container">
          <div class="title-box">
            <h1>
              William Schoepe Properties
              <br />
              40th &amp; Spruce
            </h1>
            <ul>
              <li>
                <h3>House Available</h3>
                <p>10+ Bedrooms, 5 baths</p>
                <p> New Kitchen &amp; Floors </p>
              </li>
              <li>
                <h3>7 Bedroom Available</h3>
              </li>
            </ul>

            <h3>Interested? Text (215) 880-7077</h3>
          </div>
        </div>
      </div>
      <div class="mobile-information">
        <h1>
          William Schoepe Properties
          <br />
          40th &amp; Spruce
        </h1>

        <h3>House Available</h3>
        <p>10+ Bedrooms, 5 baths</p>
        <p> New Kitchen &amp; Floors </p>
        <br />
        <h3>7 Bedroom Available</h3>

        <br />
        <h3>Interested? Text (215) 880-7077</h3>
      </div>
    </Wrapper>
  </>
)

export default App
