import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import s from "styled-components"

import { Title, Description, ByLine, Tag, StyledAnchor } from "./Typograph"

const Wrapper = s.div`
  .main {
    margin: 2rem 5rem 0 5rem;

    @media (max-width: 768px) {
      margin: 2rem 1rem 0 1rem;
    }
  }
`

const Video = s.iframe`
  height: 350px;

  @media (max-width: 768px) {
    height: 200px;
  }
`

const News = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "news_wb_2020.json" } }) {
          edges {
            node {
              childrenNewsWb2020Json {
                tag
                title
                description
                byline
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
      const {
        node: { childrenNewsWb2020Json: articles },
      } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div className="row main" id="news">
            <div
              className="col-md-7 mb-5"
              style={{ borderRight: "1px solid #D8D2D2" }}
            >
              <StyledAnchor href={articles[0].link} target="_blank">
                <div
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #D8D2D2",
                    marginBottom: "2rem",
                    paddingBottom: "2rem",
                  }}
                >
                  <Img fluid={articles[0].image.src.childImageSharp.fluid} />
                  <Tag> {articles[0].tag.toUpperCase()} </Tag>
                  <Title> {articles[0].title} </Title>
                  <Description> {articles[0].description} </Description>
                  <ByLine> {articles[0].byline.toUpperCase()} </ByLine>
                </div>
              </StyledAnchor>
              <div style={{ textAlign: "center" }}>
                <Video
                  width="100%"
                  src="https://www.youtube.com/embed/qxklB93jWhs"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <Tag> VIDEO </Tag>
                <StyledAnchor
                  href="https://youtu.be/qxklB93jWhs"
                  target="_blank"
                >
                  <Title>
                    {" "}
                    Students discuss the challenges of a virtual fall for each
                    class year{" "}
                  </Title>
                </StyledAnchor>
                <Description>
                  {" "}
                  A Penn first year, sophomore, junior, and senior discuss how
                  COVID-19 will affect their college experiences this fall.{" "}
                </Description>
                <ByLine> BY SAGE LEVINE </ByLine>
              </div>
            </div>

            <div className="col">
              {articles.slice(1).map((article, idx) => (
                <StyledAnchor href={article.link} target="_blank">
                  <div
                    className="row"
                    style={{
                      borderBottom:
                        idx + 1 !== articles.length - 1
                          ? "1px solid #D8D2D2"
                          : "",
                      marginBottom: "2rem",
                      paddingBottom: "2rem",
                    }}
                  >
                    <div className="col-md mb-3">
                      <Tag noMarginTop> {article.tag.toUpperCase()} </Tag>
                      <Title noMarginTop> {article.title} </Title>
                      <ByLine> {article.byline.toUpperCase()} </ByLine>
                    </div>
                    <div className="col-md-5">
                      <Img fluid={article.image.src.childImageSharp.fluid} />
                    </div>
                  </div>
                </StyledAnchor>
              ))}
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default News
