import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from './Section'

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

      return (<Section articles={articles} />)
    }}
  />
)

export default Sports