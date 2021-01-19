import React from 'react'
import s from 'styled-components'

import { ANTON, POPPINS_BOLD, POPPINS_REGULAR } from '../../../../utils/font'

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
  margin-bottom: 2rem;
  font-size: 4rem;
  color: ${({ lineColor }) => lineColor};
  letter-spacing: 2px;
  ${ANTON}

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
export const CardName = s.p`
  font-size: 0.8rem;
  margin-bottom: 0rem;
  text-transform: uppercase;
  ${POPPINS_BOLD};
`
export const CardDescription = s.p`
  font-size: 0.8rem;
  ${POPPINS_REGULAR};
`

export const CardAddress = s.p`
  font-size: 0.8rem;
  margin-bottom: 0rem;
  ${POPPINS_REGULAR};
`
export const CardHours = s.p`
  font-size: 0.8rem;
  ${POPPINS_REGULAR};
`
export const YourPickColWrapper = s.div`
  margin-left: -60px;
`

export const CardTitle = s.p`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 0rem;
  text-align: center;
  ${ANTON};
  color: ${({ color }) => color};
`

export const ComponentDescription = s.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 0rem 5rem;
  ${POPPINS_REGULAR};
  font-weight: 500;
  text-align: center;
`
export const YourPick = s.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  left: 0.5rem;
  padding: 1rem 1rem;
  padding-top: 0.7rem;
  margin-top: -1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 50%;
  ${ANTON};
  color: ${({ color }) => color};
  background-color: ${({ BgColor }) => BgColor};
`

export const CardWrapper = s.div`
  padding-top: 1.5rem;
  text-align: center;
`

