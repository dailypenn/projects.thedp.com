import React from "react"
import { DFPSlotsProvider, AdSlot } from "react-dfp"
import s from "styled-components"

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

const Ads = () => (
  <>
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
  </>
)

export default Ads
