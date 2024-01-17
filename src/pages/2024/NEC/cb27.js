import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../components/2024/nec-fall/Section'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "nec23f_cb_27.json" } }) {
          nodes {
            childNecJson {
              President {
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
              }
              VP_External{
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
              VP_Internal {
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
              VP_Finance {
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
              }
              Nursing_Chair {
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
