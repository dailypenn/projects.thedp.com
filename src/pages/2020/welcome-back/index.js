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
import { StyledAnchor } from '../../../components/2020/welcome-back/Typograph'

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
  margin: 4rem 0;
  padding: 0;

  @media(max-width: 849px) {
    display: none!important;
  }
`

const MobileAd = s.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
  padding: 0;

  @media(min-width: 850px) {
    display: none!important;
  }
`

const NewsLetterWrapper = s.div`
  .newsletter {
    justify-content: center;
    margin-top: 4rem;
    padding: 0 15rem;

    @media(max-width: 768px) {
      padding: 0 2rem;
    }
  }
`

const NewsLetter = s.img`
  :hover { 
    opacity: 70%;
  }
`

const IndexPage = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Your guide for navigating this unprecedented virtual school year" />
      <title>Welcome Back | The Daily Pennsylvanian</title>
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      
      <meta property="og:title" content="Welcome Back | The Daily Pennsylvanian" />
      <meta property="og:image" content="https://snworksceo.imgix.net/dpn/1fe2ce10-46fa-402e-a9f2-498cc011769b.sized-1000x1000.jpg" />
      <meta property="og:description" content="Your guide for navigating this unprecedented virtual school year" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://projects.thedp.com/2020/welcome-back" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Welcome Back | The Daily Pennsylvanian" />
      <meta name="twitter:image" content="https://snworksceo.imgix.net/dpn/1fe2ce10-46fa-402e-a9f2-498cc011769b.sized-1000x1000.jpg" />
      <meta name="twitter:description" content="Your guide for navigating this unprecedented virtual school year" />
      <meta name="twitter:url" content="https://projects.thedp.com/2020/welcome-back" />
      <meta name="twitter:site" content="@dailypenn"></meta>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
    </Helmet>

    <NavBar />

    <SlidingText />

    <Featured />

    <WordWithLine word="NEWS" />

    <News />

    
    <StyledAnchor href="https://www.thedp.com/page/subscribe-dear-penn" target="_blank">
      <NewsLetterWrapper>
        <div className="row newsletter">
          <div className="col">
            <NewsLetter src="/img/newsletter.png" className="img-fluid" />
          </div>
        </div>
      </NewsLetterWrapper>
    </StyledAnchor>

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

    <WordWithLine word="SPORTS" />
    <Sports />

    

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

    <Street />

    <UTB />

    <Credit> Made with <span role="img"> 🎒</span> by The Daily Pennsylvanian © 2020. All rights reserved.  </Credit>
  </>
)

export default IndexPage
