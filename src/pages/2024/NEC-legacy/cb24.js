import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2024/nec/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "nec23s_cb_24.json" } }) {
          nodes {
            childNecJson {
              Executive_VP {
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
                facebook_url
                instagram_handle
                campaign_website
              }
              VP_External {
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
                facebook_url
                instagram_handle
                campaign_website
              }
              College_Chair {
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
                facebook_url
                instagram_handle
                campaign_website
              }
              Wharton_Chair {
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
                facebook_url
                instagram_handle
                campaign_website
              }
              Engineering_Chair {
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
                facebook_url
                instagram_handle
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
