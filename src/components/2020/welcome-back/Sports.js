import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Title, Description, ByLine, StyledAnchor } from './Typograph'

const Sports = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: { name: { eq: "sports" }, sourceInstanceName: { eq: "json" } }) {
          edges {
            node {
              childrenSportsJson {
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
      const { node: { childrenSportsJson: articles } } = data.allFile.edges[0]

      return (
        <div className="row" style={{ margin: '2rem 5rem' }} id="sports">
          {articles.slice(0,2).map(article => (
            <div className="col-4" style={{ borderRight: '1px solid #D8D2D2' }}>
              <StyledAnchor href={article.link} target="_blank">
                <Img fluid={article.image.src.childImageSharp.fluid} />
                <Title> {article.title} </Title>
                <Description> {article.description} </Description>
                <ByLine> {article.byline.toUpperCase()} </ByLine>
              </StyledAnchor>
            </div>
          ))}
      
          <div className="col">
            {articles.slice(2).map((article, idx) => (
              <StyledAnchor href={article.link} target="_blank">
                <div className="row"
                  style={{ borderBottom: idx === 0 ? '1px solid #D8D2D2' : '', marginBottom: '2rem', paddingBottom: '2rem' }}>
                  <div className="col mb-3">
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

export default Sports