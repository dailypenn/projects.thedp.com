import { Row, Col } from 'react-bootstrap'
import s from 'styled-components'

export const RowWithPadding = s(Row)`
  padding: ${({ paddingTB = '0' }) => paddingTB}rem ${({ padding = '10' }) =>
  padding}rem;
  margin: ${({ marginTB = '0' }) => marginTB}rem 0;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const CenteredCol = s(Col)`
  align-self: center;
`
export const LCol = s(Col)`
  padding-left:0 !important;
  @media screen and (max-width: 720px) {
    padding: 0 1rem !important;
  }
`
export const RCol = s(Col)`
  padding-right:0 !important;
  @media screen and (max-width: 720px) {
    padding: 0 1rem !important;
  }
`
