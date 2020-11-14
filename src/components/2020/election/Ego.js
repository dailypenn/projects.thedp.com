import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from 'react-bootstrap'
import { SectionHeader, Title, Author, VerticalCol as Vertical } from "./shared"

const Ego = () => {
  const { sarah, melania, campaign } = useStaticQuery(graphql`
    query {
      sarah: file(relativePath: {eq: "sarah-min.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      melania: file(relativePath: {eq: "free-melania.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      campaign: file(relativePath: {eq: "campaign-trail.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)

  return <>
    <SectionHeader>EGO</SectionHeader>
    <Container>
      <Row>
        <Col md={5} >
          <Img fluid={sarah.childImageSharp.fluid} />
          <Title left>Meet Sarah Min, the Community Organizer Dedicating Her Life to Social Change</Title>
          <Author left>BY ANGELA SHEN</Author>
        </Col>
        <Col md={7}>
          <Row>
            <Col md={5}>
              <Img fluid={melania.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <Title left larger>Olivia Troye headline will go here & kick ass</Title>
              <Author left>BY TAMSYN BRANN</Author>
            </Vertical>
          </Row>
          <Row style={{marginTop: "2vw"}}>
            <Col md={5}>
            <Img fluid={campaign.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <Title left larger>From the Campaign Trail: These Two Penn Students Reflect on the Biden Campaign</Title>
              <Author left>BY MADDIE MULDOON</Author>
            </Vertical>
          </Row>
        </Col>
      </Row>
      {/* TODO: ADD AD HERE */}
    </Container>
  </>
}


export default Ego
