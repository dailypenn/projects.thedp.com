import React from 'react'
import { Col } from 'react-bootstrap'

import { useStaticQuery, graphql } from 'gatsby'

import {
  Wrapper,
  SectionHeader,
  BigArticle,
} from './shared'

const Multimedia = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "final-multimedia.json"}}) {
        edges {
          node {
            childrenFinalMultimediaJson {
              title
              link
              author
              section
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 400) {
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
  `)

  const {
    node: { childrenFinalMultimediaJson: articles },
  } = data.allFile.edges[0]

  return (
    <Wrapper>
      <div className="row main" id="34thst">
        <Col>
          <SectionHeader>MULTIMEDIA</SectionHeader>
          <div className="row">
            <Col><BigArticle article={articles[0]} /></Col>
            <Col><BigArticle article={articles[1]} /></Col>

          </div>
        </Col>
      </div>
    </Wrapper>
  )
}

export default Multimedia
