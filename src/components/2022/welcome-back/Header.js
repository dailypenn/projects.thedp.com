import React from 'react'
import s from 'styled-components'
import Fade from 'react-reveal/Fade'

import headerImage from '../../../content/images/2022/welcome-back/header.png'

const Wrapper = s.div`
  padding: 0;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`

const HeaderImage = s.div`
  background-image: url(${headerImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: min(55vw, 88vh);
`

const Header = () => (
  <Wrapper>
    <Fade top duration={500}>
      <HeaderImage/>
    </Fade>
  </Wrapper>
)

export default Header
