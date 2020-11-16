import React from 'react'
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Col } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import { SectionHeader, Title, Author, Wrapper, StyledRow } from './shared'
import { CANELA_REGULAR, FUTURA_REGULAR } from '../../../utils/font'
import { StyledLink, Ads } from '../../shared'

import Articles from '../../../content/json/2020/34st-election/features.json'

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
          <StyledLink href={Articles[0].link} target="_blank">
            <Img fluid={left.childImageSharp.fluid} />
            <Title>
              <b>
                There's a limit to what can be expressed through the voting
                process
              </b>
              , but civic engagement doesn't end on Election Day.
            </Title>
            <Author>BY PEARL LIU</Author>
          </StyledLink>
        </Col>
        <Col md={7}>
          <StyledLink href={Articles[1].link} target="_blank">
            <BackgroundImage
              fluid={right.childImageSharp.fluid}
              style={{ border: 'none' }}
            >
              <FeatureWrapper>
                <FeatureTitle> {Articles[1].abstract} </FeatureTitle>
                <FeatureAuthor> BY DENALI SAGNER </FeatureAuthor>
              </FeatureWrapper>
            </BackgroundImage>
          </StyledLink>
        </Col>
      </StyledRow>
      <Ads />
    </Wrapper>
  )
}

export default Features
