import React from 'react'
import s from 'styled-components'
import { Col } from 'react-bootstrap'

import {
  WHITE,
  PINK,
  Header,
} from './shared'
import { RowWithPadding } from '../../shared'

const Wrapper = s.div`
  background-color: ${PINK};
`

const AlwaysTheDP = () => (
  <Wrapper>
    <Header title="always the dp" color={WHITE} />

    <RowWithPadding padding="8">
      <Col sm={12} md={4}></Col>
      <Col sm={12} md={4}></Col>
      <Col sm={12} md={4}></Col>
    </RowWithPadding>
  </Wrapper>
)

export default AlwaysTheDP
