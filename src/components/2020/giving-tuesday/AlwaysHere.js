import React from 'react'
import s from 'styled-components'

import { Header, PINK, CenteredButton, BLACK, WHITE } from './shared'

const Wrapper = s.div`
  background-color: ${PINK};
`

const AlwaysHere = () => (
  <Wrapper>
    <Header title="always here" />
    <CenteredButton text="donate" bgColor={BLACK} textColor={WHITE} posCenter width="10" />
  </Wrapper>
)

export default AlwaysHere