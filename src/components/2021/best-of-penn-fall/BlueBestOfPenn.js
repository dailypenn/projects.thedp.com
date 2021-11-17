import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import {
  RED,
  WHITE_BLUE,
  INDIGO,
  WordWithLine,
  CardName,
  CardDescription,
  CardHours,
  CardAddress,
  CardTitle,
  YourPick,
} from './shared'

const Background = s.div`
  background-color: ${INDIGO};
  width: 100%;
  padding-bottom: 5rem;
  margin-bottom: ${({ marginBottom = '7' }) => marginBottom}rem;
`

const HorizontalLine = s.hr`
  background: ${WHITE_BLUE}; 
  padding-bottom: 8px;
`

const Card = ({ item: { category, img } }) => (
  <BlueCardFormat>
    <Row>
      <Col xs={11} sm={11} md={11}>
        <Img fluid={img.src.childImageSharp.fluid} />
        <CardTitle color={WHITE_BLUE}>{category}</CardTitle>
      </Col>
      <Col xs={1} sm={1} md={1} style={{ marginLeft: '-60px' }}>
        <YourPick color={WHITE_BLUE} bgColor={RED}>
          <span>
            YOUR
            <br />
            PICK
          </span>
        </YourPick>
      </Col>
    </Row>
  </BlueCardFormat>
)

const BlueCardFormat = s.div`
  text-align: left;
  color: ${WHITE_BLUE};
  padding-top: 1.5rem;
  @media(max-width: 768px) {
    text-align: center;
    padding-left: 5%;
  }
`

const CardText = ({ item: { place, blurb, address, hours } }) => (
  <BlueCardFormat>
    <Col xs={11} sm={11} md={11}>
      <CardName>{place}</CardName>
      <CardDescription>{blurb}</CardDescription>
      {address && (
        <CardAddress>
          <strong>ADDRESS:</strong> {address}
        </CardAddress>
      )}
      {hours && (
        <CardHours>
          <strong>HOURS:</strong> {hours}
        </CardHours>
      )}
    </Col>
  </BlueCardFormat>
)

const HeadlineWrapper = s.div`
  padding: 2rem 0rem 4rem;
`

const BlueBestOfPenn = ({ section, marginBottom }) => (
  <Row>
    <Col sm={12} md={{ span: 10, offset: 1 }}>
      <Background marginBottom={marginBottom}>
        <HeadlineWrapper>
          <WordWithLine
            word={section.section}
            lineColor={WHITE_BLUE}
            spanColor={INDIGO}
          />
        </HeadlineWrapper>
        <Row>
          {section.items &&
            section.items.map(item => (
              <>
                <Col
                  xs={{ span: 10, offset: 1 }}
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 4, offset: 1 }}
                >
                  <Card item={item} />
                </Col>
                <Col
                  xs={{ span: 10, offset: 1 }}
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 5 }}
                >
                  <CardText item={item} />
                </Col>
              </>
            ))}
        </Row>
        <HorizontalLine />
      </Background>
    </Col>
  </Row>
)

export default BlueBestOfPenn
