import React from 'react'
import s from 'styled-components'

import { ANTON_BOLD } from '../../../../utils/font'

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

const H2WordWrapper = s.div`
  padding-right: 10px;
`

export const WordWithLine = ({ word, lineColor }) => (
  <H2 lineColor={lineColor} className="divider">
    <span> {word} </span>
  </H2>
)