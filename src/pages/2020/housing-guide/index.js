import React from "react"
import s from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Helmet } from "react-helmet"
import { Col, Container, Row, Image } from "react-bootstrap"
import { Ads } from '../../../components/shared'
import {
  Card,
  CardContent,
  Header,
  Hero,
  Navbar,
} from "../../../components/2020/housing-guide"

// TODO: Extract these colors into a constants file
const WHITE = `#FFFFFF`
const ORANGE = `#F29F4D`
const LIGHT_MAGENTA = `#F9EDF4`
const DARK_ORANGE = `#A56021`
const DARK_PURPLE = `#60113E`
const LIGHT_PURPLE = `#932C6C`
const BROWN = `#70380A`

const Metadata = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Housing Guide 2020 | The Daily Pennsylvanian</title>

    <meta
      property="og:title"
      content="Housing Guide 2020 | The Daily Pennsylvanian"
    />
    <meta
      property="og:image"
      content="https://snworksceo.imgix.net/dpn/9cc22c52-fbc5-48f7-a43c-bfda087332ec.sized-1000x1000.png"
    />
    <meta property="og:description" content="Your guide to living at Penn" />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content="https://projects.thedp.com/2020/housing-guide/"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Housing Guide 2020 | The Daily Pennsylvanian"
    />
    <meta
      name="twitter:image"
      content="https://snworksceo.imgix.net/dpn/9cc22c52-fbc5-48f7-a43c-bfda087332ec.sized-1000x1000.png"
    />
    <meta name="twitter:description" content="Your guide to living at Penn" />
    <meta
      name="twitter:url"
      content="https://projects.thedp.com/2020/housing-guide/"
    />
    <meta name="twitter:site" content="@dailypenn" />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />
  </Helmet>
)

const Section = s.section`
  padding-top: 60px;
  padding-bottom: 60px;
  ${({ background }) => background && `background-color: ${background}`}
`

const SpacedRow = s(Row)`
  margin-top: 50px;
`

const Footer = s.footer`
  color: ${BROWN};
  padding: 20px 0px;
  text-align: center;
`

const DomCard = s(Card)`
  @media (min-width: 768px) {
    width: 45%;
    margin-left: auto;
    margin-top: -300px;
  }
`

const BroadStreetAdUnit = () => (
  <div style={{ marginBottom: '1rem' }}>
    <broadstreet-zone zone-id="69577" />
  </div>
)

export default () => (
  <StaticQuery query={graphql`
    query {
      news: allFile(filter: { relativePath: { eq: "news_HG_2020.json" } }) {
        edges {
          node {
            childrenNewsHg2020Json {
              title
              link
              authors
              abstract
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }

      opinion: allFile(filter: { relativePath: { eq: "opinion_HG_2020.json" } }) {
        edges {
          node {
            childOpinionHg2020Json {
              title
              link
              authors
              abstract
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1900, maxHeight: 1280) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `}
  render={data => {
    const {
      node: { childrenNewsHg2020Json: newsArticles }
    } = data.news.edges[0]

    const {
      node: { childOpinionHg2020Json: opinionArticle }
    } = data.opinion.edges[0]

    return (
      <>
        <Metadata />
        <Navbar />
        <Hero />
        <Section>
          <Row>
            <Header>Guide</Header>
          </Row>
          <Container>
            <SpacedRow>
              <Col sm={12} md={6}>
                <Card>
                  <CardContent
                    {...newsArticles[0]}
                    primary={BROWN}
                    secondary={DARK_ORANGE}
                  />
                </Card>
              </Col>
              <Col sm={12} md={6}>
                {/* TODO: MORE ADS */}
                <div>Ad1</div>
                <div>Ad2</div>
              </Col>
            </SpacedRow>
          </Container>
        </Section>
        <Section background={LIGHT_MAGENTA}>
          <Container>
            <Row>
              <Header inverted>News</Header>
            </Row>
            <SpacedRow>
              <Col sm={12} md={6}>
                <Card>
                  <CardContent
                    {...newsArticles[1]}
                    primary={DARK_PURPLE}
                    secondary={LIGHT_PURPLE}
                  />
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <Card>
                  <CardContent
                    {...newsArticles[2]}
                    primary={DARK_PURPLE}
                    secondary={LIGHT_PURPLE}
                  />
                </Card>
              </Col>
            </SpacedRow>
            <Row>
              <Col sm={12} md={6}>
                <Card>
                  <CardContent
                    {...newsArticles[3]}
                    primary={DARK_PURPLE}
                    secondary={LIGHT_PURPLE}
                  />
                </Card>
              </Col>
              <Col md={12} md={6}>
                {/* TODO: MORE ADS */}
                <div>Ad1</div>
                <BroadStreetAdUnit />
              </Col>
            </Row>
          </Container>
        </Section>

        <Section>
          <Container>
            <Row>
              <Ads />
            </Row>
            <Row>
              <Header> Opinion </Header>
            </Row>
            <SpacedRow>
              <Col sm={12} md={8}>
                <Card flush>
                  {/* TODO: REPLACE THIS LATER */}
                  <Img fluid={opinionArticle.image.src.childImageSharp.fluid} className="img-fluid" />
                </Card>
                <DomCard>
                  <CardContent
                    {...opinionArticle}
                    primary={BROWN}
                    secondary={DARK_ORANGE}
                    noImg
                  />
                </DomCard>
              </Col>
              <Col>
                <BroadStreetAdUnit />
                <BroadStreetAdUnit />
                <BroadStreetAdUnit />
              </Col>
            </SpacedRow>
          </Container>
        </Section>

        <Footer>
          Made with 🏠 by The Daily Pennsylvanian © 2020. All rights reserved.
        </Footer>
      </>
    )}}
  />
)
