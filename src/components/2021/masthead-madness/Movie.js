import React from 'react'
import { Col, Row } from 'react-bootstrap'
import s from 'styled-components'

import { FUTURA_REGULAR } from '../../../utils/font'

import movie_placeholder from '../../../content/images/2021/masthead-madness/movie_placeholder.png'

const BLUE = '#000F33'

const MovieWrapper = s.div`
  display: inline-block;
  text-align: center;

  p {
    color: ${BLUE};
    font-size: 30px;
    margin-bottom: 7rem;
    padding: 0 28rem;
  }
  ${FUTURA_REGULAR}
`

export const Movie = () => (
  <MovieWrapper>
    <Col sm={12} md={6}>
      <img src={movie_placeholder} />
      <p>The first ever Masthead Madness has arrived! A new alumni tradition and giving competition designed to bring the DP family together, raise money for our deserving students and continue to cement the DP's legacy as the world's leading student news and media organization.</p>
    </Col>
  </MovieWrapper>
)
