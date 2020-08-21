import React from 'react'
import { DFPSlotsProvider, AdSlot } from 'react-dfp'
import s from 'styled-components'
import { Helmet } from 'react-helmet'

import NavBar from '../../../components/2020/welcome-back/Nav'
import SlidingText from '../../../components/2020/welcome-back/SlidingText'
import WordWithLine from '../../../components/2020/welcome-back/WordWithLine'
import UTB from '../../../components/2020/welcome-back/UTB'
import Street from '../../../components/2020/welcome-back/Street'

import Featured from '../../../components/2020/welcome-back/Featured'
import News from '../../../components/2020/welcome-back/News'
import Opinion from '../../../components/2020/welcome-back/Opinion'
import Sports from '../../../components/2020/welcome-back/Sports'

import { ROBOTO_REGULAR } from '../../../utils/font'
import { HEADLINE_DARK_GRAY } from '../../../utils/colors'

const Credit = s.div`
  background: ${HEADLINE_DARK_GRAY};
  color: #FFFFFF;
  ${ROBOTO_REGULAR}
  padding: 1rem;
  font-size: 80%;
  margin-top: 2rem;
  text-align: center;
`

const DesktopAd = s.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0;

  @media(max-width: 849px) {
    display: none!important;
  }
`

const MobileAd = s.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0;

  @media(min-width: 850px) {
    display: none!important;
  }
`

const IndexPage = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Welcome Back | The Daily Pennsylvanian</title>
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      <meta property="og:title" content="Welcome Back | The Daily Pennsylvanian" />
      <meta property="og:image" content="[this should generally be a link from our CMS]" />
      <meta property="og:description" content="[description]" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://projects.thedp.com/2020/welcome-back" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Welcome Back | The Daily Pennsylvanian" />
      <meta name="twitter:image" content="[this should generally be a link from our CMS]" />
      <meta name="twitter:description" content="[description, less than 200 characters]" />
      <meta name="twitter:url" content="https://projects.thedp.com/2020/welcome-back" />
      <meta name="twitter:site" content="@dailypenn"></meta>
    </Helmet>

    <NavBar />

    {/* <SlidingText /> */}

    <Featured />

    <WordWithLine word="NEWS" />

    <News />

    <DesktopAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-Leaderboard" sizes={[[728, 90]]} />
      </DFPSlotsProvider>
    </DesktopAd>
    <MobileAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-mobile-leaderboard" sizes={[[320, 50]]} />
      </DFPSlotsProvider>
    </MobileAd>

    <WordWithLine word="OPINION" />

    <Opinion />

    <Street />

    <DesktopAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-Leaderboard" sizes={[[728, 90]]} />
      </DFPSlotsProvider>
    </DesktopAd>
    <MobileAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-mobile-leaderboard" sizes={[[320, 50]]} />
      </DFPSlotsProvider>
    </MobileAd>

    <WordWithLine word="SPORTS" />
    <Sports />

    <UTB />

    <Credit> Made with <span role="img"> 🎒</span> by The Daily Pennsylvanian © 2020. All rights reserved.  </Credit>
  </>
)

export default IndexPage
