import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { FUTURA_REGULAR, FUTURA_BOLD } from '../../../utils/font'
import { StyledAnchor } from './shared'

const Wrapper = s.div`
  padding: 3rem 0rem 3rem 0rem;
  background-color: black;

  @media (max-width: 768px) {
    padding: 0rem;
  }
`

const Subtitle = s.div`
  color: #F05237;
  text-align: center;
  ${FUTURA_BOLD}
  font-size: 90%;
  margin-top: -1.5rem;
`

const ArticleRow = s.div`
  margin-top: 5rem;
  padding: 0 4rem;
`

const Article = s.div`
  color: #FFEDDC;
  ${FUTURA_REGULAR}
  text-align: center;
`

const Shenanigans = s.p`
  width: 100%;
  text-align: center;
  color: #F05237;
  margin-top: 2rem;
  ${FUTURA_BOLD}
  font-size: 90%;
`

// Adapted from https://www.geeksforgeeks.org/how-to-make-horizontal-line-with-words-in-the-middle-using-css/
const ImageWithLine = s.div`
  padding: 0 6rem;

  h1 {
    display: flex; 
    flex-direction: row; 
  }
  

  h1:before, h1:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid #F05237;
    margin: auto;
  }

  img {
    margin: 0 1rem;
    height: 125px;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 50px;
      margin: 0;
    }

    padding: 0 1rem;
  }
`

const ComicRelief = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_utb.json"}}) {
          edges {
            node {
              childrenVote2020UtbJson{
                title
                author
                link
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 600, maxHeight: 600) {
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
      const { node: { childrenVote2020UtbJson: articles } } = data.allFile.edges[0]
      return (
        <Wrapper>
          <ImageWithLine>
            <h1> <img src="/img/utb-header.png" /> </h1>
          </ImageWithLine>
          <Subtitle>BROUGHT TO YOU BY UNDER THE BUTTON</Subtitle>

          <ArticleRow className="row">
            {articles.map(article => (
              <div className="col-md">
                <StyledAnchor href={article.link}>
                  <Article>
                    <Img fluid={article.img.src.childImageSharp.fluid} />
                    <p style={{ marginTop: '1rem', fontSize: '120%' }}>{article.title}</p>
                    <p style={{ marginTop: '1rem', fontSize: '90%' }}>BY {article.author}</p>
                  </Article>
                </StyledAnchor>
              </div>
            ))}       
          </ArticleRow>

          <Shenanigans>
            PRESS FOR SHENANIGANS
          </Shenanigans>
          <img
            src="/img/shenanigans-button.png"
            className="img-fluid"
            style={{ display: 'block', margin: '0 auto', height: '100px' }}
          />
        </Wrapper>
      )
    }}
  />
)



export default ComicRelief

