import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { Title, Author } from './shared'
import { StyledLink } from '../../shared'
import { FUTURA_BOLD } from '../../../utils/font'

const Background = s.div`
  background-color: #F8F8F8;
`

const ComicHeader = s(Title)`
  font-size: 2.5em;
  padding: 0 2rem;
`

const StarWrapper = s.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`

const StarImg = s.img`
  height: 25px;
`

const StarBar = () => (
  <StarWrapper>
    <StarImg src="/img/star-bg.png" />
  </StarWrapper>
)

const ComicSubtitle = s.h1`
  ${FUTURA_BOLD}
  color: #019459;
  font-size: .75em;
  text-align: center;
  margin-top: 1vw;
  margin-bottom: -1vw;
`

const ComicContent = s.div`
  margin: 0 2rem 4rem 2rem; 
`

const ColMarginBottom = s(Col)`
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const MustReadArticle = ({ article }) => (
  <StyledLink href={article.link} target="_blank">
    <div className="row" style={{ marginBottom: '2rem' }}>
      <ColMarginBottom md={6}>
        <Img fluid={article.image.src.childImageSharp.fluid} />
      </ColMarginBottom>
      <Col md={6}>
        <Title style={{ fontSize: '90%', marginTop: 0 }}>
          {' '}
          {article.title}{' '}
        </Title>
        <Author style={{ fontSize: '80%' }}> BY {article.author} </Author>
      </Col>
    </div>
  </StyledLink>
)

const ComicRelief = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "utb_34e_2020.json" } }) {
        edges {
          node {
            childrenUtb34E2020Json {
              title
              link
              author
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
    node: { childrenUtb34E2020Json: articles },
  } = data.allFile.edges[0]

  return (
    <Background>
      <ComicContent>
        <StarBar />
        <ComicHeader>For Some Comic Relief</ComicHeader>
        <ComicSubtitle>BROUGHT TO YOU BY UNDER THE BUTTON</ComicSubtitle>
      </ComicContent>
      <div style={{ padding: '0 1rem' }}>
        {articles.map(article => (
          <MustReadArticle article={article} />
        ))}
      </div>
      <StarBar />
    </Background>
  )
}

export default ComicRelief
