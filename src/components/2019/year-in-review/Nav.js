import React from "react"
import s from "styled-components"
import { Link } from "gatsby"
import { ROUGE_RED } from "./Typography"
import { OPEN_SANS_BOLD } from "../../../utils/font"

const Nav = s.div`
    ${OPEN_SANS_BOLD}  
    display: flex;
    max-height: 36px;
    background-color: ${ROUGE_RED};
`

export const NavBar = () => (
  <Nav className="navbar navbar-expand-lg navbar-dark sticky-top">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar10"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar10">
        <ul className="navbar-nav nav-fill w-100">
          <li className="nav-item active" to="#news">
            <Link className="nav-link" to="#news">
              NEWS
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#opinion">
              OPINION
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#sports">
              SPORTS
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#street">
              STREET
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#multimedia">
              MULTIMEDIA
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
)
