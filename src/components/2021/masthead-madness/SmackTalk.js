import React from 'react'
import { Col, Row } from 'react-bootstrap'
import s from 'styled-components'

import smack_talk_placeholder from '../../../content/images/2021/masthead-madness/smack_talk_placeholder.png'

const SmackTalkWrapper = s.div`
  margin-bottom: 7rem;

  img {
    display: block;
    margin: 0 auto;
  }
`

export const SmackTalk = () => (
  <SmackTalkWrapper>
    <img src={smack_talk_placeholder} />
  </SmackTalkWrapper>
)
