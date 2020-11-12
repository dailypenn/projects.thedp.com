import React from "react"
import s from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Wrapper,
  WordWithLine,
  ArticleHeader,
  ArticleDescription,
  ArticleAuthor,
  RedSectionHeader,
  StyledAnchor,
} from "./shared"

import { RADIANT_REGULAR } from "../../../utils/font"

const H2 = s.h2` 
  text-align: center; 
  font-size: 4em;
  ${RADIANT_REGULAR}
  margin-bottom: 4rem;
`

const Editorial = ({ article }) => (
  <StyledAnchor href={article.link} target="_blank">
    <div
      className="row"
      style={{ backgroundColor: "#F5F4F7", padding: "1rem" }}
    >
      <div className="col-md-6">
        <RedSectionHeader> EDITORIAL </RedSectionHeader>
        <ArticleHeader style={{ fontSize: "200%" }}>
          {" "}
          {article.title}{" "}
        </ArticleHeader>
        <ArticleDescription style={{ marginTop: "2rem" }}>
          {" "}
          {article.description}{" "}
        </ArticleDescription>
        <ArticleAuthor style={{ marginTop: "2rem" }}>
          {" "}
          BY {article.author}{" "}
        </ArticleAuthor>
      </div>
      <div className="col-md-6">
        <Img fluid={article.img.src.childImageSharp.fluid} />
      </div>
    </div>
  </StyledAnchor>
)

const ExtraArticle = ({ article }) => (
  <div className="col-md-6 text-center">
    <StyledAnchor href={article.link} target="_blank">
      <Img fluid={article.img.src.childImageSharp.fluid} />
      <ArticleHeader style={{ marginTop: "1.5rem" }}>
        {article.title}
      </ArticleHeader>
      <ArticleAuthor style={{ marginTop: "0.5rem" }}>
        BY {article.author}
      </ArticleAuthor>
    </StyledAnchor>
  </div>
)

const Extra = ({ articles }) => (
  <div>
    <div className="row" style={{ margin: "2rem 0" }}>
      <ExtraArticle article={articles[0]} />
      <ExtraArticle article={articles[1]} />
    </div>
    <div className="row">
      <ExtraArticle article={articles[2]} />
      <ExtraArticle article={articles[3]} />
    </div>
  </div>
)

const MustReadArticle = ({ article }) => (
  <StyledAnchor href={article.link} target="_blank">
    <div className="row" style={{ marginBottom: "3rem" }}>
      <div className="col-md-6">
        <Img fluid={article.img.src.childImageSharp.fluid} />
      </div>
      <div className="col-md-6">
        <ArticleHeader style={{ fontSize: "110%" }}>
          {" "}
          {article.title}{" "}
        </ArticleHeader>
        <ArticleAuthor style={{ fontSize: "80%" }}>
          {" "}
          BY {article.author}{" "}
        </ArticleAuthor>
      </div>
    </div>
  </StyledAnchor>
)

const MustRead = ({ articles }) => (
  <div className="col-md-4">
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div
        className="d-flex justify-content-center"
        style={{ padding: "2rem 0 1rem 0" }}
      >
        <img src="/img/stars.png" style={{ height: "25px" }} />
      </div>
      <H2> MUST READ: </H2>
      <div style={{ padding: "0 1rem" }}>
        {articles.map(article => (
          <MustReadArticle article={article} />
        ))}
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ padding: "2rem 0" }}
      >
        <img src="/img/stars.png" style={{ height: "25px" }} />
      </div>
    </div>
  </div>
)

const ArticlesWrapper = s.div`
  .article-wrapper {
    padding-left: 4rem;

    @media screen and (max-width: 768px) {
      padding-left: 0rem;
    }
  }
`

const InMyOpinion = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "vote_2020_opinion.json" } }) {
          edges {
            node {
              childrenVote2020OpinionJson {
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
        node: { childrenVote2020OpinionJson: articles },
      } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="opinion">
            <WordWithLine word="IN MY OPINION" lineColor="#F05237" />
            <div className="row">
              <MustRead articles={articles.slice(5)} />
              <ArticlesWrapper className="col-md-8">
                <div className="article-wrapper">
                  <Editorial article={articles[0]} />
                  <Extra articles={articles.slice(1, 5)} />
                </div>
              </ArticlesWrapper>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default InMyOpinion
