import React from 'react'
import { Helmet } from 'react-helmet'
import s from 'styled-components'

import UA_President from '../../../components/2019/NEC/UA_President'

const Footer = s.footer`
  max-width: 1200px;
  margin: 20px auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 20px 15px;
  }
`

const Wrapper = s.div`
  font-size: 100%;
  padding: 0;
  margin: 0;
  font-family: 'neuzeit-grotesk', sans-serif;
	background: #F9F9F9;
`

const Intro = s.div`
  max-width: 900px;
  margin: 60px auto;
  text-align: center;

  h1 {
    font-size: 2.5em;
    margin: 10px 0;
    font-weight: 700;
    color: #aa1e22;
  }

  h3 {
    margin: 0;
    font-weight: 400;
    color: #aa1e22;
  }

  p:last-of-type {
    margin-bottom: 40px;
  }
`

const NavBar = s.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 10px;
  background-color: #FFF;
  border-bottom: 1px solid #777;
  z-index: 200;

  img {
    height: 25px;
  }
`

const NavBarLink = s.a`
  display: flex;
  justify-content: center;
`


const Index = () => (
  <>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>NEC Candidate Center | The Daily Pennsylvanian</title>

      <meta property="og:title" content="NEC Candidate Center Spring 2019" />
      <meta property="og:image" content="https://snworksceo.imgix.net/dpn/cc71cb56-4feb-406c-b6a0-07b27aa36bf7.sized-1000x1000.png" />
      <meta property="og:description" content="Read about the candidates for UA and 2020, 2021, and 2022 Class Boards." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://projects.thedp.com/2019/03/NEC/" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="NEC Candidate Center Spring 2019" />
      <meta name="twitter:image" content="https://snworksceo.imgix.net/dpn/cc71cb56-4feb-406c-b6a0-07b27aa36bf7.sized-1000x1000.png" />
      <meta name="twitter:description" content="Read about the candidates for UA and 2020, 2021, and 2022 Class Boards." />
      <meta name="twitter:url" content="https://projects.thedp.com/2019/03/NEC/" />
      <meta name="twitter:site" content="@dailypenn" />
    </Helmet>

    <header>
      <NavBar>
        <NavBarLink href="https://www.thedp.com/">
          <img alt="The Daily Pennsylvanian" src="https://d1q35ni5859stt.cloudfront.net/20161213m1eLHQrMRG/dist/img/header-logo.svg" />
        </NavBarLink>
      </NavBar>
    </header>

    <Wrapper>
      <Intro>
        <h1>NEC Candidate Center</h1>
        <h3>Presented by The Daily Pennsylvanian</h3>
        <p>
          The Undergraduate Assembly is the elected, representative branch of student government at Penn, charged with improving life for all students through funding, services, and advocacy.
          The highest authority is the President of the student body, followed by the Vice President.
          The UA Vice President oversees UA Steering, a group of influential student groups on campus that meet to discuss issues pertaining to student life.
        </p>
        <p>
          The purpose of the four Class Boards is to provide social programming that instills a sense of class and school spirit, unity and pride, and breaks through social barriers.
          Each class popularly elects a president, executive vice president, vice president for internal affairs, vice president for external affairs, vice president for finance, and class chairs.
        </p>
        <a href="https://www.pennstudgov.com" target="_blank" class="vote-btn">Vote Here</a>
      </Intro>

      <UA_President />

    </Wrapper>

    <Footer>
			<hr />
			Made with ♡ by The Daily Pennsylvanian. © 2019. All rights reserved.
		</Footer>
  </>
)

export default Index