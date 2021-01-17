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
    background: ${TAN}; 
    padding: 0 0.5rem; 
  }
`

export const WordWithLine = ({ word, lineColor }) => (
  <H2 lineColor={lineColor} className="divider">
    <span> {word} </span>
  </H2>
)

// CARD COMPONENTS

export const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
  margin-top: 4rem;
`
export const CardName = s.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0rem;
  ${POPPINS_BOLD};
`
export const CardDescription = s.p`
  font-size: 1rem;
  text-align: center;
  ${POPPINS_REGULAR};
`

export const CardAddress = s.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0rem;
  ${POPPINS_REGULAR};
`
export const CardHours = s.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 4rem;
  ${POPPINS_REGULAR};
`
export const YourPickColWrapper = s.div`
  margin-left: -60px;
`

export const CardTitle = s.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0rem;
  ${ANTON_BOLD};
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
  text-align: center;
  line-height: 1.5rem;
  border-radius: 50%;
  ${ANTON_BOLD};
`
