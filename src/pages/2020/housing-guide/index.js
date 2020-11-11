import React from 'react'
import s from 'styled-components'

import { Helmet } from 'react-helmet'
import { Col, Container, Row } from 'react-bootstrap'
import { DFPSlotsProvider, AdSlot } from 'react-dfp'

import {
  Card,
  Header,
  Hero,
  Navbar
} from "../../../components/2020/housing-guide";

import Thumbnail from '../../../content/images/2020/housing-guide/hero.png'

const WHITE = `#FFFFFF`;
const ORANGE = `#F29F4D`;

const Metadata = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Housing Guide 2020 | The Daily Pennsylvanian</title>

    <meta property="og:title" content="Housing Guide 2020 | The Daily Pennsylvanian" />
    <meta property="og:image" content={Thumbnail} />
    <meta property="og:description" content="Your guide to living at Penn" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://projects.thedp.com/2020/housing-guide/" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Housing Guide 2020 | The Daily Pennsylvanian" />
    <meta name="twitter:image" content={Thumbnail} />
    <meta name="twitter:description" content="Your guide to living at Penn" />
    <meta name="twitter:url" content="https://projects.thedp.com/2020/housing-guide/" />
    <meta name="twitter:site" content="@dailypenn" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
  </Helmet>
)

const Section = s.section`
    padding-top: 60px;
    padding-bottom: 60px;
`

const SpacedRow = s(Row)`
    margin-top: 50px;
`

// TODO: Extract out add component for DP usage
export default () => <>
  <Metadata />
  <Navbar />
  <Hero />
  <Section>
    <Container>
      <Card padding>
        <Row>
          <Header>
            Explainers
          </Header>
        </Row>

        <SpacedRow>
          <Col>
            <Card padding>
              wowowow
            </Card>
          </Col>
          <Col>
            <DFPSlotsProvider dfpNetworkId="12234093">
              <AdSlot adUnit="DP.com-Leaderboard" sizes={[[300, 200]]} />
            </DFPSlotsProvider>
            <DFPSlotsProvider dfpNetworkId="12234093">
              <AdSlot adUnit="DP.com-Leaderboard" sizes={[[300, 200]]} />
            </DFPSlotsProvider>
          </Col>
        </SpacedRow>
      </Card>
    </Container>
  </Section>
</>;
