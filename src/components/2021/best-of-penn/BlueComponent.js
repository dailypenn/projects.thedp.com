import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { RED, BLUE, TAN, WordWithLine } from './shared'
import { ANTON_BOLD, POPPINS_BOLD, POPPINS_REGULAR } from '../../../utils/font'


const BlueComponent = ({ colmd, word}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "best-of-penn-drinks.json" } }) {
        edges {
          node {
            childrenBestOfPennDrinksJson {
              img {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 750) {
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
    node: { childrenBestOfPennDrinksJson: articles },
  } = data.allFile.edges[0]

  return (
    <>
		<Row>
			<Col sm={12} md={colmd}>
				<Img fluid={articles[0].img.src.childImageSharp.fluid}/>
			</Col>
		</Row>
    </>
  )
}

  export default BlueComponent