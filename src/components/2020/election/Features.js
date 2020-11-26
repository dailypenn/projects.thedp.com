import React from 'react'
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Col } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import { SectionHeader, Title, Author, Wrapper, StyledRow } from './shared'
import { CANELA_REGULAR, FUTURA_REGULAR } from '../../../utils/font'
import { StyledLink, Ads } from '../../shared'

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
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "features.json"}}) {
        edges {
          node {
            childrenFeaturesJson {
              title
              abstract
              authors
              link
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 1000) {
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
  `)

  const {
    node: { childrenFeaturesJson: articles },
  } = data.allFile.edges[0]

  return (
    <Wrapper id="features">
      <SectionHeader>FEATURES</SectionHeader>
      <StyledRow padding="10">
        <Col md={5}>
          <StyledLink href={articles[0].link} target="_blank">
            <Img fluid={articles[0].image.src.childImageSharp.fluid} />
            <Title>
              <b>
                {articles[0].abstract.split(',')[0]}
              </b>
              ,{articles[0].abstract.split(',')[1]}
            </Title>
            <Author>BY {articles[0].authors}</Author>
          </StyledLink>
        </Col>
        <Col md={7}>
          <StyledLink href={articles[1].link} target="_blank">
            <BackgroundImage
              fluid={articles[1].image.src.childImageSharp.fluid}
              style={{ border: 'none' }}
            >
              <FeatureWrapper>
                <FeatureTitle> {articles[1].abstract} </FeatureTitle>
                <FeatureAuthor> BY {articles[1].author} </FeatureAuthor>
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
