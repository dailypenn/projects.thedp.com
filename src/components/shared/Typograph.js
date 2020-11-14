import s from "styled-components"

import { PLAYFAIR_BOLD, GEORGIA_REGULAR } from "../../utils/font"

export const StyledLink = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

export const NavText = s.text`
  font-size: 80%;
  ${({font}) => font || `font-family: 'Libre Franklin', sans-serif;`}
  color: #283033;

  transition: 0.3s;

  :hover {
    color: #B5B4B4;
    transition: 0.3s;
  }
`

export const HeadlineText = s.div`
  margin-top: ${({ topMargin = "1.5rem" }) => topMargin};
  color: ${({ color = "#283033" }) => color};
  ${PLAYFAIR_BOLD}
  font-size: ${({ sideArticle }) => (sideArticle ? "100%" : "150%")};
  line-height: 1.2;
`

export const AbstractText = s.div`
  margin-top: 0.5rem;
  color: ${({ color = "#707070" }) => color};
  ${GEORGIA_REGULAR}

  @media (max-width: 768px) {
    ${({ multimedia }) => (multimedia ? "display: none" : "")}
  }
`

export const TimestampText = s.div`
  margin-top: 0.5rem;
  color: ${({ color = "#696969" }) => color};
  font-family: 'Roboto', sans-serif;
  font-size: 85%;
`

export const Title = s.div`
  border-left: 12px solid #D12D4A;
  padding: 0rem 1rem;
  text-align: left;
  font-size: 30px;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 900;
  letter-spacing: 0px;
  color: #283033;
  opacity: 1;
`

export const TagText = s.div`
  margin-top: ${({ topMargin = "0.5rem" }) => topMargin};
  color: ${({ color = "#B5B4B4" }) => color};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ fontSize = "100%" }) => fontSize};
  ${({ weightLight }) => (weightLight ? "font-weight: 300;" : "")}
`
