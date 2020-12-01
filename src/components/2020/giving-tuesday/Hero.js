import React from 'react'
import { Container, Row } from 'react-bootstrap'
import s from 'styled-components'

import { GOPHER_REGULAR } from '../../../utils/font'

import Arrow from '../../../content/images/2020/giving-tuesday/arrow.gif'
const HEADER = `https://s3.amazonaws.com/snwceomedia/dpn/9d4051bc-8350-4343-9ee9-8887455bf3b6.original.gif`

const Section = s.div`
    background-color: #131313;
    padding-bottom: 50px;
`

const DownArrow = s.img`
    width: 4vw;
`

const HeroLink = s.a`
    ${GOPHER_REGULAR}
    font-size: 2vw;
    color: white !important;
`

export default () => (
    <Section>
        <img src={HEADER} className="img-fluid" />
        <Container className="container-fluid">
            <Row>
                <HeroLink className="mx-auto">ALWAYS HERE</HeroLink>
                <HeroLink className="mx-auto">ALWAYS THERE</HeroLink>
                <HeroLink className="mx-auto">ALWAYS THE DP</HeroLink>
            </Row>
        </Container>
        <br />
        <Row>
            <DownArrow src={Arrow} className="mx-auto" />
        </Row>
        <br />
        <br />
    </Section>
)
