import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import { SectionHeader, Title, Author } from "./shared"


const ColoredColBox = s(Col)`
  min-height: 40%
`

const Articles = () => {
  const { borat, music } = useStaticQuery(graphql`
    query {
      borat: file(relativePath: {eq: "borat.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      music: file(relativePath: {eq: "radio.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Container>
  <Row>
    <Col>
      <Img fluid={borat.childImageSharp.fluid} />
      <Title>Borat Subsequent Moviefilm:' A Review</Title>
      <Author>BY CAYLEN DAVID</Author>
    </Col>
  </Row>
  <Row>
    <Col>
      <Title>'Star Trek', Syncopes, and the Hypothetical Fall of America</Title>
      <Author>BY JULIA POLSTER</Author>
    </Col>
    <Col>
      <Title>What Does An Election Sound Like?</Title>
      <Author>BY NORA YOUN</Author>
    </Col>
  </Row>
  <Row>
    <Col>
      <Img fluid={music.childImageSharp.fluid} />
      <Title>Does the Music Industry Actually Care if You Voted</Title>
      <Author>BY PHIL STEINKRAUSS</Author>
    </Col>
  </Row>
</Container>
}

const Background = s.div`
  background-color: #F8F8F8;
`
const ComicHeader = s(Title)`
  
`
const StarBar = s.div`

`
const ComicRelief = () => {
  return <Background>
    <Col>

    </Col>
    <div className="d-flex justify-content-center" style={{ padding: '2rem 0 1rem 0' }}>
      <img src="/img/stars.png" style={{ height: '25px' }} />
    </div>
    <H2> MUST READ: </H2>
    <div style={{ padding: '0 1rem' }}>
      {articles.map(article => <MustReadArticle article={article} />)}
    </div>
    <div className="d-flex justify-content-center" style={{ padding: '2rem 0' }}>
      <img src="/img/stars.png" style={{ height: '25px' }} />
    </div>
  </Background>
}

const WatchingListening = () => (
  <>
    <SectionHeader>WATCHING & LISTENING</SectionHeader>
    <Container>
      <Row>
        <Col md={8}>
          <Articles />
        </Col>
        <Col md={4}>
          <ComicRelief />
        </Col>
      </Row>
    </Container>
  </>
)

export default WatchingListening
