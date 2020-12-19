import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { BigTextImage } from '../../shared'
import { 
  Wrapper, 
  SportsReads, 
  SectionHeader } from './shared'
import { FUTURA_REGULAR } from '../../../utils/font'
import { StyledLink, LCol, RCol } from '../../shared'

const SportsHeader = s.h3`
  ${FUTURA_REGULAR}
  font-size: 1.5em;
  line-height: 1;
  color: #032FB7;
`
const Author = s.p`
  ${FUTURA_REGULAR}
  text-transform: uppercase;
`
const TextWrapper = s.div`
  text-align: center;
  padding: 1rem;
`

const SportsPiece = ({ article }) => (
  <div className="col-md-6">
    <StyledLink href={article.link} target='_blank'>
      <Img fluid={article.image.src.childImageSharp.fluid} className="img-fluid" />
    </StyledLink>
    <StyledLink href={article.link} target='_blank'>
      <TextWrapper>
        <SportsHeader> {article.title} </SportsHeader>
        <Author> BY {article.author} </Author>
      </TextWrapper>
    </StyledLink>
  </div>
)

const Sports = () => (
  <StaticQuery
    query={graphql`
      query {
        SquareArticles: allFile(filter: { relativePath: { eq: "final-sports-2020.json" } }) {
          edges {
            node {
              childrenFinalSports2020Json {
                title
                description
                author
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
        RectangleArticles: allFile(filter: { relativePath: { eq: "final-sports-2020.json" } }) {
          edges {
            node {
              childrenFinalSports2020Json {
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
      const { SquareArticles, RectangleArticles } = data
      const { node: { childrenFinalSports2020Json: articles } } = SquareArticles.edges[0]
      const { node: { childrenFinalSports2020Json: rectArticles } } = RectangleArticles.edges[0]
      // const {
      //   node: { childrenNewsWb2020Json: articles },
      // } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div className="row main" id="sports">
            <div className='col-md-12'>
              <SectionHeader>SPORTS</SectionHeader>
              <Row>
                <LCol md={6}>
                  <BigTextImage article = {articles[0]} />
                </LCol>
                <RCol md={6}>
                  <SportsReads articles = {articles.slice(1, 3)} />
                </RCol>
              </Row>
            </div>
            <Row style={{ marginTop: '2rem' }}>
              <SportsPiece article={rectArticles[3]} style={{paddingLeft:0}}/>
              <SportsPiece article={rectArticles[4]} style={{paddingRight:0}}/>
            </Row>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Sports
