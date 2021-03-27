import React from 'react'
import { Col, Row } from 'react-bootstrap'
import s from 'styled-components'

import { FUTURA_BOLD } from '../../../utils/font'

import make_your_gift from '../../../content/images/2021/masthead-madness/make_your_gift.png'

const BLUE = '#000F33'
const RED = '#AC3B4E'

const MakeYourGift = s.div`
  font-size: 32px;
  margin: 100px 0 100px 0;
  text-align: center;
  ${FUTURA_BOLD}

  .blue {
    color: ${BLUE};
    margin: 0 auto;
  }
  .red {
    color: ${RED};
    margin: 0 auto;
  }
`

export const Gift = () => (
  <MakeYourGift>
    <Col sm={12} md={6}>
      <img className="MakeYourGift" src={make_your_gift} />
      <p className="blue">Do you think your year is the best?</p>
      <p className="red">Donate now and show the rest!</p>
    </Col>
  </MakeYourGift>
)
