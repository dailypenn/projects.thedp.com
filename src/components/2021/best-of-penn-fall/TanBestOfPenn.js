import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import {
  RED,
  BLUE,
  TAN,
  WordWithLine,
  CardName,
  CardDescription,
  CardHours,
  CardAddress,
  CardTitle,
  YourPick,
  ComponentDescription,
} from './shared'

const TanCardFormat = s.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  text-align: center;
`

const Card = ({ item: { img, category, place, blurb, address, hours } }) => (
  <TanCardFormat>
    <Row>
      <Col xs={11} sm={11} md={11}>
        <Img fluid={img.src.childImageSharp.fluid} />
        <CardTitle color={RED}>{category}</CardTitle>
        <CardName>{place}</CardName>
        {blurb && <CardDescription>{blurb}</CardDescription>}
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
      <Col xs={1} sm={1} md={1} style={{ marginLeft: '-60px' }}>
        <YourPick color={TAN} bgColor={BLUE}>
          <span>
            YOUR
            <br />
            PICK
          </span>
        </YourPick>
      </Col>
    </Row>
  </TanCardFormat>
)

const HeadlineWrapper = s.div`
  padding: 0 6rem;
  @media(max-width: 768px) {
    padding: 0% 0%;
  }
`

const StyledRow = s(Row)`
  justify-content: center;
  padding-left: 5%;
  padding-right: 2.5%;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  @media(max-width: 768px) {
    padding-left: 10%;
  }
`

const TanBestOfPenn = ({ section: { section, description, items }, colmd }) => (
  <>
    <HeadlineWrapper>
      <WordWithLine word={section} lineColor={RED} spanColor={TAN} />
      <ComponentDescription> {description} </ComponentDescription>
    </HeadlineWrapper>
    <StyledRow>
      {items &&
        items.map(item => (
          <Col sm={12} md={colmd}>
            <Card item={item} />
          </Col>
        ))}
    </StyledRow>
  </>
)

export default TanBestOfPenn
