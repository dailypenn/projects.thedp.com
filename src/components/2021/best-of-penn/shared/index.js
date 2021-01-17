import React from 'react'
import s from 'styled-components'

import { ANTON_BOLD, POPPINS_BOLD, POPPINS_REGULAR } from '../../../../utils/font'

// COLOR CONSTANTS
export const TAN = '#E1E1D7'
export const RED = '#DD5447'
export const BLUE = '#82A7A9'

// COMPONENTS
export const BackgroundWrapper = s.div`
  background-color: ${TAN};
`

const H2 = s.h2`
  text-align: center; 
  border-bottom: 8px solid ${({ lineColor }) => lineColor}; 
  line-height: 0em;
  padding-top: 3rem;
  margin: 0rem 1rem;
  margin-bottom: 2rem;
  font-size: 4rem;
  color: ${({ lineColor }) => lineColor};
  letter-spacing: -2px;
  ${ANTON_BOLD}

  span {
    background: ${({ spanColor }) => spanColor}; 
    padding: 0 0.5rem; 
  }
`

export const WordWithLine = ({ word, lineColor, spanColor }) => (
  <H2 lineColor={lineColor} spanColor={spanColor} className="divider">
    <span> {word} </span>
  </H2>
)

// CARD COMPONENTS

export const StyledAnchor = s.a`
  text-decoration: none !important;
  margin-top: 4rem;
  text-align: ${({ alignment}) => alignment};
  color: ${({ color }) => color} !important;
`
export const CardName = s.p`
  font-size: 1rem;
  margin-bottom: 0rem;
  ${POPPINS_BOLD};
`
export const CardDescription = s.p`
  font-size: 1rem;
  ${POPPINS_REGULAR};
`

export const CardAddress = s.p`
  font-size: 1rem;
  margin-bottom: 0rem;
  ${POPPINS_REGULAR};
`
export const CardHours = s.p`
  font-size: 1rem;
  margin-bottom: 4rem;
  ${POPPINS_REGULAR};
`
export const YourPickColWrapper = s.div`
  margin-left: -60px;
`

export const CardTitle = s.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-bottom: 0rem;
  ${ANTON_BOLD};
  color: ${({ color }) => color};
`

export const ComponentDescription = s.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
  ${POPPINS_REGULAR};
  text-align: center;
`
export const YourPick = s.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: 0rem;
  padding: 1rem 1rem;
  padding-top: 1.2rem;
  margin-top: -2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 50%;
  ${ANTON_BOLD};
  color: ${({ color }) => color};
  background-color: ${({ BgColor }) => BgColor};
`

export const CardsWrapper = s.div`
  padding-left: 5%;
  padding-right: 2.5%;
  @media(max-width: 768px) {
    padding-left: 10%;
  }
`

export const HeadlineWrapper = s.div`
  padding: 0% 4%;
  @media(max-width: 768px) {
    padding: 0% 0%;
  }
`
