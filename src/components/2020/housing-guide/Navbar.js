import React from 'react'
import {
  Navbar as UnstyledWrapper,
} from "react-bootstrap"
import s from 'styled-components'

const Image = s.img.attrs(() => ({
  className: "header"
}))`
  width: 250px;
  max-height: 90px;

  @media (max-width: 768px) {
    max-height: 30px;
  }
`

// TODO: Consolidate constants
const WHITE = "#FFFFFF";

const Wrapper = s(UnstyledWrapper)
  .attrs(() => ({
    sticky: "top",
    expand: "lg"
  }))
`
  background-color: ${WHITE};
  box-shadow: 0px 5px 6px #00000029;
  opacity: 1;
  text-align: center;
  padding 0.5rem 1rem;
`

export const Navbar = () => (
  <Wrapper>
    <a href="https://www.thedp.com" className="mx-auto" target="_blank">
      <Image src="/img/DP-Logo-Full.png"  alt="The Daily Pennsylvanian" />
    </a>
  </Wrapper>
)
