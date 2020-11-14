import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { SectionHeader, Title, Author, StyledRow, Wrapper } from './shared'
import { FUTURA_REGULAR } from '../../../utils/font'

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
  const { billStrobel, vote } = useStaticQuery(graphql`
    query {
      billStrobel: file(relativePath: { eq: "bill-strobel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      vote: file(relativePath: { eq: "vote.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper id="art">
      <SectionHeader>ARTS</SectionHeader>
      <StyledRow padding="10">
        <Col md={6} style={{ marginBottom: '1rem' }}>
          <BackgroundImage fluid={billStrobel.childImageSharp.fluid}>
            <LeftTitle>
              <EditorTitle>
                <b>PHOTO ESSAY</b>
              </EditorTitle>
              <Title left larger style={{ color: 'white' }}>
                Philly Artist Bill Strobel Recreates Lady Justice With Chalk
              </Title>
            </LeftTitle>
          </BackgroundImage>
        </Col>
        <Col md={6}>
          <Img fluid={vote.childImageSharp.fluid} />
          <Title center larger>
            Pre-2020 Election, Protest Art Demands Change
          </Title>
          <Author center>BY ALLISON STILLMAN</Author>
        </Col>
      </StyledRow>
    </Wrapper>
  )
}

export default Arts
