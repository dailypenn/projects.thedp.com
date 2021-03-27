import React from 'react'
import { Col, Row } from 'react-bootstrap'
import s from 'styled-components'

import PersonCard from '../../../components/2021/masthead-madness/PersonCard'

import gift_center_placeholder from '../../../content/images/2021/masthead-madness/gift_center_placeholder.png'

const GiftWrapper = s.div`
  margin-bottom: 7rem;

  img {
    display: block;
    margin: 0 auto;
  }
`

export const GiftCenter = () => (
  <GiftWrapper>
    <img src={gift_center_placeholder} />
    <div>
      <PersonCard title="Rookies" name="NAME" flag="1" />
      <PersonCard />
      <PersonCard />
    </div>
  </GiftWrapper>
)
