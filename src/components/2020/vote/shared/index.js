import React from 'react'
import s from 'styled-components'
import { RADIANT_REGULAR } from '../../../../utils/font'

export const Wrapper = s.div`
  padding: 0 15rem;
  marginTop: 2rem;

  @media (max-width: 768px) {
    padding: 0rem;
  }
`
const H2 = s.h2` 
  text-align: center; 
  border-bottom: 4px solid ${({ lineColor }) => lineColor }; 
  line-height: 0.1em;
  margin: 3rem -1rem;
  font-size: 4em;
  letter-spacing: -2px;
  ${RADIANT_REGULAR}

  span {
    background:#fff; 
    padding: 0 0px; 
  }
`

export const WordWithLine = ({ word, lineColor }) => (
  <H2 lineColor={lineColor} className="divider" ><span>{word}</span></H2>
)