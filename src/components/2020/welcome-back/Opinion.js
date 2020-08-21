import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import Img from 'gatsby-image'

import { KARLA_BOLD, KARLA_REGULAR } from '../../../utils/font'
import { Title, Description, StyledAnchor } from './Typograph'

const Tag = s.div`
  font-size: 80%;
  margin-top: ${({ noMarginTop }) => noMarginTop ? '0' : '1.5rem'};
  .tag {
    color: #D0C730;
    ${KARLA_BOLD}
  }

  .author {
    color: #B4B0B0;
    ${KARLA_REGULAR}
  }
`


const Opinion = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: { name: { eq: "opinion" }, sourceInstanceName: { eq: "json" } }) {
          edges {
            node {
              childrenOpinionJson {
                tag
                author
                title
                description
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
      const { node: { childrenOpinionJson: articles } } = data.allFile.edges[0]

      return (
        <div className="row" style={{ margin: '2rem 5rem' }} id="opinion">
          {articles.slice(0,2).map(article => (
              <div className="col-4" style={{ borderRight: '1px solid #D8D2D2' }}>
                <StyledAnchor href={article.link} target="_blank">
                  <Img fluid={article.image.src.childImageSharp.fluid} />
                  <Tag>
                    <text className="tag"> {article.tag.toUpperCase()} </text>
                    <text className="author"> | {article.author} </text>
                  </Tag>
                  <Title> {article.title} </Title>
                  <Description> {article.description} </Description>
                </StyledAnchor>
              </div>
          ))}
          
          <div className="col">
            {articles.slice(2).map((article, idx) => (
              <StyledAnchor href={article.link} target="_blank">
                <div className="row"
                  style={{ borderBottom: idx === 0 ? '1px solid #D8D2D2' : '', marginBottom: '2rem', paddingBottom: '2rem' }}>
                  <div className="col mb-3">
                    <Tag noMarginTop>
                      <text className="tag"> {article.tag.toUpperCase()} </text>
                      <br/>
                      <text className="author"> {article.author} </text>
                    </Tag>
                    <Title noMarginTop> {article.title} </Title>
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

export default Opinion