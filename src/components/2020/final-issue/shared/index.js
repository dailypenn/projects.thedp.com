import React from 'react'
import s from 'styled-components'
import {
  FUTURA_REGULAR,
  LORA_REGULAR,
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

export const SectionHeader = s.h1`
  color: #032FB7;
  margin: 1em;
  text-align: center;
`

export const ArticleHeader = s.h3`
  ${FUTURA_REGULAR}
  line-height: 1.1;
  color: #032FB7;
  font-size: 2em;

  :hover {
    color: #707070;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const LargeArticleHeader = s.h3`
  ${FUTURA_REGULAR}
  font-size: 2em;
  line-height: 1.1;

  :hover {
    color: #707070;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const ArticleDescription = s.p`
  ${LORA_REGULAR}
  font-size:1em;
  line-height:1.1em;
`

export const ArticleAuthor = s.p`
  ${FUTURA_REGULAR}
  text-transform: uppercase;
`

export const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`
