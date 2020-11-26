import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'
import s from 'styled-components'

import {
  SectionHeader,
  Title,
  Author,
  StyledRow,
  Wrapper,
  ColWithMargin,
} from './shared'
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
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "watching.json"}}) {
        edges {
          node {
            childrenWatchingJson {
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
    node: { childrenWatchingJson: articles },
  } = data.allFile.edges[0]

  return (
    <>
      <div>
        <StyledLink href={articles[0].link} target="_blank">
          <Img fluid={articles[0].image.src.childImageSharp.fluid} />
          <Title>{articles[0].title}</Title>
          <Author>BY {articles[0].authors}</Author>
        </StyledLink>
      </div>
      <Row style={{ margin: '2rem 0' }}>
        <ColoredColBox sm={12} md={5} borderColor="#019459">
          <StyledLink href={articles[1].link} target="_blank">
            <Title> {articles[1].title} </Title>
            <Author>BY {articles[1].authors}</Author>
          </StyledLink>
        </ColoredColBox>
        <ColoredColBox
          sm={12}
          md={{ span: 5, offset: 2 }}
          borderColor="#1500FF"
        >
          <StyledLink href={articles[2].link} target="_blank">
            <Title> {articles[2].title} </Title>
            <Author>BY {articles[2].authors}</Author>
          </StyledLink>
        </ColoredColBox>
      </Row>
      <div>
        <StyledLink href={articles[3].link} target="_blank">
          <Img fluid={articles[3].image.src.childImageSharp.fluid} />
          <Title> {articles[3].title} </Title>
          <Author>BY {articles[3].authors}</Author>
        </StyledLink>
      </div>
    </>
  )
}

const WatchingListening = () => (
  <Wrapper id="watching-listening">
    <SectionHeader>WATCHING &amp; LISTENING</SectionHeader>
    <StyledRow padding="9">
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
