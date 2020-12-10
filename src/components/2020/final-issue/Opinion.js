import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { StyledLink } from '../../shared'
import { Wrapper, GreenSectionHeader, SectionHeader } from './shared'
import {
  FUTURA_REGULAR,
  FUTURA_BOLD,
} from '../../../utils/font'

const ArticleHeader = s.h3`
  ${FUTURA_BOLD}
  font-size: 2.5em;
  line-height: 1;
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
  <div className="row" style={{marginTop:'2rem'}}>
    <div className="col-md-8 pl-0">
      <StyledLink href={article.link} target='_blank'>
        <Img fluid={article.image.src.childImageSharp.fluid} />
      </StyledLink>
    </div>
    <div className="col-md-4 pr-0">
      <StyledLink href={article.link} target='_blank'>
        <GreenSectionHeader> EDITORIAL </GreenSectionHeader>
        <ArticleHeader> {article.title} </ArticleHeader>
        <ArticleDescription> {article.description} </ArticleDescription>
        <ArticleAuthor> {article.byline} </ArticleAuthor>
      </StyledLink>
    </div>
  </div>
)

const OpinionHeader = s.h3`
  ${FUTURA_REGULAR}
  font-size: 2em;
  line-height: 1;
  color: #639E7D;
  @media (max-width: 1024px) {
    font-size: 1.5em;
  }
`
const OpinionAuthor = s.p`
  ${FUTURA_REGULAR}
  text-transform: uppercase;

`
const OpinionDescription = s.p`
  ${FUTURA_REGULAR}
  font-size:1em;
  line-height:1em;

`
const TextWrapper = s.div`
  text-align: center;
  padding: 1rem;
`

const OpinionPieces = ({ article }) => (
  <Row style={{marginTop:'2rem'}}>
    <Col sm={12} md={6} lg={6}>
      <StyledLink href={article.link} target='_blank'>
        <TextWrapper>
          <OpinionHeader> {article.title} </OpinionHeader>
          <OpinionDescription> {article.description} </OpinionDescription>
          <OpinionAuthor> {article.byline} </OpinionAuthor>
        </TextWrapper>
      </StyledLink>
    </Col>
    <Col sm={12} md={6} lg={6}>
      <StyledLink href={article.link} target='_blank'>
        <Img fluid={article.image.src.childImageSharp.fluid} />
      </StyledLink>
    </Col>
  </Row>
)

const Opinion = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "news_wb_2020.json" } }) {
          edges {
            node {
              childrenNewsWb2020Json {
                tag
                title
                description
                byline
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
        node: { childrenNewsWb2020Json: articles },
      } = data.allFile.edges[0]

      return (
        <Wrapper>
          <SectionHeader> OPINION </SectionHeader>
          <div className="row main" id="opinion">
            <Editorial article = {articles[1]} />
            {articles.slice(1,4).map(article => <OpinionPieces article = {article} />)}
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Opinion
