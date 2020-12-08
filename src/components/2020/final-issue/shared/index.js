import s from 'styled-components'
import {
  FUTURA_REGULAR,
  FUTURA_BOLD,
} from '../../../../utils/font'

export const Wrapper = s.div`
  .main {
    margin: 2rem 5rem 0 5rem;
    padding-left: 15%;
    @media (max-width: 768px) {
      margin: 2rem 1rem 0 1rem;
      padding: 1em;
    }
  }
`

export const GreenSectionHeader = s.p`
  ${FUTURA_BOLD}
  letter-spacing: 1.6px;
  color: #639E7D;
  text-transform: uppercase;
`