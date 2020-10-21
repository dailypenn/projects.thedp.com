import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

const Multimedia = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "Multimedia.json"}}) {
          edges {
            node {
              childrenMultimediaJson{
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
      const { node: { childrenMultimediaJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="multimedia">
            <WordWithLine word="MULTIMEDIA" lineColor="#F05237"/>
            <div>Multimedia section here</div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Multimedia