import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Section from "../../../../components/2019/NEC/Section"

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "ua_2019.json" } }) {
          nodes {
            childNecJson {
              UA_President {
                name
                statement
                endorsements
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
              UA_Vice_President {
                name
                statement
                endorsements
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
              SAS_Representative {
                name
                statement
                endorsements
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
              Wharton_Representative {
                name
                statement
                endorsements
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
              Nursing_Representative {
                name
                statement
                endorsements
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
            }
          }
        }
      }
    `}
    render={data => <Section data={data.allFile.nodes[0].childNecJson} />}
  />
)

export default Index
