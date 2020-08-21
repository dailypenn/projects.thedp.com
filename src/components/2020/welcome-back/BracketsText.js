import React from 'react'
import s from 'styled-components'

import { SUBHEAD_LIGHT_GRAY } from '../../../utils/colors'
import { KARLA_REGULAR, KARLA_BOLD } from '../../../utils/font'
import { StyledAnchor } from './Typograph'

const Wrapper = s.div`
  padding: 0 15rem;
  marginTop: 2rem;

  @media (max-width: 768px) {
    padding: 0rem;
  }
`

const Brackets = s.div`
  color: ${SUBHEAD_LIGHT_GRAY};
  font-size: 80%;
  ${KARLA_REGULAR}

  background-image:
    linear-gradient(${({ bracketColor }) => bracketColor}, ${({ bracketColor }) => bracketColor}),
    linear-gradient(${({ bracketColor }) => bracketColor}, ${({ bracketColor }) => bracketColor}),
    linear-gradient(${({ bracketColor }) => bracketColor}, ${({ bracketColor }) => bracketColor}),
    linear-gradient(${({ bracketColor }) => bracketColor}, ${({ bracketColor }) => bracketColor});

  background-repeat: no-repeat;
  background-size: 8px 2px;
  background-position: top left, top right, bottom left, bottom right;

  border: solid ${({ bracketColor }) => bracketColor};
  text-align: center;
  border-width: 0 2px;
  display: inline-block;
  vertical-align: top;
  padding: 5px 2rem;
  margin: 20px;
`

const HereLink = s.text`
  color: ${({ bracketColor }) => bracketColor};
  ${KARLA_BOLD}

  :hover {
    color: ${SUBHEAD_LIGHT_GRAY};
  }
`

const BracketsText = ({ text, bracketColor, link }) => (
  <Wrapper>
    <Brackets bracketColor={bracketColor}>
      {text}
      <br />
      <br />
      Let us know you're interested in joining
      <StyledAnchor href={link} target="_blank">
        <HereLink bracketColor={bracketColor}> here. </HereLink>
      </StyledAnchor>
    </Brackets>
  </Wrapper>
)

export default BracketsText