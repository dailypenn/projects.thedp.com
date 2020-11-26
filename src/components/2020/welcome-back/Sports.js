import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import s from 'styled-components'

import { Title, Description, ByLine, StyledAnchor } from './Typograph'

const Wrapper = s.div`
  .main {
    margin: 3rem 5rem;

    @media (max-width: 768px) {
      margin: 3rem 1rem;
    }
  }
`

const Sports = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "sports_wb_2020.json" } }) {
          edges {
            node {
              childrenSportsWb2020Json {
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
        node: { childrenSportsWb2020Json: articles },
      } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div className="row main" id="sports">
            {articles.slice(0, 2).map(article => (
              <div
                className="col-md-4 mb-4"
                style={{ borderRight: '1px solid #D8D2D2' }}
              >
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
                  <div
                    className="row"
                    style={{
                      borderBottom: idx === 0 ? '1px solid #D8D2D2' : '',
                      marginBottom: '2rem',
                      paddingBottom: '2rem',
                    }}
                  >
                    <div className="col-md mb-3">
                      <Title noMarginTop> {article.title} </Title>
                      <ByLine> {article.byline.toUpperCase()} </ByLine>
                    </div>
                    <div className="col-md-7">
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

export default Sports
