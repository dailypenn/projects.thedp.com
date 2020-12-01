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
const Title = s.div`
  ${RAMA_GOTHIC_BOLD}
  font-size: 24em;
  color: ${({ color = DARK_BLACK }) => color};
  text-transform: uppercase;
  padding-left: 2rem;
  line-height: 0.66;
  margin-bottom: 3rem;
`

export const Header = ({ title, color }) => <Title color={color}>{title}</Title>

const Button = s.div`
  text-transform: uppercase;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  text-align: center;
  width: ${({ width = '40' }) => width}%;
  padding: 0.4rem 0;
  margin: 3rem 0;

  :hover {
    cursor: pointer;
  }
`

export const CenteredButton = ({
  text,
  textColor,
  bgColor,
  posCenter,
  width,
}) => {
  if (!posCenter)
    return (
      <Button textColor={textColor} bgColor={bgColor} width={width}>
        {' '}
        {text}{' '}
      </Button>
    )

  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <Button textColor={textColor} bgColor={bgColor} width={width}>
        {' '}
        {text}{' '}
      </Button>
    </div>
  )
}

export const TextYellowUnderLine = ({ text, textColor = BLACK }) => (
  <div style={{ margin: '0 0 3rem 2rem', paddingTop: '2rem' }}>
    <span
      style={{
        fontSize: '3em',
        borderBottom: `5px solid ${YELLOW}`,
        textTransform: 'uppercase',
        paddingBottom: '5px',
        color: textColor,
        fontFamily: GOPHER_MEDIUM
      }}
    >
      {text}
    </span>
  </div>
)
