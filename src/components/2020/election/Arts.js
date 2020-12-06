import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { SectionHeader, Title, Author, StyledRow, Wrapper } from './shared'
import { FUTURA_REGULAR } from '../../../utils/font'
import { StyledLink } from '../../shared'

const LeftTitle = s.div`
  color: white;
  padding: 2rem 8rem 15rem 1.5rem;
`

const EditorTitle = s.h1`
  ${FUTURA_REGULAR}
  color: white;
  font-size: 110%;
`

const Arts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "arts.json" } }) {
        edges {
          node {
            childrenArtsJson {
              title
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
    node: { childrenArtsJson: articles },
  } = data.allFile.edges[0]

  return (
    <Wrapper id="art">
      <SectionHeader>ARTS</SectionHeader>
      <StyledRow padding="10">
        <Col md={6} style={{ marginBottom: '1rem' }}>
          <StyledLink href={articles[0].link} target="_blank">
            <BackgroundImage
              fluid={articles[0].image.src.childImageSharp.fluid}
            >
              <LeftTitle>
                <EditorTitle style={{ paddingTop: '1rem' }}>
                  {' '}
                  <b>PHOTO ESSAY</b>{' '}
                </EditorTitle>
                <Title left larger style={{ color: 'white' }}>
                  {' '}
                  {articles[0].title}{' '}
                </Title>
              </LeftTitle>
            </BackgroundImage>
          </StyledLink>
        </Col>
        <Col md={6}>
          <StyledLink href={articles[1].link} target="_blank">
            <Img fluid={articles[1].image.src.childImageSharp.fluid} />
            <Title center larger>
              {' '}
              {articles[1].title}{' '}
            </Title>
            <Author center>BY {articles[1].authors}</Author>
          </StyledLink>
        </Col>
      </StyledRow>
    </Wrapper>
  )
}

export default Arts
