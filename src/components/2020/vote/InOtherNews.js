import React from 'react'
import Img from 'gatsby-image'
import Carousel from 'react-bootstrap/Carousel'
import { StaticQuery, graphql } from 'gatsby'

import {
  Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleDescription, 
  ArticleAuthor, 
  StyledAnchor,
  RedSectionHeader
} from './shared'
import DividerLine from '../../../content/images/2020/vote/divider-line.png'
import Ads from '../../shared/Ads'

const InOtherNews = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_InOtherNews.json"}}) {
          edges {
            node {
              childrenVote2020InOtherNewsJson{
                title
                description
                author
                link
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 2000, maxHeight: 1200) {
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
      const { node: { childrenVote2020InOtherNewsJson: articles } } = data.allFile.edges[0]

      return (
        <>
          <Wrapper>
            <div id="inOtherNews">
              <WordWithLine word="IN OTHER NEWS" lineColor="#7BA3D3"/>
              <div className="row text-center">
                {articles.slice(0,2).map(article => (
                  <div className="col-md-6">
                    <StyledAnchor href={article.link} target="_blank">
                      <Img fluid={article.img.src.childImageSharp.fluid} />
                      <RedSectionHeader style={{ marginTop: '2rem' }}>Feature</RedSectionHeader>
                      <ArticleHeader style={{ fontSize: '200%', lineHeight: 1.1 }}>{article.title}</ArticleHeader>
                      <img src={DividerLine} style={{ width:'4em', margin:'1em 0em' }} />
                      <ArticleDescription style={{ marginTop: '1rem' }}>
                        {article.description}
                      </ArticleDescription>
                      <ArticleAuthor>BY {article.author}</ArticleAuthor>
                    </StyledAnchor>
                  </div>
                ))}
              </div>

              <div className="row" style={{ marginTop: '3rem' }}>
                <div className="col-md-12">
                <Carousel>
                  {articles.slice(2,).map(article => (
                    <Carousel.Item interval={3000}>
                      <Img fluid={{...article.img.src.childImageSharp.fluid, aspectRatio: 7/3}} />
                      <Carousel.Caption style ={{ backgroundColor: '#000000', opacity: 0.57 }}>
                        <StyledAnchor href={article.link} target="_blank">
                          <ArticleHeader style={{ color: 'white' }}>{article.title}</ArticleHeader>
                        </StyledAnchor>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
                </div>
              </div>
            </div>
          </Wrapper>

          <Ads />
        </>
      )
    }}
  />
)

export default InOtherNews