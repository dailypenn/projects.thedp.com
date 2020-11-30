import React from 'react'
import s from 'styled-components'

import { Header, WHITE, PINK } from './shared'

const Wrapper = s.div`
  background-color: ${PINK};
`

const AlwaysThere = () => (
  <Wrapper>
    <Header title="always there" color={WHITE} />
  </Wrapper>
)

export default AlwaysThere