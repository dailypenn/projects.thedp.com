import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../../../components/2019/NEC/Section'


const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {relativePath: {eq: "cb21_2019.json"}}) {
          nodes {
            childNecJson {
              President {
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

              Executive_Vice_President {
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

              Vice_President_of_External_Affairs {
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
        
              Vice_President_of_Finance {
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
  
              Vice_President_of_Internal_Affairs {
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

              College_Chair {
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

              Engineering_Chair {
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

              Wharton_Chair {
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

              Nursing_Chair {
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
    render={data => (
      <Section data={data.allFile.nodes[0].childNecJson} />
    )}
  />
)

export default Index