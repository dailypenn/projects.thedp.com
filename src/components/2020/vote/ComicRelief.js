import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

const ComicRelief = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "Utb.json"}}) {
          edges {
            node {
              childrenUtbJson{
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
      const { node: { childrenUtbJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="utb">
            <WordWithLine word="COMIC RELIEF" lineColor="#F05237"/>
            <div>Comic relief section here (Change this section up: box + subheader image)</div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default ComicRelief