import React from 'react'
import s from 'styled-components'

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
  font-size: 8em;
  color: ${({ color = DARK_BLACK }) => color};
  text-transform: uppercase;
  padding-left: 2rem;
  line-height: 0.66;
  margin-bottom: 3rem;
`

export const Header = ({ title, color }) => <Title color={color}>{title}</Title>

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

  :hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: ${({ bgColor }) => HOVER_COLOR(bgColor)};
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
      <StyledAnchor href="https://www.thedp.com/page/donate" target="_blank">
        <Button textColor={textColor} bgColor={bgColor} width={width}>
          {' '}
          {text}{' '}
        </Button>
      </StyledAnchor>
    )

  return (
    <StyledAnchor href="https://www.thedp.com/page/donate" target="_blank">
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Button textColor={textColor} bgColor={bgColor} width={width}>
          {' '}
          {text}{' '}
        </Button>
      </div>
    </StyledAnchor>
  )
}

export const TextYellowUnderLine = ({ text, textColor = BLACK }) => (
  <div style={{ margin: '0 0 3rem 2rem', paddingTop: '2rem' }}>
    <span
      style={{
        borderBottom: `5px solid ${YELLOW}`,
        textTransform: 'uppercase',
        paddingBottom: '5px',
        color: textColor,
      }}
    >
      {text}
    </span>
  </div>
)
