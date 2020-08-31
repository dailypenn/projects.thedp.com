import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import { NavText } from '../../shared'


{/* <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbar10">
                <ul class="navbar-nav nav-fill w-100">
                    <li class="nav-item">
                        <a class="nav-link active" href="#news">NEWS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#opinion">OPINION</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#sports">SPORTS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#street">STREET</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#multimedia">MULTIMEDIA</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> */}

const Nav = s.div`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    display: flex;
    max-height: 36px;
    background-color: #E7525F;
`

const NavBar = () => {
  return (
    <Nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
    >
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                <span className="navbar-toggler-icon"></span>
          </button>
            <div className="navbar-collapse collapse" id="navbar10">
                <ul className="navbar-nav nav-fill w-100">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#news">NEWS</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#opinion">OPINION</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#sports">SPORTS</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#street">STREET</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#multimedia">MULTIMEDIA</Link>
                    </li>
                </ul>
            </div>
      </div>
    </Nav>
  )
}

export default NavBar