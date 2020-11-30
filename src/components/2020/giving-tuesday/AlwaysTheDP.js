import React from 'react'
import s from 'styled-components'
import { Col } from 'react-bootstrap'

import {
  WHITE,
  PINK,
  Header,
  CenteredButton,
  TextYellowUnderLine,
} from './shared'
import { RowWithPadding, CenteredCol } from '../../shared'

const Video = s.iframe`
  height: ${({ height = '275px' }) => height};

  @media (max-width: 768px) {
    height: 200px;
  }
`

const AlwaysTheDP = () => (
  <>
    <Header title="always the dp" color={PINK} />

    <RowWithPadding padding="8">
      <Col sm={12} md={7}>
        <Video
          height="400px"
          width="100%"
          src="https://www.youtube.com/embed/eIQGxVNwhUs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Col>
      <CenteredCol sm={12} md={5}>
        <h4> #GIVING TUESDAY </h4>
        <p> What an exciting day for our organization and students! Hundreds of donors and thousands of dollars given all to help ensure the future of news, information and media. If you have not had the chance to make your gift today, time is running out! </p>
        <p> If you have already donated, thank you for your participation today. Your gifts go directly to our students through scholarships, financial aid, training and much more. Your support means that we are ALWAYS HERE. ALWAYS THERE. ALWAYS THE DP! </p>
        <CenteredButton text="donate" textColor={WHITE} bgColor={PINK} />
      </CenteredCol>
    </RowWithPadding>

    <TextYellowUnderLine text="social media" />

    <RowWithPadding padding="8">
      <Col sm={12} md={4}>
      </Col>
      <Col sm={12} md={4}>
      </Col>
      <Col sm={12} md={4}>
      </Col>
    </RowWithPadding>
  </>
)

export default AlwaysTheDP