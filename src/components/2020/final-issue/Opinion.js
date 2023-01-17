import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { StyledLink } from '../../shared'
import { Wrapper, GreenSectionHeader, SectionHeader } from './shared'
import { FUTURA_REGULAR, FUTURA_BOLD } from '../../../utils/font'

const ArticleHeader = s.h3`
  ${FUTURA_BOLD}
  font-size: 2.5em;
  color: #032FB7;
  @media (max-width: 1024px) {
    font-size: 1.5em;
  }
`
const ArticleAuthor = s.p`
  ${FUTURA_REGULAR}
  text-transform: uppercase;
  color: #032FB7;
`
const ArticleDescription = s.p`
  ${FUTURA_REGULAR}
  font-size:1em;
  line-height:1em;
  color: #032FB7;
`

const Editorial = ({ article }) => (
  <Row style={{ width: '100%' }}>
    <Col sm={12} md={8}>
      <StyledLink href={article.link} target="_blank">
        <div style={{ display: 'block' }}>
          <Img
            fluid={article.image.src.childImageSharp.fluid}
            style={{ margin: '0 auto' }}
          />
        </div>
      </StyledLink>
    </Col>
    <Col sm={12} md={4}>
      <StyledLink href={article.link} target="_blank">
        <GreenSectionHeader> EDITORIAL </GreenSectionHeader>
        <ArticleHeader> {article.title} </ArticleHeader>
        <ArticleDescription> {article.description} </ArticleDescription>
        <ArticleAuthor> BY {article.author} </ArticleAuthor>
      </StyledLink>
    </Col>
  </Row>
)

const OpinionHeader = s.h3`
  ${FUTURA_REGULAR}
  font-size: 2.3em;
  color: #639E7D;
  @media screen and (min-width: 1920px) {
    font-size: 4em;
  }
`

const OpinionAuthor = s.p`
  ${FUTURA_REGULAR}
  text-transform: uppercase;
`

const OpinionDescription = s.p`
  ${FUTURA_REGULAR}
  font-size: 1em;
`

const TextWrapper = s.div`
  text-align: center;
  padding: 1rem;
`

const OpinionPieces = ({ article }) => (
  <Row style={{ marginTop: '3rem', width: '100%' }}>
    <Col sm={12} md={6} lg={6}>
      <StyledLink href={article.link} target="_blank">
        <TextWrapper>
          <OpinionHeader> {article.title} </OpinionHeader>
          <OpinionDescription> {article.description} </OpinionDescription>
          <OpinionAuthor> BY {article.author} </OpinionAuthor>
        </TextWrapper>
      </StyledLink>
    </Col>
    <Col sm={12} md={6} lg={6}>
      <StyledLink href={article.link} target="_blank">
        <Img fluid={article.image.src.childImageSharp.fluid} />
      </StyledLink>
    </Col>
  </Row>
)

const Opinion = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "final-opinion-2020.json" } }) {
          edges {
            node {
              childrenFinalOpinion2020Json {
                title
                description
                author
                link
                image {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 1000, maxHeight: 600) {
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
    `}
    render={data => {
      const {
        node: { childrenFinalOpinion2020Json: articles },
      } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div className="row main" id="opinion">
            <div className="col-md-12">
              <SectionHeader>OPINION</SectionHeader>
              <Row>
                <Editorial article={articles[0]} />
                {articles.slice(1).map(article => (
                  <OpinionPieces article={article} />
                ))}
              </Row>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Opinion
