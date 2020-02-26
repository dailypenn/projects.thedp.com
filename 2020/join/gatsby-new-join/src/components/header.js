import React from "react"
import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #000;
`;

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <header>
      <a href="https://www.thedp.com" target="_blank" rel="noopener noreferrer">
        <img src="https://snworksceo.imgix.net/dpn/d2453b29-fc87-458c-b226-ece3042946bb.sized-1000x1000.png" alt="The Daily Pennsylvanian" width="250" className="logo"/>
      </a>
    </header>
  </HeaderStyle>
)

export default Header