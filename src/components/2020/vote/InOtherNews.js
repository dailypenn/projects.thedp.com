import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'react-bootstrap/Carousel'

import { Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleDescription, 
  ArticleAuthor, 
  StyledLink,
  RedSectionHeader } from './shared'
import { StaticQuery, graphql } from 'gatsby'
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
      const { node: { childrenVote2020InOtherNewsJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="inOtherNews">
            <WordWithLine word="IN OTHER NEWS" lineColor="#7BA3D3"/>
            <div className = "row">
              <div className="col-md-4">
                <StyledLink href={articles[0].link}>
                  <Img fluid={articles[0].img.src.childImageSharp.fluid} className="border border-dark" />
                </StyledLink>
              </div>
              <div className="col-md-4">
                <RedSectionHeader>Feature</RedSectionHeader>
                <StyledLink href={articles[0].link}>
                  <ArticleHeader style={{fontSize: '2.5rem'}}>{articles[0].title}</ArticleHeader>
                </StyledLink>
                <img src={DividerLine} style={{width:'4em', margin:'1em 0em'}}/>
                <StyledLink href={articles[0].link}>
                  <ArticleDescription>{articles[0].description}</ArticleDescription>
                  <ArticleAuthor>BY {articles[0].author}</ArticleAuthor>
                </StyledLink>
              </div>
              <div className="col-md-4" style={{backgroundColor:'gray'}}>
                ads
              </div>
            </div>
            <div className = "row" style={{margin:'1rem'}}>
              <div className = "col-md-12">
              <Carousel>
                {articles.slice(1,).map(article => (
                  <Carousel.Item interval={1000}>
                    <Img fluid={article.img.src.childImageSharp.fluid}/>
                    <Carousel.Caption style ={{backgroundColor: 'rgb(128, 128, 128, 0.5)'}}>
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