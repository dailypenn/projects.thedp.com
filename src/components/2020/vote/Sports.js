import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleDescription, 
  ArticleAuthor, 
  StyledLink } from './shared'
import { StaticQuery, graphql } from 'gatsby'



const Card = ({article}) => (
  <div className = "row">
    <div className="col-md-5">
      <StyledLink href={article.link}>
        <Img fluid={article.img.src.childImageSharp.fluid} className="border border-dark"/>
      </StyledLink>
    </div>
    <div className="col-md-7">
      <StyledLink href={article.link}>
        <ArticleHeader>{article.title}</ArticleHeader>
        <ArticleDescription>{article.description}</ArticleDescription>
        <ArticleAuthor>BY {article.author}</ArticleAuthor>
      </StyledLink>
    </div>
  </div>
)

const Sports = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_sports.json"}}) {
          edges {
            node {
              childrenVote2020SportsJson{
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
      const { node: { childrenVote2020SportsJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="sports">
            <WordWithLine word="SPORTS" lineColor="#7BA3D3"/>
            <div className = "row">
              <div className="col-md-6">
                <Card article = {articles[0]}  />
              </div>
              <div className="col-md-6">
                <Card article = {articles[1]}  />
              </div>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Sports