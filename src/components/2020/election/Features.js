import React from "react"
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-bootstrap'

import { SectionHeader, Title, Author } from './shared'
import { CANELA_REGULAR, FUTURA_REGULAR } from '../../../utils/font'

const FeatureWrapper = s.div`
  position: absolute;
  top: 0;
  text-align: right;
  width: 90%;
  height: 100%;
`

// TODO: ADD DIFFERENT SIZING AND POSITION FOR DIFFERENT BREAKPOINTS
const FeatureTitle = s.div`
  ${CANELA_REGULAR}
  position: absolute;
  color: white;
  top: 20%;
  right: 10%;
  font-size: 2em;
  line-height: 1.1;
  text-align: right;
  width: 60%;
`

const FeatureAuthor = s.div`
  ${FUTURA_REGULAR}
  position: absolute;
  right: 10%;
  color: white;
  top: 60%;
  font-size: 0.7em;
  font-weight: light;
`

const Wrapper = s.div`
  margin: 3rem 0;
`

const Features = () => {
  const { left, right } = useStaticQuery(graphql`
    query {
      left: file(relativePath: {eq: "engagement.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      right: file(relativePath: {eq: "republican.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <SectionHeader>FEATURES</SectionHeader>
      <Container>
        <Row>
          <Col md={5}>
            <Img fluid={left.childImageSharp.fluid} />
            <Title>
              <b>There's a limit to what can be expressed through the voting process</b>, but civic engagement doesn't end on Election Day.
            </Title>
            <Author>
              BY PEARL LIU
            </Author>
          </Col>
          <Col md={7}>
            <Img fluid={right.childImageSharp.fluid} style={{ filter: `brightness(.7)` }} />
            <FeatureWrapper>
              <FeatureTitle>In the wake of a Trump loss, the future of the Republican Party lies in the hands of some of its youngest members.</FeatureTitle>
              <FeatureAuthor>BY DELANI SAGNER</FeatureAuthor>
            </FeatureWrapper>
          </Col>
        </Row>
        </Container>
      {/* TODO: ADD AD HERE */}
    </Wrapper>
  )
}


export default Features
