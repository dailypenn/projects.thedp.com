import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2023/nec/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "nec23s_ua.json" } }) {
          nodes {
            childNecJson {
              Undergraduate_Assembly_President {
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
              Undergraduate_Assembly_VP {
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
              College_of_Arts_and_Sciences_Representative {
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
              Wharton_Representative {
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
              SEAS_Representative {
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
