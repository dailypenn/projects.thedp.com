import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import { Title, Description, ByLine, Tag, StyledAnchor } from './Typograph'

const Wrapper = s.div`
  margin: 2rem 5rem 0 5rem;
`

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
      const { node: { childrenNewsJson: articles } } = data.allFile.edges[0]

      return (
        <div className="row" style={{ margin: '2rem 5rem 0 5rem' }} id="news">
          <div className="col-7" style={{ borderRight: '1px solid #D8D2D2' }}>
            {articles.slice(0,2).map((article, idx) => (
              <StyledAnchor href={article.link} target="_blank">
                <div style={{ textAlign: 'center', borderBottom: idx === 0 ? '1px solid #D8D2D2' : '', marginBottom: '2rem', paddingBottom: '2rem' }}>
                  <Img fluid={article.image.src.childImageSharp.fluid} />
                  <Tag> {article.tag.toUpperCase()} </Tag>
                  <Title> {article.title} </Title>
                  <Description> {article.description} </Description>
                  <ByLine> {article.byline.toUpperCase()} </ByLine>
                </div>
              </StyledAnchor>
            ))}
          </div>
          <div className="col">
            {articles.slice(2).map((article, idx) => (
              <StyledAnchor href={article.link} target="_blank">
                <div className="row"
                  style={{ borderBottom: idx+2 !== articles.length-1 ? '1px solid #D8D2D2' : '', marginBottom: '2rem', paddingBottom: '2rem' }}>
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