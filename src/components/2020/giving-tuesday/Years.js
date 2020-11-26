import React from 'react'
import s from 'styled-components'
import { Col } from 'react-bootstrap'

import { Header, WHITE, YELLOW, PINK } from './shared'
import { RowWithPadding } from '../../shared'

const Wrapper = s.div`
  background-color: ${PINK};
`

const Images = [1, 2, 3, 4]

const Years = () => (
  <Wrapper>
    <Header title="through the years" subtitle="always there" titleColor={WHITE} subColor={YELLOW} />
    <RowWithPadding padding="3">
      {Images.map(() => (
        <Col sm={12} md={3}>
          <div style={{ height: '400px', backgroundColor: `${WHITE}` }} />
        </Col>
      ))}
    </RowWithPadding>
    
  </Wrapper>
)

export default Years