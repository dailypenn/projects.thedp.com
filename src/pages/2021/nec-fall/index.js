import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2021/nec-fall/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "ua.json" } }) {
          nodes {
            childNecFallJson {
              New_Student_Representative {
                image {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 400, maxHeight: 400) {
                        ...GatsbyImageSharpFluid
                        src
                      }
                    }
                  }
                }
                introduction
                name
                platform_points
              }
            }
          }
        }
      }
    `}
    render={data => <Section data={data.allFile.nodes[0].childNecFallJson} />}
  />
)

export default Index
