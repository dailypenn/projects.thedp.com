import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2022/nec-spring/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "nec22s_ua.json" } }) {
          nodes {
            childNecJson {
              Undergraduate_Assembly_President {
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
              Undergraduate_Assembly_VP {
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
              College_of_Arts___Sciences_Representative {
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
              Wharton_Representative {
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
              SEAS_Representative {
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
              Nursing_Representative {
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
