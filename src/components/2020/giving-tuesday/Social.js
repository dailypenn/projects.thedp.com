import React from 'react'
import s from 'styled-components'
import { Col } from 'react-bootstrap'

import { Header, PINK, WHITE, YELLOW } from './shared'
import { RowWithPadding } from '../../shared'

const Wrapper = s.div`
  background-color: ${PINK};
`

const Social = () => (
  <Wrapper>
    <Header title="social media" subtitle="always the dp" titleColor={WHITE} subColor={YELLOW} />

    <RowWithPadding>
      <Col sm={12} md={4}>
      </Col>
      <Col sm={12} md={4}>
      </Col>
      <Col sm={12} md={4}>
      </Col>
    </RowWithPadding>
  </Wrapper>
)

export default Social