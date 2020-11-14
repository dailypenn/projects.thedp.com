import React from "react"
import s from "styled-components"
import { Col } from "react-bootstrap"
import { FUTURA_REGULAR, CANELA_REGULAR } from "../../../../utils/font"

export const VerticalCol = s(Col).attrs(() => ({
  className: "my-auto"
}))``

export const SectionHeader = s.h2`
  text-align: center;
  font-family: 'Tenor Sans', sans-serif;
  font-weight: 400;
  font-size: 10vw;
  letter-spacing: 0.6rem;
  margin-bottom: 2vw;
`

  export const Title = s.p`
  ${({ right, left }) => {
    if (right) return `text-align: right`;
    if (left) return `text-align: left`;
    return `text-align: center`
  }};
  ${CANELA_REGULAR}
  ${({ inline }) => inline && 'display: inline;'}
  color: black;
  margin-top: 1.4rem;
  font-size: 1.1em;
  line-height: 1.1;
  ${({ larger }) => larger && ' font-size: 1.5em;'}
`

export const Author = s.p`

  ${({ right, left }) => {
    if (right) return `text-align: right`;
    if (left) return `text-align: left`;
    return `text-align: center`
  }};
  ${({ inline }) => inline && 'display: inline;'}
  ${FUTURA_REGULAR}
  color: black;
  margin-top: .5rem;
  font-size: 0.7em;
`
