import React, { useState } from 'react'
import Img from 'gatsby-image'
import s from 'styled-components'
import { Helmet } from 'react-helmet'

import { KARLA_REGULAR, KARLA_BOLD } from '../../../utils/font'
import { ClassButton, ToggleButton, VoteButton } from './Typograph'

const Footer = s.footer`
  max-width: 1200px;
  margin: 0 auto 20px auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 0 15px 20px 15px;
  }
`

const Wrapper = s.div`
  font-size: 100%;
  padding: 0;
  margin: 0;
  font-family: 'neuzeit-grotesk', sans-serif;
  background: #F5FAFA;
  
  h1, h2, h3, h4 {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

const Intro = s.div`
  max-width: 900px;
  margin: 60px auto 30px;
  text-align: center;
`

const NavBar = s.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 10px;
  background-color: #FFF;
  z-index: 200;

  img {
    height: 25px;
  }
`

const NavBarLink = s.a`
  display: flex;
  justify-content: center;
`

const Category = s.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
  justify-content: center;
`

const CategoryTitle = s.h2`
    text-align: center;
    font: normal normal normal 35px/41px Tenor Sans;
    letter-spacing: 0px;
    color: #17242A;
    margin-top: 3rem;
    text-transform: uppercase;
    opacity: 1;
`

const Candidate = s.div`
  width: 33%;
  padding: 10px 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

const Statement = s.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: 10px;
  letter-spacing: -0.45px;
  ${KARLA_REGULAR}
`

const Icon = s.a`
  margin: 5px 0;
`

const Icons = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CandidateName = s.h3`
  color: #3AAEA9;
  margin-top: 10px;
  ${KARLA_BOLD}
`

const CandidateImage = s(Img)`
  border-radius: 40px;
`

const Candidates = ({ people, title }) => {
  // candidate statement is shown if id in showSet
  const [showSet, setShowSet] = useState(new Set())
  const [showPoints, setShowPoints] = useState(new Set())

  const toggleShow = (id, statement) => {
    if (statement) {
      let newSet = new Set(showSet)
      if (newSet.has(id)) {
        newSet.delete(id)
        setShowSet(newSet)
      } else {
        newSet.add(id)
        setShowSet(newSet)
      }
    } else {
      let newSet = new Set(showPoints)
      if (newSet.has(id)) {
        newSet.delete(id)
        setShowPoints(newSet)
      } else {
        newSet.add(id)
        setShowPoints(newSet)
      }
    }
  }

  return (
    <>
      <CategoryTitle> {title} </CategoryTitle>
      <Category>
        {people.map(person => (
          <Candidate>
            {person.image && person.image.src && (
              <CandidateImage fluid={person.image.src.childImageSharp.fluid} />
            )}
            <CandidateName> {person.name} </CandidateName>
            <Icons>
              {/* replace with real social media links */}
              {person.facebook_url && (
                <Icon
                  href={person.facebook_url}
                  className="navbar-toggler collapsed"
                  target="_blank"
                  type="button"
                  data-toggle="collapse"
                  data-target=".dual-collapse2"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon">
                    <img src="/icons/facebook.svg" />
                  </span>
                </Icon>
              )}
              {person.instagram_handle && (
                <Icon
                  href={'https://instagram.com/' + person.instagram_handle}
                  className="navbar-toggler collapsed"
                  target="_blank"
                  type="button"
                  data-toggle="collapse"
                  data-target=".dual-collapse2"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon">
                    <img src="/icons/instagram.svg" />
                  </span>
                </Icon>
              )}
              {person.youtube_video_url && (
                <Icon
                  href={person.youtube_video_url}
                  className="navbar-toggler collapsed"
                  target="_blank"
                  type="button"
                  data-toggle="collapse"
                  data-target=".dual-collapse2"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon">
                    <img src="/icons/youtube.svg" />
                  </span>
                </Icon>
              )}
              {person.campaign_website && (
                <Icon
                  href={person.campaign_website}
                  className="navbar-toggler collapsed"
                  target="_blank"
                  type="button"
                  data-toggle="collapse"
                  data-target=".dual-collapse2"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon">
                    <img src="/icons/globe.svg" />
                  </span>
                </Icon>
              )}
            </Icons>
            <ToggleButton onClick={() => toggleShow(person.name, true)}>
              Introduction
              <span> {showSet.has(person.name) ? '↑' : '→'} </span>
            </ToggleButton>
            <Statement show={showSet.has(person.name)}>
              {' '}
              {person.introduction}{' '}
            </Statement>
            <ToggleButton onClick={() => toggleShow(person.name)}>
              Read Platform Points
              <span> {showPoints.has(person.name) ? '↑' : '→'} </span>
            </ToggleButton>
            <Statement show={showPoints.has(person.name)}>
              {person.platform_points.map((p, i) => (
                <p>
                  {i + 1}) {p}
                </p>
              ))}
            </Statement>
          </Candidate>
        ))}
      </Category>
    </>
  )
}

const Branches = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 30px;
`

const Filler = s.div`
    background: #3AAEA9 0% 0% no-repeat padding-box;
    border-radius: 67px;
    opacity: 1;
    text-align: center;
    padding: 30px;
    margin: 0 200px;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 5px;
      margin: 0;
    }
`

const Header = s.h1`
    font: normal normal normal 55px/65px Tenor Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    padding-top: 50px;
    text-transform: uppercase;
    opacity: 1;

    @media screen and (max-width: 768px) {
      font: normal normal normal 35px/45px Tenor Sans
    }
`

const SubHeader = s.p`
    font: italic normal 600 18px/22px Cormorant;
    letter-spacing: 0px;
    color: #17242A;
    margin: 10px 0 20px; 
    opacity: 1;
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px;
    @media screen and (max-width: 768px) {
      border-bottom: 0; 
      font: italic normal 600 16px/18px Cormorant;
    }
`
const SubHeaderText = s.span` 
    background: #3AAEA9; 
    padding: 0 10px; 
`

const IntroText = s.p`
    color: #707070;
    font-size: 15px;
    ${KARLA_REGULAR};
`
const Brackets = s.div`
  color: #707070;
  font-size: 80%;
  ${KARLA_REGULAR}

  background-image:
    linear-gradient(#2B7A77, #2B7A77),
    linear-gradient(#2B7A77, #2B7A77),
    linear-gradient(#2B7A77, #2B7A77),
    linear-gradient(#2B7A77, #2B7A77);

  background-repeat: no-repeat;
  background-size: 8px 2px;
  background-position: top left, top right, bottom left, bottom right;

  border: solid #2B7A77;
  text-align: center;
  border-width: 0 2px;
  display: inline-block;
  vertical-align: top;
  padding: 5px 2rem;
  margin: 20px;
`

const BracketsText = ({ text }) => (
  <Brackets>
    {text.map(p => (
      <IntroText>{p}</IntroText>
    ))}
  </Brackets>
)

const Section = ({ data }) => (
  <>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>NEC Candidate Center | The Daily Pennsylvanian</title>

      <meta property="og:title" content="NEC Candidate Center Fall 2022" />
      <meta
        property="og:image"
        content="https://snworksceo.imgix.net/dpn/24007398-2064-463e-bb03-129867d0db63.sized-1000x1000.png"
      />
      <meta
        property="og:description"
        content="Read about the candidates for UA and 2026 Class Boards."
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://projects.thedp.com/2022/fall/NEC/"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="NEC Candidate Center Fall 2022" />
      <meta
        name="twitter:image"
        content="https://snworksceo.imgix.net/dpn/24007398-2064-463e-bb03-129867d0db63.sized-1000x1000.png"
      />
      <meta
        name="twitter:description"
        content="Read about the candidates for UA and 2026 Class Boards."
      />
      <meta
        name="twitter:url"
        content="https://projects.thedp.com/2022/fall/NEC/"
      />
      <meta name="twitter:site" content="@dailypenn" />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
    </Helmet>
    <header>
      <NavBar
        style={{
          fontFamily: 'Libre Franklin',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 5px 6px #00000029',
          opacity: 1,
        }}
      >
        <NavBarLink href="https://www.thedp.com/">
          <img alt="The Daily Pennsylvanian" src="/img/DP-Logo-Full.png" />
        </NavBarLink>
      </NavBar>
    </header>

    <Wrapper>
      <Filler>
        <Header>NEC Candidate Center</Header>
        <SubHeader>
          <SubHeaderText>Presented by The Daily Pennsylvanian</SubHeaderText>
        </SubHeader>
      </Filler>
      <Intro>
        <div class="row">
          <div class="col-md-3 mb-3">
            <VoteButton>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>

              <span class="button--bubble__container">
                <a
                  target="_blank"
                  href="https://www.pennstudgov.com"
                  className="button button--bubble"
                >
                  Vote Here
                </a>
                <span class="button--bubble__effect-container">
                  <span class="circle top-left"></span>
                  <span class="circle top-left"></span>
                  <span class="circle top-left"></span>

                  <span class="button effect-button"></span>

                  <span class="circle bottom-right"></span>
                  <span class="circle bottom-right"></span>
                  <span class="circle bottom-right"></span>
                </span>
              </span>
            </VoteButton>
            {/* <VoteButton href="https://www.pennstudgov.com" target="_blank">VOTE HERE!</VoteButton> */}
          </div>
          <div class="col-md">
            <BracketsText
              text={[
                'The Undergraduate Assembly is the elected, representative branch of student government at Penn, charged with improving life for all students through funding, services, and advocacy. The highest authority is the President of the student body, followed by the Vice President. The UA Vice President oversees UA Steering, a group of influential student groups on campus that meet to discuss issues pertaining to student life.',
                'The purpose of the four Class Boards is to provide social programming that instills a sense of class and school spirit, unity and pride, and breaks through social barriers. Each class popularly elects a president, executive vice president, vice president for internal affairs, vice president for external affairs, vice president for finance, and class chairs.',
              ]}
            />
          </div>
        </div>
      </Intro>

      <Branches>
        <ClassButton to="/2022/NEC">Undergraduate Assembly</ClassButton>
        <ClassButton to="/2022/NEC/cb26">Class Board '26</ClassButton>
      </Branches>

      {Object.entries(data).map(([key, val]) => (
        <Candidates people={val} title={key.replace(/_/g, ' ')} />
      ))}
    </Wrapper>

    <Footer>
      <hr />
      Made with 💝 by The Daily Pennsylvanian. © 2022. All rights reserved.
    </Footer>
  </>
)

export default Section
