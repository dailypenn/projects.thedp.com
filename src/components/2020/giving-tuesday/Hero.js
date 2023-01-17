import React from 'react'
import { Container, Row } from 'react-bootstrap'
import s from 'styled-components'
import { CenteredButton, PINK, WHITE } from './shared'
import { Link } from 'gatsby'

import { GOPHER_REGULAR } from '../../../utils/font'

import Arrow from '../../../content/images/2020/giving-tuesday/arrow.gif'
const HEADER = `https://s3.amazonaws.com/snwceomedia/dpn/9d4051bc-8350-4343-9ee9-8887455bf3b6.original.gif`

const Section = s.div`
  background-color: #131313;
  padding-bottom: 50px;
`

const DownArrow = s.img`
  height: 50px;

  @media screen and (max-width: 768px) {
    height: 30px;
  }
`

const HeroLink = s(Link)`
  ${GOPHER_REGULAR}
  font-size: 2vw;
  color: white !important;
  text-decoration: none !important;
`

export default () => (
  <Section>
    <img src={HEADER} className="img-fluid" />
    <Container className="container-fluid">
      <Row>
        <HeroLink className="mx-auto" to="#always-here">
          ALWAYS HERE
        </HeroLink>
        <HeroLink className="mx-auto" to="#always-there">
          ALWAYS THERE
        </HeroLink>
        <HeroLink className="mx-auto" to="#always-the-dp">
          ALWAYS THE DP
        </HeroLink>
      </Row>
    </Container>
    <br />
    <Link to="#always-here">
      <Row>
        <DownArrow src={Arrow} className="mx-auto" />
      </Row>
    </Link>
    <br />
    <br />
    <CenteredButton
      width="10"
      textColor={WHITE}
      bgColor={PINK}
      text="DONATE"
      posCenter
    />
  </Section>
)
