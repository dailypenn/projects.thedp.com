import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { RED, BLUE, TAN, WordWithLine } from './shared'
import { ANTON_BOLD, POPPINS_BOLD, POPPINS_REGULAR } from '../../../utils/font'

const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
  margin-top: 4rem;
`
const CardTitle = s.p`
  color: ${RED};
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0rem;
  ${ANTON_BOLD};
`

const CardName = s.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0rem;
  ${POPPINS_BOLD};
`
const CardDescription = s.p`
  font-size: 1rem;
  text-align: center;
  ${POPPINS_REGULAR};
`

const CardAddress = s.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0rem;
  ${POPPINS_REGULAR};
`

const CardHours = s.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 4rem;
  ${POPPINS_REGULAR};
`

const YourPick = s.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: -4rem;
  padding: 1rem 1rem;
  padding-top: 1.2rem;
  margin-top: -2rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  color: ${TAN};
  background-color: ${BLUE};
  border-radius: 50%;
  ${ANTON_BOLD};
`

const Card = ({ image }) => (
  <StyledAnchor href='' target="_blank">
      <Row>
        <Col sm={10} md={10}>
          <Img fluid={image} />
          <CardTitle>
            BEST PIZZA
          </CardTitle>
          <CardName>
            SHAKE SHACK
          </CardName>
          <CardDescription>
            "Looking for a late night bite?..."
          </CardDescription>
          <CardAddress>
            <strong>ADDRESS:</strong> 40th and Spruce St.
          </CardAddress>
          <CardHours>
            <strong>HOURS:</strong> Sun-Wed: 9AM-12AM, Thurs-Sat: 9AM-3AM.
          </CardHours>
        </Col>
        <Col sm={2} md={2}>
          <YourPick><span>YOUR<br/>PICK</span></YourPick>
        </Col>
      </Row>
  </StyledAnchor>
)

const ComponentDescription = s.p`
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 4rem;
  ${POPPINS_REGULAR};
`

const CardsWrapper = s.div`
  padding-left: 4rem;
`

const HeadlineWrapper = s.div`
  padding: 0rem 3rem;
  @media(max-width: 768px) {
    padding: 0rem 0rem;
  }
`

const TanComponent = ({ colmd, word}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "best-of-penn-content.json" } }) {
        edges {
          node {
            childrenBestOfPennContentJson {
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
    node: { childrenBestOfPennContentJson: articles },
  } = data.allFile.edges[0]

  return (
    <>
    <HeadlineWrapper>
      <WordWithLine word={word} lineColor={RED}/>
      <ComponentDescription> From Coffee to ...</ComponentDescription>
    </HeadlineWrapper>

    <CardsWrapper>
      <Row>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
      </Row>
    </CardsWrapper>
    </>
  )
}

export default TanComponent