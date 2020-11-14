import React from 'react'
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Col } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import { SectionHeader, Title, Author, Wrapper, StyledRow } from './shared'
import { CANELA_REGULAR, FUTURA_REGULAR } from '../../../utils/font'

const FeatureWrapper = s.div`
  text-align: right;
  padding: 6.5rem 1.5rem 6.5rem 8rem;
`

// TODO: ADD DIFFERENT SIZING AND POSITION FOR DIFFERENT BREAKPOINTS
const FeatureTitle = s.div`
  ${CANELA_REGULAR}
  color: white;
  font-size: 2em;
  line-height: 1.1;
  text-align: right;
`

const FeatureAuthor = s.div`
  ${FUTURA_REGULAR}
  color: white;
  font-size: 0.7em;
  font-weight: light;
  margin-top: 1rem;
`

const Features = () => {
  const { left, right } = useStaticQuery(graphql`
    query {
      left: file(relativePath: { eq: "engagement.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      right: file(relativePath: { eq: "republican.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper id="features">
      <SectionHeader>FEATURES</SectionHeader>
      <StyledRow padding="10">
        <Col md={5}>
          <Img fluid={left.childImageSharp.fluid} />
          <Title>
            <b>
              There's a limit to what can be expressed through the voting
              process
            </b>
            , but civic engagement doesn't end on Election Day.
          </Title>
          <Author>BY PEARL LIU</Author>
        </Col>
        <Col md={7}>
          <BackgroundImage
            fluid={right.childImageSharp.fluid}
            style={{ border: 'none' }}
          >
            <FeatureWrapper>
              <FeatureTitle>
                In the wake of a Trump loss, the future of the Republican Party
                lies in the hands of some of its youngest members.
              </FeatureTitle>
              <FeatureAuthor>BY DELANI SAGNER</FeatureAuthor>
            </FeatureWrapper>
          </BackgroundImage>
        </Col>
      </StyledRow>
      {/* TODO: ADD AD HERE */}
    </Wrapper>
  )
}

export default Features
