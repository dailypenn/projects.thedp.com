import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

const ExplainItToMe = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_ExplainItToMe.json"}}) {
          edges {
            node {
              childrenVote2020ExplainItToMeJson{
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
      const { node: { childrenVote2020ExplainItToMeJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="explainers">
            <WordWithLine word="EXPLAIN IT TO ME" lineColor="#F05237"/>
            <div>Explain it to me section here</div>
            <Img fluid={articles[0].img.src.childImageSharp.fluid} />
            <div>{articles[0].title}</div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default ExplainItToMe