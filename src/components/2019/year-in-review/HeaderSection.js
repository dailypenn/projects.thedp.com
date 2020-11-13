import React from "react"
import s from "styled-components"
import { WHITE } from "./Typography"
import { OPEN_SANS_REGULAR, DM_SERIF_DISPLAY_BOLD } from "../../../utils/font"

const Wrapper = s.section`
    height: calc(100vh - 150px);
    background-color: ${WHITE};
    ${DM_SERIF_DISPLAY_BOLD}
    color: black;
    align-items: center;
    justify-content: center;
`

const Header = s.h1`
  text-align: center;
  font-size: 116px;
`

const SubHeader = s.h2`
  text-align: center;
  font-size: 68px;
`

const Description = s.p`
  max-width: 500px;
  margin: 20px auto 0px;
  text-align: center;
  font-size: 14px;
  ${OPEN_SANS_REGULAR}
`

export const HeaderSection = () => (
  <Wrapper className="header-section d-flex flex-column">
    <Header>2019</Header>
    <SubHeader>
      Year <em>in</em> Review
    </SubHeader>
    <Description>
      2019 at Penn was a year to remember. This year saw Penn take center stage
      in national news, when former Penn men’s basketball coach Jerome Allen was
      ensnared in the college admissions scandal and when two former Penn
      professors launched their presidential campaigns. On campus, students
      challenged the administration on multiple fronts. Fossil Free Penn
      demanded climate action at a Board of Trustees meeting, students protested
      Penn Law professor Amy Wax’s controversial comments, and a petition
      postponed the renaming of Penn Law. Take a look back at this year’s most
      defining moments with The Daily Pennsylvanian’s Year in Review.
    </Description>
  </Wrapper>
)
