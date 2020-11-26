import React from 'react'
import s from 'styled-components'

import { FUTURA_REGULAR } from '../../utils/font'

const Credit = s.div`
  color: #000000;
  ${({ font = FUTURA_REGULAR }) => font}
  padding: 1rem;
  font-size: 80%;
  margin: 1rem 0;
  text-align: center;
`

export const Footer = ({ font, emoji }) => (
  <Credit font={font}>
    Made with <span role="img"> {emoji} </span> by The Daily Pennsylvanian Web
    Department © 2020. All rights reserved.
  </Credit>
)
