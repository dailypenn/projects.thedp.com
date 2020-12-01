import React from 'react'
import s from 'styled-components'

import { FUTURA_REGULAR } from '../../utils/font'

const Credit = s.div`
  color: #000000;
  ${({ font = FUTURA_REGULAR }) => font}
  padding: 1rem;
  font-size: 80%;
  margin-top: 1rem;
  text-align: center;
  background-color: ${({ bgColor = '#FFFFFF' }) => bgColor};
`

export const Footer = ({ font, emoji, bgColor }) => (
  <Credit font={font} bgColor={bgColor}>
    Made with <span role="img"> {emoji} </span> by The Daily Pennsylvanian Web
    Department © 2020. All rights reserved.
  </Credit>
)
