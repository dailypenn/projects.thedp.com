import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import s from 'styled-components'

import { Gift } from '../../../components/2021/masthead-madness/Gift'
import { GiftCenter } from '../../../components/2021/masthead-madness/GiftCenter'
import { HowToPlay } from '../../../components/2021/masthead-madness/HowToPlay'
import { Logo } from '../../../components/2021/masthead-madness/Logo'
import { Movie } from '../../../components/2021/masthead-madness/Movie'
import Scoreboard from '../../../components/2021/masthead-madness/Scoreboard'
import { SmackTalk } from '../../../components/2021/masthead-madness/SmackTalk'
import SectionHeader from '../../../components/2021/masthead-madness/SectionHeader'

import dp_memories from '../../../content/images/2021/masthead-madness/dp_memories.png'
import gift_center from '../../../content/images/2021/masthead-madness/gift_center.png'
import help from '../../../content/images/2021/masthead-madness/help.png'
import how_to_play from '../../../content/images/2021/masthead-madness/how_to_play.png'
import scoreboards from '../../../content/images/2021/masthead-madness/scoreboards.png'
import smack_talk_shout_outs from '../../../content/images/2021/masthead-madness/smack_talk_shout_outs.png'

const BLUE = '#000F33'
const MED_RED = '#A01F35'
const RED = '#AC3B4E'

const Metadata = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Masthead Madness" />
    <title>Masthead Madness | The Daily Pennsylvanian</title>

    <meta
      property="og:title"
      content="Masthead Madness | The Daily Pennsylvanian"
    />
    <meta
      property="og:image"
      content=""
     />
    <meta property="og:description" content="Masthead Madness" />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content="https://projects.thedp.com/2021/masthead-madness"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Masthead Madness | The Daily Pennsylvanian"
     />
    <meta
      name="twitter:image"
      content=""
    />
    <meta name="twitter:description" content="Masthead Madness" />
    <meta
      name="twitter:url"
      content="https://projects.thedp.com/2021/masthead-madness"
    />
    <meta name="twitter:site" content="@dailypenn"></meta>
  </Helmet>
)

const Section = s.section`
  padding-top: 60px;
  padding-bottom: 60px;
  ${({ background }) => background && `background-color: ${background}`}
`

const ButtonsRow = s.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  img {
    padding: 20px 20px 0 20px;
  }
  .MakeYourGift {
    margin-top: 100px;
  }
`

const MastheadMadness = () => {
  return (
    <>
      <Metadata />
      <Logo />
      <Section>
        <ButtonsRow>
          <Col sm={12} md={6}>
            <img src={how_to_play} />
            <img src={scoreboards} />
            <img src={gift_center} />
          </Col>
        </ButtonsRow>
        <ButtonsRow>
          <Col sm={12} md={6}>
            <img src={smack_talk_shout_outs} />
            <img src={dp_memories} />
            <img src={help} />
          </Col>
        </ButtonsRow>
        <Gift />
      </Section>

      <SectionHeader text="GRAND TOTAL MONEY RAISED FOR STUDENT JOURNALISM" color={BLUE} marginBottom="0" marginSides="14" />
      <SectionHeader text="$10,000 from ten players!" color={RED} marginBottom="7" flag="2" />

      <Movie />

      <SectionHeader text="SCOREBOARDS" color={MED_RED} marginBottom="7" flag="2" />
      <Scoreboard text="MOST DOLLARS RAISED" flag="2" />
      <Scoreboard text="MOST GIFTS MADE" flag="1" />

      <SectionHeader text="GIFT CENTER" color={BLUE} flag="1" />
      <GiftCenter />

      <SectionHeader text="SMACK TALK / SHOUT OUTS" color={MED_RED} flag="2" />
      <SmackTalk />

      <SectionHeader text="HOW TO PLAY" color={RED} flag="2" />
      <HowToPlay />

      <SectionHeader text="DP MEMORIES" color={BLUE} flag="1" />

      <SectionHeader text="SOCIAL MEDIA" color={MED_RED} flag="2" />

      <SectionHeader text="MEET THE TEAM" color={BLUE} flag="1" />
    </>
  )
}

export default MastheadMadness