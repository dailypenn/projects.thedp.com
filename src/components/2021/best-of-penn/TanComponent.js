import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { RED, BLUE, TAN, WordWithLine, CardName, CardDescription, 
  CardHours, CardAddress, StyledAnchor, YourPickColWrapper, CardTitle, YourPick} from './shared'
import { ANTON_BOLD, POPPINS_BOLD, POPPINS_REGULAR} from '../../../utils/font'


const Card = ({ image }) => (
  <StyledAnchor href='' target="_blank">
    <Row>
      <Col xs={11} sm={11} md={11}>
        <Img fluid={image} />
        <CardTitle style={{color: RED}}>
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
      <YourPickColWrapper>
        <Col xs={1} sm={1} md={1}>
          <YourPick style={{color: TAN, backgroundColor: BLUE}} ><span>YOUR<br/>PICK</span></YourPick>
        </Col>
      </YourPickColWrapper>
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
  padding-left: 5%;
  padding-right: 2.5%;
  @media(max-width: 768px) {
    padding-left: 10%;
  }
`

const HeadlineWrapper = s.div`
  padding: 0% 4%;
  @media(max-width: 768px) {
    padding: 0% 0%;
  }
`
const StyledRow = s(Row)`
  justify-content: center;
`
const TanComponent = ({ colmd, word }) => {
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
      <StyledRow>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
        <Col sm={12} md={colmd}>
          <Card image={articles[0].img.src.childImageSharp.fluid}/>
        </Col>
      </StyledRow>
    </CardsWrapper>
    </>
  )
}

export default TanComponent