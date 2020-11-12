import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import {
  Wrapper,
  WordWithLine,
  ArticleHeader,
  ArticleDescription,
  ArticleAuthor,
  StyledAnchor,
} from "./shared"
import { Ads } from '../../shared'

const Card = ({ article }) => (
  <div className="row">
    <div className="col-md-7">
      <StyledAnchor href={article.link}>
        <Img fluid={article.img.src.childImageSharp.fluid} />
      </StyledAnchor>
    </div>
    <div className="col-md-5">
      <StyledAnchor href={article.link} style={{ padding: "1rem" }}>
        <ArticleHeader>{article.title}</ArticleHeader>
        <ArticleDescription>{article.description}</ArticleDescription>
        <ArticleAuthor>BY {article.author}</ArticleAuthor>
      </StyledAnchor>
    </div>
  </div>
)

const Sports = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "vote_2020_sports.json" } }) {
          edges {
            node {
              childrenVote2020SportsJson {
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
      const {
        node: { childrenVote2020SportsJson: articles },
      } = data.allFile.edges[0]

      return (
        <>
          <Wrapper style={{ marginBottom: "1rem" }}>
            <div id="sports">
              <WordWithLine word="SPORTS" lineColor="#7BA3D3" />
              <div className="row">
                <div className="col-md-6">
                  <Card article={articles[0]} />
                </div>
                <div className="col-md-6">
                  <Card article={articles[1]} />
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

export default Sports
