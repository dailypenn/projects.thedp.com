import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from './Section'

const Opinion = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: { name: { eq: "opinion" }, sourceInstanceName: { eq: "json" } }) {
          edges {
            node {
              childrenOpinionJson {
                title
                description
                byline
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

      return (<Section articles={articles} />)
    }}
  />
)

export default Opinion