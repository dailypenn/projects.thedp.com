import React from 'react'
import s from 'styled-components'

// COMPONENTS
export const BackgroundWrapper = s.div`
  background-color: ${({ color }) => color};
`