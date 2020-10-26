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

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

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
    `}
    render={data => {
      const { node: { childrenVote2020InOtherNewsJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="inOtherNews">
            <WordWithLine word="IN OTHER NEWS" lineColor="#7BA3D3"/>
            <div className="row">
              <div className="col-md-5">
                <StyledAnchor href={articles[0].link}>
                  <Img fluid={articles[0].img.src.childImageSharp.fluid} />
                </StyledAnchor>
              </div>
              <div className="col-md-4" style={{ padding: '2rem 2rem' }}>
                <RedSectionHeader>Feature</RedSectionHeader>
                <StyledAnchor href={articles[0].link}>
                  <ArticleHeader style={{ fontSize: '200%' }}>{articles[0].title}</ArticleHeader>
                </StyledAnchor>
                <img src={DividerLine} style={{ width:'4em', margin:'1em 0em' }} />
                <StyledAnchor href={articles[0].link}>
                  <ArticleDescription style={{ marginTop: '1rem' }}>
                    {articles[0].description}
                  </ArticleDescription>
                  <ArticleAuthor>BY {articles[0].author}</ArticleAuthor>
                </StyledAnchor>
              </div>
              <div className="col-md" style={{backgroundColor:'gray'}}>
                ads
              </div>
            </div>

            <div className="row" style={{ marginTop: '3rem' }}>
              <div className="col-md-12">
              <Carousel>
                {articles.slice(1,).map(article => (
                  <Carousel.Item interval={3000}>
                    <Img fluid={article.img.src.childImageSharp.fluid} style={{ height: '300px' }} />
                    <Carousel.Caption style ={{ backgroundColor: '#000000' }}>
                      <ArticleHeader>{article.title}</ArticleHeader>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
              </div>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default InOtherNews