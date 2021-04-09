import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2021/NEC/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "cb22_2021.json" } }) {
          nodes {
            childNecJson {
              VP_Internal {
                facebook_url
                image_name
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
                instagram_handle
                introduction
                name
                platform_points
                youtube_video_url
              }
              College_Chair {
                facebook_url
                image_name
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
                instagram_handle
                introduction
                name
                platform_points
                youtube_video_url
              }
              Nursing_Chair {
                facebook_url
                image_name
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
                instagram_handle
                introduction
                name
                platform_points
                youtube_video_url
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
