import s from 'styled-components'

import { PLAYFAIR_REGULAR, KARLA_REGULAR, KARLA_BOLD } from '../../../utils/font'
import { HEADLINE_DARK_GRAY, SUBHEAD_LIGHT_GRAY } from '../../../utils/colors'

export const Title = s.div`
  font-size: 150%;
  margin-top: ${({ noMarginTop }) => noMarginTop ? '0' : '1.5rem'};
  color: ${HEADLINE_DARK_GRAY};
  ${PLAYFAIR_REGULAR}
`

export const Description = s.div`
  font-size: 100%;
  margin-top: 1.5rem;
  color: ${SUBHEAD_LIGHT_GRAY};
  ${KARLA_REGULAR}
`

export const ByLine = s.div`
  font-size: 80%;
  margin-top: 1.5rem;
  color: #B5B4B4;
  ${KARLA_BOLD}
`

export const Tag = s.div`
  font-size: 80%;
  margin-top: ${({ noMarginTop }) => noMarginTop ? '0' : '1.5rem'};
  color: #D0C730;
  ${KARLA_BOLD}
`