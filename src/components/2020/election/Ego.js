import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import {
  SectionHeader,
  Title,
  Author,
  VerticalCol as Vertical,
  StyledRow,
  Wrapper,
  ColWithMargin,
} from './shared'

const Ego = () => {
  const { sarah, melania, campaign } = useStaticQuery(graphql`
    query {
      sarah: file(relativePath: { eq: "sarah-min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      melania: file(relativePath: { eq: "free-melania.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      campaign: file(relativePath: { eq: "campaign-trail.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="ego">
      <SectionHeader>EGO</SectionHeader>
      <StyledRow padding="12">
        <ColWithMargin md={5}>
          <Img fluid={sarah.childImageSharp.fluid} />
          <Title left>
            Meet Sarah Min, the Community Organizer Dedicating Her Life to
            Social Change
          </Title>
          <Author left>BY ANGELA SHEN</Author>
        </ColWithMargin>
        <Col md={6}>
          <Row>
            <Col md={5}>
              <Img fluid={melania.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <Title left>Olivia Troye headline will go here & kick ass</Title>
              <Author left>BY TAMSYN BRANN</Author>
            </Vertical>
          </Row>
          <Row style={{ marginTop: '2vw' }}>
            <Col md={5}>
              <Img fluid={campaign.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <Title left>
                From the Campaign Trail: These Two Penn Students Reflect on the
                Biden Campaign
              </Title>
              <Author left>BY MADDIE MULDOON</Author>
            </Vertical>
          </Row>
        </Col>
      </StyledRow>
      {/* TODO: ADD AD HERE */}
    </Wrapper>
  )
}

export default Ego
