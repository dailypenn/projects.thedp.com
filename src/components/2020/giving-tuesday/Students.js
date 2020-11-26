import React from 'react'
import { Col } from 'react-bootstrap'

import { Header, PINK, BLACK } from './shared'
import { RowWithPadding } from '../../shared'

const Students = () => (
  <>
    <Header title="students" subtitle="always here" titleColor={PINK} subColor={BLACK} />

    <RowWithPadding>
      <Col sm={12} md={6}>
      </Col>
      <Col sm={12} md={6}>
      </Col>
    </RowWithPadding>
  </>
)

export default Students