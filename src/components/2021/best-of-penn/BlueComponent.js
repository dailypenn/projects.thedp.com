import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { RED, BLUE, TAN, WordWithLine, CardName, CardDescription, 
  CardHours, CardAddress, StyledAnchor, YourPickColWrapper, CardTitle, YourPick} from './shared'
import { ANTON_BOLD, POPPINS_BOLD, POPPINS_REGULAR } from '../../../utils/font'

const Background = s.div `
  background-color: ${BLUE};
  width: 100%;
  padding-bottom: 5rem;
`

const HorizontalLine = s.hr`
  background: ${TAN}; 
  padding-bottom: 8px;
`

const Card = ({ image }) => (
  <StyledAnchor href='' target="_blank" alignment="center">
    <Row>
      <Col xs={11} sm={11} md={11}>
        <Img fluid={image} />
        <CardTitle color={TAN}>
          BEST PIZZA
        </CardTitle>
      </Col>
      <YourPickColWrapper>
        <Col xs={1} sm={1} md={1}>
          <YourPick color={TAN} BgColor={RED} ><span>YOUR<br/>PICK</span></YourPick>
        </Col>
      </YourPickColWrapper>
    </Row>
  </StyledAnchor>
)

const CardText = () => (
  <StyledAnchor href='' target="_blank" color={TAN}>
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
  </StyledAnchor>
)


const HeadlineWrapper = s.div`
  padding: 0% 4% 4%;
  @media(max-width: 768px) {
    padding: 0% 0% 4%;
  }
`

const BlueComponent = ({colmd, word}) => {
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
        <Col sm={12} md={{ span: 10, offset: 1 }}>
          <Background>
            <HeadlineWrapper>
              <WordWithLine word={word} lineColor={RED} spanColor={BLUE}/>
            </HeadlineWrapper>
            <Row>
                <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{ span: 4, offset: 2 }}>
                  <Card image={articles[0].img.src.childImageSharp.fluid}/>
                </Col>
                <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{span: 4}}>
                  <CardText/>
                </Col>
                <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{ span: 4, offset: 2 }}>
                  <Card image={articles[0].img.src.childImageSharp.fluid}/>
                </Col>
                <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{span: 4}}>
                  <CardText/>
                </Col>
                <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{ span: 4, offset: 2 }}>
                  <Card image={articles[0].img.src.childImageSharp.fluid}/>
                </Col>
                <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{span: 4}}>
                  <CardText/>
                </Col>
            </Row>
            <HorizontalLine/>
          </Background>
        </Col>
      </Row>
    </>
  )
}

export default BlueComponent