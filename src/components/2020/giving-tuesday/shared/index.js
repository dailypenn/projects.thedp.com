import React from 'react'
import s from 'styled-components'

import { RAMA_GOTHIC_BOLD, GOPHER_MEDIUM } from '../../../../utils/font'

// COLOR CONSTANTS
export const PINK = '#DD666E'
export const WHITE = '#FFFFFF'
export const YELLOW = '#FBE73F'
export const BLACK = '#000000'
export const STREET_GREEN = '#67BCBE'
export const UTB_BLUE = '#456DB3'
export const GREY = '#F5F4F4'
export const DARK_BLACK = '#131313'

// COMPONENTS
const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

const Title = s.div`
  ${RAMA_GOTHIC_BOLD}
  font-size: 10em;
  color: ${({ color = DARK_BLACK }) => color};
  text-transform: uppercase;
  padding-left: 2rem;
  line-height: ${({ lineHeight = '0.66' }) => lineHeight};
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 8em;
  }
`

export const Header = ({ title, color, lineHeight }) => <Title color={color} lineHeight={lineHeight}>{title}</Title>

const HOVER_COLOR = bgColor => {
  switch (bgColor) {
    case PINK:
      return '#9A3C42'

    default:
      return '#3B3939'
  }
}

const Button = s.div`
  text-transform: uppercase;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  text-align: center;
  width: ${({ width = '40' }) => width}%;
  padding: 0.4rem 0;
  margin: 3rem 0;
  ${GOPHER_MEDIUM}

  :hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: ${({ bgColor }) => HOVER_COLOR(bgColor)};
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    width: ${({ width }) => width > '50' ? '60' : '30'}%;
  }
`

export const CenteredButton = ({
  text,
  textColor,
  bgColor,
  posCenter,
  width,
  link = 'https://www.thedp.com/page/donate'
}) => {
  if (!posCenter)
    return (
      <StyledAnchor href={link} target="_blank">
        <Button textColor={textColor} bgColor={bgColor} width={width}>
          {' '}
          {text}{' '}
        </Button>
      </StyledAnchor>
    )

  return (
    <StyledAnchor href={link} target="_blank">
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Button textColor={textColor} bgColor={bgColor} width={width}>
          {' '}
          {text}{' '}
        </Button>
      </div>
    </StyledAnchor>
  )
}

const TextWrapper = s.div`
  margin: 0 0 8rem 2rem;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
  }
`

const TextSpan = s.span`
  font-size: 1.5em;
  border-bottom: 5px solid ${YELLOW};
  text-transform: uppercase;
  padding-bottom: 4px;
  color: ${({ textColor }) => textColor};
  ${GOPHER_MEDIUM}
`

export const TextYellowUnderLine = ({ text, textColor = BLACK }) => (
  <TextWrapper>
    <TextSpan textColor={textColor}> {text} </TextSpan>
  </TextWrapper>
)
