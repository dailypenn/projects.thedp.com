import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2022/nec/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "nec22f_ua.json" } }) {
          nodes {
            childNecJson {
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
    render={data => <Section data={data.allFile.nodes[0].childNecJson} />}
  />
)

export default Index
