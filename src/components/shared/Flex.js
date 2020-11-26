import { Row, Col } from 'react-bootstrap'
import s from 'styled-components'

export const RowWithPadding = s(Row)`
  padding: 0 ${({ padding = '10' }) => padding}rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`