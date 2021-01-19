import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { RED, BLUE, TAN, WordWithLine, CardName, CardDescription, 
  CardHours, CardAddress, StyledAnchor, YourPickColWrapper, 
  CardTitle, YourPick, ComponentDescription, CardsWrapper, HeadlineWrapper, CardWrapper } from './shared'

const TanCardWrapper = s(CardWrapper)`
  padding-left: 2rem;
  padding-right: 2rem;
`

const Card = ({ item }) => (
  <TanCardWrapper>
    <StyledAnchor href='' target="_blank" alignment ="center" color="#000000">
      <Row>
        <Col xs={11} sm={11} md={11}>
          <Img fluid={item.img.src.childImageSharp.fluid} />
          <CardTitle color={RED}>
            {item.category}
          </CardTitle>
          <CardName>
            {item.place}
          </CardName>
          {item.blurb && (
            <CardDescription>
              {item.blurb}
            </CardDescription>
          )}
          {item.address && (
            <CardAddress>
              <strong>ADDRESS:</strong> {item.address}
            </CardAddress>
          )}
          {item.hours && (
            <CardHours>
              <strong>HOURS:</strong> {item.hours}
            </CardHours>
          )}
        </Col>
        <YourPickColWrapper>
          <Col xs={1} sm={1} md={1}>
            <YourPick color={TAN} BgColor={BLUE}><span>YOUR<br/>PICK</span></YourPick>
          </Col>
        </YourPickColWrapper>
      </Row>
    </StyledAnchor>
  </TanCardWrapper>
)

const StyledRow = s(Row)`
  justify-content: center;
`
const TanComponent = ({ section, colmd }) => (
  <>
  <HeadlineWrapper>
    <WordWithLine word={section.section} lineColor={RED} spanColor={TAN}/>
    <ComponentDescription> {section.description} </ComponentDescription>
  </HeadlineWrapper>
  <CardsWrapper>
    <StyledRow>
      {section.items && section.items.map(item => (
        <Col sm={12} md={colmd}>
          <Card item={item}/>
        </Col>
      ))}
    </StyledRow>
  </CardsWrapper>
  </>
)

export default TanComponent