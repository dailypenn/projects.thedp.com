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
  }

  .container-left {
    width: 50vw;
    height: 100vh;
    position: relative;
    background-image: url('https://snworksceo.imgix.net/dpn/75a9f4d3-6919-4e10-b45b-c597a46ffc92.sized-1000x1000.jpg?');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container-right {
    width: 50vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url('https://snworksceo.imgix.net/dpn/e47b650c-95a7-421f-8f9d-be141856111e.sized-1000x1000.jpg?');
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
      // background-image: url('https://snworksceo.imgix.net/dpn/e47b650c-95a7-421f-8f9d-be141856111e.sized-1000x1000.jpg?');
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
      background-image: url('https://snworksceo.imgix.net/dpn/e47b650c-95a7-421f-8f9d-be141856111e.sized-1000x1000.jpg?');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .container-left {
      display: none;
    }

    .container-right {
      display: none;
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
        content="https://snworksceo.imgix.net/dpn/e47b650c-95a7-421f-8f9d-be141856111e.sized-1000x1000.jpg?"
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
        content="https://snworksceo.imgix.net/dpn/e47b650c-95a7-421f-8f9d-be141856111e.sized-1000x1000.jpg?"
      />
      <meta
        name="twitter:url"
        content="https://projects.thedp.com/clients/william-schoepe-properties/"
      />
    </Helmet>

    <Wrapper>
      <div class="container">
        <div class="container-left" />
        <div class="container-right" />
        <div class="inner-container">
          <div class="title-box">
            <h1>
              William Schoepe Properties
              <br />
              40th &amp; Spruce
            </h1>
            <ul>
              <li>
                <h3>Apartment Available</h3>
                <p>2 Bedroom</p>
                <p> Available June 1st </p>
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

        <h3>Apartment Available</h3>
        <p>2 Bedroom</p>
        <p> Available June 1st </p>

        <br />
        <h3>Interested? Text (215) 880-7077</h3>
      </div>
    </Wrapper>
  </>
)

export default App
