import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { FUTURA_REGULAR, CANELA_REGULAR } from '../../../../utils/font'

export const VerticalCol = s(Col).attrs(() => ({
  className: 'my-auto',
}))``

export const SectionHeader = s.h2`
  text-align: center;
  font-family: 'Tenor Sans', sans-serif;
  font-weight: 400;
  font-size: 12vw;
  letter-spacing: 0.6rem;
  margin-bottom: 2rem;
`

export const Title = s.p`
  ${({ right, left }) => {
    if (right) return `text-align: right`
    if (left) return `text-align: left`
    return `text-align: center`
  }};
  ${CANELA_REGULAR}
  ${({ inline }) => inline && 'display: inline;'}
  color: black;
  margin-top: 2rem;
  font-size: 1.1em;
  line-height: 1.1;
  ${({ larger }) => larger && 'font-size: 2em;'}
`

export const Author = s.p`
  ${({ right, left }) => {
    if (right) return `text-align: right`
    if (left) return `text-align: left`
    return `text-align: center`
  }};
  ${({ inline }) => inline && 'display: inline;'}
  ${FUTURA_REGULAR}
  color: black;
  font-size: 0.7em;
`
export const StyledRow = s(Row)`
  padding: 0 ${({ padding }) => padding}rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`
export const Wrapper = s.div`
  margin: 4rem 0;
`

export const ColWithMargin = s(Col)`
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`