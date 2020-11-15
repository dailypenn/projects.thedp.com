import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { SectionHeader, Title, Author, StyledRow, Wrapper } from './shared'
import { FUTURA_REGULAR } from '../../../utils/font'
import { StyledLink } from '../../shared'
import Articles from '../../../content/json/2020/34st-election/arts.json'

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
          <StyledLink href={Articles[0].link} target="_blank">
            <BackgroundImage fluid={billStrobel.childImageSharp.fluid}>
              <LeftTitle>
                <EditorTitle> <b>PHOTO ESSAY</b> </EditorTitle>
                <Title left larger style={{ color: 'white' }}> {Articles[0].title} </Title>
              </LeftTitle>
            </BackgroundImage>
          </StyledLink>
        </Col>
        <Col md={6}>
          <StyledLink href={Articles[1].link} target="_blank">
            <Img fluid={vote.childImageSharp.fluid} />
            <Title center larger> {Articles[1].title} </Title>
            <Author center>BY {Articles[1].authors}</Author>
          </StyledLink>
        </Col>
      </StyledRow>
    </Wrapper>
  )
}

export default Arts
