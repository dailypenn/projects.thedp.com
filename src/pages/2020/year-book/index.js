import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import s from "styled-components"
import Img from "gatsby-image"

import Nav from "../../../components/2020/year-book/Nav"
import Sixty from "../../../components/2020/year-book/60s"
import Seventy from "../../../components/2020/year-book/70s"
import Eighty from "../../../components/2020/year-book/80s"
import Ninety from "../../../components/2020/year-book/90s"

import { MONTSERRAT_REGULAR } from "../../../utils/font"

const Credit = s.div`
  background: #000000;
  color: #ffffff;
  ${MONTSERRAT_REGULAR}
  padding: 1rem;
  font-size: 80%;
  margin-top: 2rem;
  text-align: center;
`

const Header = s(Img)`
  margin: 60px;
`

const Wrapper = s.div`
  .main {
    padding: 1rem 5rem 2rem 5rem;

    @media (max-width: 768px) {
      padding: 2rem 0 2rem 0;
    }
  }
`

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        headline: file(relativePath: { eq: "headline.png" }) {
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        book: file(relativePath: { eq: "book-2.png" }) {
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const { headline, book } = data
      return (
        <>
          <Helmet>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="A look back on move-in, New Student Orientation, and fall at Penn over the past 50 years."
            />
            <title>Remembering Dear Old Penn | The Daily Pennsylvanian</title>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            />

            <meta
              property="og:title"
              content="Year Book | The Daily Pennsylvanian"
            />
            <meta
              property="og:image"
              content="https://snworksceo.imgix.net/dpn-34s/bf6ebbed-3730-4eb1-8a94-21f5a136e2a4.sized-1000x1000.jpg"
            />
            <meta
              property="og:description"
              content="A look back on move-in, New Student Orientation, and fall at Penn over the past 50 years."
            />
            <meta property="og:type" content="article" />
            <meta
              property="og:url"
              content="https://projects.thedp.com/2020/year-book/"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Welcome Back | The Daily Pennsylvanian"
            />
            <meta
              name="twitter:image"
              content="https://snworksceo.imgix.net/dpn-34s/bf6ebbed-3730-4eb1-8a94-21f5a136e2a4.sized-1000x1000.jpg"
            />
            <meta
              name="twitter:description"
              content="A look back on move-in, New Student Orientation, and fall at Penn over the past 50 years."
            />
            <meta
              name="twitter:url"
              content="https://projects.thedp.com/2020/year-book/"
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
          <Nav />

          <div className="row" style={{ marginBottom: "1rem" }}>
            <Wrapper className="col-md main">
              <Header fluid={headline.childImageSharp.fluid} />
            </Wrapper>
            <div className="col-md">
              <Img fluid={book.childImageSharp.fluid} />
            </div>
          </div>

          <Sixty />
          <Seventy />
          <Eighty />
          <Ninety />

          <Credit>
            {" "}
            Made with <span role="img"> 💓 </span> by The Daily Pennsylvanian ©
            2020. All rights reserved.{" "}
          </Credit>
        </>
      )
    }}
  />
)

export default IndexPage
