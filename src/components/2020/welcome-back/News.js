import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { Title, Description, ByLine, Tag, StyledAnchor } from './Typograph'

const News = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: { name: { eq: "news" }, sourceInstanceName: { eq: "json" } }) {
          edges {
            node {
              childrenNewsJson {
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
      const { node: { childrenNewsJson: articles } } = data.allFile.edges[0]

      return (
        <div className="row" style={{ margin: '2rem 5rem 0 5rem' }} id="news">
          <div className="col-7" style={{ borderRight: '1px solid #D8D2D2' }}>
            <StyledAnchor href={articles[0].link} target="_blank">
              <div style={{ textAlign: 'center', borderBottom: '1px solid #D8D2D2', marginBottom: '2rem', paddingBottom: '2rem' }}>
                <Img fluid={articles[0].image.src.childImageSharp.fluid} />
                <Tag> {articles[0].tag.toUpperCase()} </Tag>
                <Title> {articles[0].title} </Title>
                <Description> {articles[0].description} </Description>
                <ByLine> {articles[0].byline.toUpperCase()} </ByLine>
              </div>
            </StyledAnchor>
            <div style={{ textAlign: 'center' }}>
              <iframe width="100%" height="350px" src="https://www.youtube.com/embed/qxklB93jWhs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
              <Tag> VIDEO </Tag>
              <Title> Students discuss the challenges of a virtual fall for each class year </Title>
              <Description> We hear from a Penn first year, sophomore, junior, and senior to compare how COVID-19 will impact their college experiences. </Description>
              <ByLine> BY SAGE LEVINE </ByLine>
            </div>
          </div>

          <div className="col">
            {articles.slice(1).map((article, idx) => (
              <StyledAnchor href={article.link} target="_blank">
                <div className="row"
                  style={{ borderBottom: idx+1 !== articles.length-1 ? '1px solid #D8D2D2' : '', marginBottom: '2rem', paddingBottom: '2rem' }}>
                    <div className="col mb-3">
                      <Tag noMarginTop> {article.tag.toUpperCase()} </Tag>
                      <Title noMarginTop> {article.title} </Title>
                      <ByLine> {article.byline.toUpperCase()} </ByLine>
                    </div>
                    <div className="col-5">
                      <Img fluid={article.image.src.childImageSharp.fluid} />
                    </div>
                </div>
              </StyledAnchor>
            ))}
          </div>
        </div>
      )
    }}
  />
)

export default News