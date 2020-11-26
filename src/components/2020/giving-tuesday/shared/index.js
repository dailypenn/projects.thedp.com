import React from 'react'
import s from 'styled-components'

// COLOR CONSTANTS
export const PINK = '#DD666E'
export const WHITE = '#FFFFFF'
export const YELLOW = '#FBE73F'
export const BLACK = '#000000'
export const STREET_GREEN = '#67BCBE'
export const UTB_BLUE = '#456DB3'


// COMPONENTS
const Title = s.div`
  font-size: 8em;
  color: ${({ color = '#131313' }) => color};
  text-transform: uppercase;
  padding-left: 2rem;
  letter-spacing: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 0.6
`

const SubTitle = s.div`
  color: ${({ color = YELLOW }) => color};
  text-transform: uppercase;
  font-size: 0.2em;

  padding-left: 1rem;
`

export const Header = ({ title, subtitle, titleColor, subColor }) => (
  <div style={{ display: 'flex', marginBottom: '4rem' }}>
    <Title color={titleColor}>
      {title}
      <SubTitle color={subColor}> {subtitle} </SubTitle>
    </Title>
  </div>
)