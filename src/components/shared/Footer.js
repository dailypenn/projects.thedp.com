import React from 'react'
import s from 'styled-components'

import { FUTURA_REGULAR } from '../../utils/font'

const Credit = s.div`
  color: ${({ fontColor = '#000000' }) => fontColor};
  ${({ font = FUTURA_REGULAR }) => font}
  padding: 1rem;
  font-size: 80%;
  text-align: center;
  background-color: ${({ bgColor = '#FFFFFF' }) => bgColor};
`

export const Footer = ({ font, emoji, bgColor, fontColor, year }) => (
  <Credit font={font} bgColor={bgColor} fontColor={fontColor}>
    Made with <span role="img"> {emoji} </span> by The Daily Pennsylvanian Web
    Department © {year ? year : '2020'}. All rights reserved.
  </Credit>
)
