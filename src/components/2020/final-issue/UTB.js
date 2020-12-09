import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { StyledLink } from '../../shared'
import { FUTURA_REGULAR } from '../../../utils/font'

const Background = s.div`
  background-color: #032FB7;
  padding: 1rem 3rem;
`

const ComicHeader = s.h1`
  ${FUTURA_REGULAR}
  font-size: 24px;
  color: #FFEDDC;
  text-align: center;
  padding: 0 1rem;
`

const HeaderArea = s(Row)`
  padding-top: 2rem;
  justify-content: center;
`

const ComicSubtitle = s.h1`
  ${FUTURA_REGULAR}
  color: #FFEDDC;
  font-size: 20px;
  text-align: center;
  padding-top: 3px;
`

const Circle = s.div`
  background: #FFFFFF;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-top: 5px;
`

const MustReadArticle = ({ article }) => (
  <Col>
    <StyledLink href={article.link} target="_blank">
      <Img fluid={article.image.src.childImageSharp.fluid} />
      <ComicHeader style={{ fontSize: '90%', marginTop: '10px' }}>
        {' '}
        {article.title}{' '}
      </ComicHeader>
      <ComicSubtitle style={{ fontSize: '80%' }}> BY {article.author} </ComicSubtitle>
    </StyledLink>
  </Col>

)

const UTB = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "final-utb.json"}}) {
        edges {
          node {
            childrenFinalUtbJson {
              title
              link
              author
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 400) {
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
    node: { childrenFinalUtbJson: articles },
  } = data.allFile.edges[0]

  return (
    <Background id="utb">
      <HeaderArea>
        <Circle style={{right: '10px'}}/>
        <ComicHeader style={{fontSize: '2rem'}}>UNDER THE BUTTON</ComicHeader>
        <Circle/>
      </HeaderArea>
      <Row style={{ padding: '2rem 1rem'}}>
        {articles.map(article => (
          <MustReadArticle article={article} />
        ))}
      </Row>
    </Background>
  )
}

export default UTB
