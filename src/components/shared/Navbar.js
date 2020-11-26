import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import { NavText } from './Typograph'

const Image = s.img`
  max-height: 90px;

  @media (max-width: 768px) {
    max-height: 30px;
  }
`
const LeftUL = s.ul`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const RightUL = s.ul`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

// titles: { left: [{ text, link }*], right: [{ text, link }*] }

export const NavBar = ({ titles }) => {
  const { left, right } = titles

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg"
      style={{
        fontFamily: 'Libre Franklin',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 5px 6px #00000029',
        opacity: 1,
      }}
    >
      <div className="navbar-collapse w-100 dual-collapse2 order-1 order-md-0 collapse">
        <LeftUL className="navbar-nav ml-auto text-center">
          {left.map(({ text, link }) => (
            <li className="nav-item">
              <Link className="nav-link" to={`#${link}`}>
                {' '}
                <NavText> {text} </NavText>
              </Link>
            </li>
          ))}
        </LeftUL>
      </div>
      <div
        className="mx-auto my-2 order-0 order-md-1 position-relative"
        style={{ textAlign: 'center' }}
      >
        <a className="mx-auto" href="https://www.thedp.com/">
          <Image src="/img/DP-Logo-Full.png" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon">
            <img
              src="/icons/menu.svg"
              style={{ transform: 'translate(0, 0.2rem)' }}
            />
          </span>
        </button>
      </div>
      <div className="navbar-collapse w-100 dual-collapse2 order-2 order-md-2 collapse">
        <RightUL className="navbar-nav mr-auto text-center">
          {right.map(({ text, link }) => (
            <li className="nav-item">
              <Link className="nav-link" to={`#${link}`}>
                {' '}
                <NavText> {text} </NavText>
              </Link>
            </li>
          ))}
        </RightUL>
      </div>
    </nav>
  )
}
