import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

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
            <div>In other news section here</div>
            <div>{articles[0].title}</div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default InOtherNews