import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2020/NEC/Section'


const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {relativePath: {eq: "cb22_2020.json"}}) {
          nodes {
            childNecJson {
              President {
                campaign_website
                facebook_url
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
                photo
                youtube_video_url
              }
              Executive_VP {
                facebook_url
                
                instagram_handle
                name
                introduction
                platform_points
                youtube_video_url
              }
              VP_External {
                facebook_url
              
                instagram_handle
                introduction
                name
                platform_points
                youtube_video_url
              }
              VP_Internal {
                campaign_website
                facebook_url
                instagram_handle
                introduction
                
                name
                youtube_video_url
                platform_points
              }
              VP_Finance {
                facebook_url
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
                introduction
                instagram_handle
                name
                platform_points
                statement
                youtube_video_url
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
              }
              Engineering_Chair {
                facebook_url
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
                statement
              }
              Nursing_Chair {
                facebook_url
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
                statement
                youtube_video_url
              }
              Wharton_Chair {
                campaign_website
                facebook_url
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
                instagram_handle
                name
                platform_points
                youtube_video_url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section data={data.allFile.nodes[0].childNecJson} />
    )}
  />
)

export default Index