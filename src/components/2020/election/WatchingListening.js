import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'
import s from 'styled-components'

import { SectionHeader, Title, Author, StyledRow, Wrapper, ColWithMargin } from './shared'
import { StyledLink } from '../../shared'
import ComicRelief from './ComicRelief'

import StreetArticles from '../../../content/json/2020/34st-election/watching.json'

const ColoredColBox = s(Col)`
  border: 5px solid ${({ borderColor }) => borderColor};
  padding: 1rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const Articles = () => {
  const { borat, music } = useStaticQuery(graphql`
    query {
      borat: file(relativePath: { eq: "borat.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      music: file(relativePath: { eq: "radio.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div>
        <StyledLink href={StreetArticles[0].link} target="_blank">
          <Img fluid={borat.childImageSharp.fluid} />
          <Title>{StreetArticles[0].title}</Title>
          <Author>BY {StreetArticles[0].authors}</Author>
        </StyledLink>
      </div>
      <Row style={{ margin: '2rem 0' }}>
        <ColoredColBox sm={12} md={5} borderColor="#019459">
          <StyledLink href={StreetArticles[1].link} target="_blank">
            <Title> {StreetArticles[1].title} </Title>
            <Author>BY {StreetArticles[1].authors}</Author>
          </StyledLink>
        </ColoredColBox>
        <ColoredColBox
          sm={12}
          md={{ span: 5, offset: 2 }}
          borderColor="#1500FF"
        >
          <StyledLink href={StreetArticles[2].link} target="_blank">
            <Title> {StreetArticles[2].title} </Title>
            <Author>BY {StreetArticles[2].authors}</Author>
          </StyledLink>
        </ColoredColBox>
      </Row>
      <div>
        <StyledLink href={StreetArticles[3].link} target="_blank">
          <Img fluid={music.childImageSharp.fluid} />
          <Title> {StreetArticles[3].title} </Title>
          <Author>BY {StreetArticles[3].authors}</Author>
        </StyledLink>
      </div>
    </>
  )
}

const WatchingListening = () => (
  <Wrapper id="watching-listening">
    <SectionHeader>WATCHING &amp; LISTENING</SectionHeader>
    <StyledRow padding="11">
      <ColWithMargin md={7}>
        <Articles />
      </ColWithMargin>
      <Col md={4}>
        <ComicRelief />
      </Col>
    </StyledRow>
  </Wrapper>
)

export default WatchingListening
