import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'

import {
  DM_SERIF_DISPLAY_BOLD,
  DM_SERIF_DISPLAY_REGULAR,
  GEORGIA_REGULAR,
} from '../../../utils/font'

const BriefDescription = s.p`
  text-align: center; 
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: ${'1D201F'};
  letter-spacing: 2px;
  ${GEORGIA_REGULAR}
`

const Author = s.p`
  text-align: center; 
  text-transform: uppercase;
  text-decoration: underline;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: ${'1D201F'};
  letter-spacing: 2px;
  ${DM_SERIF_DISPLAY_BOLD}
`

const FullDescription = s.p`
  text-align: center; 
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: ${'1D201F'};
  letter-spacing: 2px;
  white-space: pre-line;
  ${DM_SERIF_DISPLAY_REGULAR}
`

const DescriptionWrapper = s.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 0rem;
  padding-bottom: 2.5rem;
`

const Description = ({ author, brief, description }) => (
  <>
    <DescriptionWrapper color={'#FFF'}>
      <Col sm={12} md={12}>
        <BriefDescription>{brief}</BriefDescription>
        <Author>{author}</Author>
        <FullDescription>{description}</FullDescription>
      </Col>
    </DescriptionWrapper>
  </>
)

export default Description
