import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { DM_SERIF_DISPLAY_BOLD } from '../../../utils/font'

import {
  BackgroundWrapper,
} from './shared'

const QuoteWrapper = s.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 0rem;
  padding-bottom: 2rem;
`
const QuoteMark = s.p`
  font-size: 4rem;
  margin-bottom: -3rem;
  padding-top: 1rem;
  ${DM_SERIF_DISPLAY_BOLD};
  color: ${({ color }) => color};
`

const QuoteText = s.p`
  font-size: 1.4rem;
  margin-bottom: 0rem;
  white-space: pre-line;
  ${DM_SERIF_DISPLAY_BOLD};
  color: ${({ color }) => color};
`

const QuotePerson = s.p`
  font-size: 1.2rem;
  margin-bottom: 0rem;
  ${DM_SERIF_DISPLAY_BOLD};
  color: ${({ color }) => color};
`

const QuoteDivider = s.div`
  width: 3.5rem;
  height: 0.25rem;
  margin-top: 1.8rem;
  margin-bottom: 0.2rem;
  background-color: ${({ bgColor }) => bgColor};
`

const Quote = ({item: { text, person }, color, dashColor}) => (
  <>
    <QuoteWrapper>
      <QuoteMark color={color}>
        <strong>“</strong> 
      </QuoteMark>
      <QuoteText color={color}>
        {text}
      </QuoteText>
      <QuoteDivider bgColor={dashColor}/>
      <QuotePerson color={color}>
        {person}
      </QuotePerson>
    </QuoteWrapper>
  </>
)

const Quotes = ({ section: { section, items } , bgColor, textColor, dashColor}) => (
  <>
  <BackgroundWrapper color={bgColor}>
    {items &&
        items.map(item => (
          <Col sm={12} md={12}>
            <Quote item={item} color={textColor} dashColor={dashColor}/>
          </Col>
        ))}
  </BackgroundWrapper>
  </>
)

export default Quotes
