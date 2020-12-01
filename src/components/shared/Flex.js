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
