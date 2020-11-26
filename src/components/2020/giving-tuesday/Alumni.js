import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { Header } from './shared'
import { RowWithPadding } from '../../shared'

const Wrapper = s.div`
  background-color: #DD666E;
`

const AlumniJSON = [
  { }, {}, {}, {}
]

const Person = () => (
  <Col md={6} style={{ marginBottom: '2rem' }}>
    <Row>
      <Col md={5}>
        CNN
      </Col>
      <Col md={7}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Col>
    </Row>
  </Col>
)

const CompanyText = s.h3`
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  margin: 1rem 0 0 0;
`

const Alumni = () => (
  <Wrapper>
    <Header title="alumni" subtitle="always here" />
    
    <RowWithPadding>
      {AlumniJSON.map(() => (
        <Person />
      ))}
    </RowWithPadding>

    <CompanyText> you can find DP alum at the following companies: </CompanyText>

  </Wrapper>
)

export default Alumni