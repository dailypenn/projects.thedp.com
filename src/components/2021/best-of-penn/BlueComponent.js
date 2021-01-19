import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import { RED, BLUE, TAN, WordWithLine, CardName, CardDescription, 
  CardHours, CardAddress, YourPickColWrapper, CardTitle, YourPick, CardWrapper} from './shared'

const Background = s.div `
  background-color: ${BLUE};
  width: 100%;
  padding-bottom: 5rem;
  margin-bottom: 7rem;
`

const HorizontalLine = s.hr`
  background: ${TAN}; 
  padding-bottom: 8px;
`

const Card = ({ item }) => (
  <CardWrapper>
    <Row>
      <Col xs={11} sm={11} md={11}>
        <Img fluid={item.img.src.childImageSharp.fluid} />
        <CardTitle color={TAN}>
          {item.category}
        </CardTitle>
      </Col>
      <YourPickColWrapper>
        <Col xs={1} sm={1} md={1}>
          <YourPick color={TAN} BgColor={RED} ><span>YOUR<br/>PICK</span></YourPick>
        </Col>
      </YourPickColWrapper>
    </Row>
  </CardWrapper>
)

const BlueCardWrapper = s(CardWrapper)`
  text-align: left;
  color: ${TAN};
`

const CardText = ({ item }) => (
  <BlueCardWrapper>
    <CardName>
      {item.place}
    </CardName>
    <CardDescription>
      {item.blurb}
    </CardDescription>
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
  </BlueCardWrapper>
)


const HeadlineWrapper = s.div`
  padding: 2rem 0rem 4rem;
`

const BlueComponent = ({ section }) => (
  <Row>
    <Col sm={12} md={{ span: 10, offset: 1 }}>
      <Background>
        <HeadlineWrapper>
          <WordWithLine word={section.section} lineColor={TAN} spanColor={BLUE}/>
        </HeadlineWrapper>
        <Row>
          {section.items && section.items.map(item => (
            <>
              <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{ span: 4, offset: 1 }}>
                <Card item={item}/>
              </Col>
              <Col xs={{span: 10, offset: 1 }} sm={{span: 10, offset: 1 }} md={{span: 5}}>
                <CardText item={item}/>
              </Col>
            </>
          ))}
        </Row>
        <HorizontalLine/>
      </Background>
    </Col>
  </Row>
)

export default BlueComponent