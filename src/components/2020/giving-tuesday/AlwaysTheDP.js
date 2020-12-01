import React from 'react'
import s from 'styled-components'
import { Col } from 'react-bootstrap'
import InstagramEmbed from 'react-instagram-embed'
import { FacebookProvider, EmbeddedPost } from 'react-facebook'

import {
  WHITE,
  PINK,
  Header,
} from './shared'
import { RowWithPadding } from '../../shared'

const Wrapper = s.div`
  background-color: ${PINK};
`

const HCenteredCol = s(Col)`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`

const AlwaysTheDP = () => (
  <Wrapper>
    <Header title="always the dp" color={WHITE} lineHeight="0.7" />

    <RowWithPadding padding="5" paddingTB="2">
      <HCenteredCol sm={12} md={4}>
        <FacebookProvider appId="947756802416627">
          <EmbeddedPost href="https://www.facebook.com/dailypenn/posts/10158826652488805" width="200" />
        </FacebookProvider>
      </HCenteredCol>
      <HCenteredCol sm={12} md={4}>
        <InstagramEmbed
          url='https://www.instagram.com/p/CIQkttXHTCI/'
          clientAccessToken='947756802416627|a36b8dffc1596399ee685a4677ebc2a2'
          maxWidth={320}
          hideCaption
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </HCenteredCol>
      <HCenteredCol sm={12} md={4}>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6739503450989625344" height="665" width="320" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
      </HCenteredCol>
    </RowWithPadding>
  </Wrapper>
)

export default AlwaysTheDP
