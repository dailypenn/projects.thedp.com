import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { Footer, NavBar } from '../../components/shared'
import FiftyTwoFacesCoverImg from '../../content/images/2021/fifty-two-faces/52facesheader.png'
import { BackgroundWrapper } from '../../components/2021/fifty-two-faces/shared'
import Quotes from '../../components/2021/fifty-two-faces/Quotes.js'
import Description from '../../components/2021/fifty-two-faces/Description.js'

const NAVBAR_TITLES = {
  left: [
    // { text: 'FOOD', link: 'food' },
    // { text: 'DRINKS', link: 'drinks' },
    // { text: 'ACTIVITIES', link: 'activities' },
  ],
  right: [
    // { text: 'LIVING', link: 'living' },
    // { text: 'BEAUTY', link: 'beauty' },
    // { text: 'QUARANTINE', link: 'quarantine' },
  ],
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "fifty-two-faces-content.json" } }) {
        edges {
          node {
            childrenFiftyTwoFacesContentJson {
              author
              brief
              description
              section
              items {
                text
                person
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenFiftyTwoFacesContentJson: sections },
  } = data.allFile.edges[0]

  const [description, section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12] = sections

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Best of Penn" />
        <title>52 weeks, faces, and stories | The Daily Pennsylvanian</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <meta
          property="og:title"
          content="52 weeks, faces, and stories | The Daily Pennsylvanian"
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn/911a0997-d5e4-44f9-a21c-b4641280f6fe.sized-1000x1000.png"
        />
        <meta property="og:description" content="Fifty-Two Faces" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.thedp.com/2021/52-Faces"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="52 weeks, faces, stories | The Daily Pennsylvanian"
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn/911a0997-d5e4-44f9-a21c-b4641280f6fe.sized-1000x1000.png"
        />
        <meta name="twitter:description" content="Fifty-Two Faces" />
        <meta
          name="twitter:url"
          content="https://projects.thedp.com/2021/fifty-two-faces"
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

      <NavBar
        titles={NAVBAR_TITLES}
        bgColor="#241F20"
        fontColor="#FFFFFF"
        img="/img/DP-Logo-Full-White.png"
      />
      <div>
        <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 5px 6px #00000029', }} />
      </div>
      <BackgroundWrapper color={"#ffffff"}>
        <div id="overview">
          <Description author={description.author} brief={description.brief} description={description.description}/>
        </div>
        <div id="quotes1">
          <Quotes section={section1} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes2">
          <Quotes section={section2} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes3">
          <Quotes section={section3} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes4">
          <Quotes section={section4} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes5">
          <Quotes section={section5} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes6">
          <Quotes section={section6} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes7">
          <Quotes section={section7} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes8">
          <Quotes section={section8} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes9">
          <Quotes section={section9} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes10">
          <Quotes section={section10} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes11">
          <Quotes section={section11} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
        <div>
          <img src={FiftyTwoFacesCoverImg} style={{ width: '100%', boxShadow: '0px 0px 7px 7px #00000029', }} />
        </div>
        <div id="quotes12">
          <Quotes section={section12} bgColor="#ffffff" textColor="#171717" dashColor="#bf1919"/>
        </div>
      </BackgroundWrapper>
      <Footer emoji="💖" bgColor="#ffffff" fontColor="#171717" year="2021" />
    </>
  )
}

export default IndexPage
