import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

const InMyOpinion = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "Opinion.json"}}) {
          edges {
            node {
              childrenOpinionJson{
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
      const { node: { childrenOpinionJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="opinion">
            <WordWithLine word="IN MY OPINION" lineColor="#F05237"/>
            <div>In my opinion section here</div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default InMyOpinion