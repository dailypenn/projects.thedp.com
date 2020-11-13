import React from "react"
import s from "styled-components"
import {
  RADIANT_REGULAR,
  FUTURA_REGULAR,
  LORA_REGULAR,
  FUTURA_BOLD,
} from "../../../../utils/font"

export const Wrapper = s.div`
  padding: 0 10rem;
  margin-top: 8rem;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    margin-top: 4rem;
  }
`

const H2 = s.h2` 
  text-align: center; 
  border-bottom: 4px solid ${({ lineColor }) => lineColor}; 
  line-height: 0.1em;
  margin: 3rem -1rem;
  font-size: 4em;
  letter-spacing: -2px;
  ${RADIANT_REGULAR}

  span {
    background: #fff; 
    padding: 0 0px; 
  }
`

export const WordWithLine = ({ word, lineColor }) => (
  <H2 lineColor={lineColor} className="divider">
    <span>{word}</span>
  </H2>
)

export const ArticleHeader = s.h3`
  ${FUTURA_REGULAR}
  font-size: 1.5em;
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

export const RedSectionHeader = s.p`
  ${FUTURA_BOLD}
  letter-spacing: 1.6px;
  color: #F05237;
  text-transform: uppercase;
`
