import React from 'react'
import s from 'styled-components'
import { useStaticQuery, graphql, Link as NavLink } from 'gatsby'
import Img from 'gatsby-image'

import { NavText } from '../../shared'
import { TENOR_SANS_REGULAR } from '../../../utils/font'

const ImgLink = s.a`
  max-height: 90px;
  width: 100%;
  @media (max-width: 768px) {
    max-height: 30px;
  }
`

const StyledNavText = props => (
  <NavText {...props} font={TENOR_SANS_REGULAR}>
    {props.children}
  </NavText>
)

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

export const Navbar = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "street-logo-black.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
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
          <li className="nav-item active">
            <NavLink className="nav-link" to="#features">
              {' '}
              <StyledNavText>FEATURES</StyledNavText>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#ego">
              {' '}
              <StyledNavText>EGO</StyledNavText>{' '}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#hot-takes">
              {' '}
              <StyledNavText>HOT TAKES</StyledNavText>{' '}
            </NavLink>
          </li>
        </LeftUL>
      </div>
      <div
        className="mx-auto my-2 order-0 order-md-1 position-relative"
        style={{ textAlign: 'center' }}
      >
        <ImgLink className="mx-auto" href="https://www.thedp.com/">
          <Img fixed={logo.childImageSharp.fixed} alt="34st Street" />
        </ImgLink>

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
          <li className="nav-item">
            <NavLink className="nav-link" to="#art">
              {' '}
              <StyledNavText>ART</StyledNavText>{' '}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#watching-listening">
              {' '}
              <StyledNavText>WATCHING &amp; LISTENING</StyledNavText>{' '}
            </NavLink>
          </li>
        </RightUL>
      </div>
    </nav>
  )
}
