import React from 'react'
import s from 'styled-components'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'

import { BackgroundWrapper } from '../../../components/2021/best-of-penn/shared'
import TanComponent from '../../../components/2021/best-of-penn/TanComponent.js'
import BlueComponent from '../../../components/2021/best-of-penn/BlueComponent.js'
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { relativePath: { eq: "best-of-penn-content.json" } }) {
      edges {
        node {
          childrenBestOfPennContentJson {
            section
            description
            items {
              address
              blurb
              category
              hours
              img {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1200, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
              place
            }
            
          }
        }
      }
    }
  }
`)

const {
  node: { childrenBestOfPennContentJson: sections },
} = data.allFile.edges[0]

  return (
    <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content=""
      />
      <title>2020 Election Guide | The Daily Pennsylvanian</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />

      <meta
        property="og:title"
        content="Best of Penn | The Daily Pennsylvanian"
      />
      <meta
        property="og:image"
        content=""
      />
      <meta
        property="og:description"
        content=""
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://projects.thedp.com/2021/best-of-penn"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Best of Penn | The Daily Pennsylvanian"
      />
      <meta
        name="twitter:image"
        content=""
      />
      <meta
        name="twitter:description"
        content="Your guide for navigating this unprecedented virtual school year"
      />
      <meta
        name="twitter:url"
        content="https://projects.thedp.com/2021/best-of-penn"
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

    <BackgroundWrapper>
      <TanComponent section={sections[0]} colmd={4}/>
      <BlueComponent section={sections[1]}/>
      <TanComponent section={sections[2]} colmd={5}/>
      <TanComponent section={sections[3]} colmd={5}/>
      <TanComponent section={sections[4]} colmd={5}/>
      <BlueComponent section={sections[5]}/>
    </BackgroundWrapper>
    </>
  )
}

export default IndexPage