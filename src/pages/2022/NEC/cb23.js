import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2022/nec-spring/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "nec22s_cb_23.json" } }) {
          nodes {
            childNecJson {
              President {
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
                campaign_website
              }
              Executive_VP {
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
                campaign_website
              }
              VP_Internal {
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
                campaign_website
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
                campaign_website
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
                campaign_website
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
