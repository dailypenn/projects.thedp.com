import React from 'react'
import s from 'styled-components'
import { Col } from 'react-bootstrap'

import { RowWithPadding } from '../../shared'
import { GOPHER_BOLD, GOPHER_MEDIUM } from '../../../utils/font'
import { Header, PINK, CenteredButton, BLACK, WHITE } from './shared'

const Wrapper = s.div`
  background-color: ${PINK};
`

const Video = s.iframe`
  height: 400px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`

const Subheading = s.div`
  ${GOPHER_BOLD};
  font-size: 1.4em;
  color: ${BLACK};
`

const AlwaysHereText = s.div`
  ${GOPHER_MEDIUM}
  font-size: 0.9em;
  color: ${WHITE};
  margin-top: 15px;
`

const TextWrapper = s.div`
  line-height: 1.3rem;
`

const HCenterCol = s(Col)`
  display: flex;
  justify-content: center;
`

const AlwaysHere = () => (
  <Wrapper id="always-here">
    <Header title="ALWAYS HERE" />
    <RowWithPadding padding="5">
      <HCenterCol sm={12} md={7}>
        <Video
          width="90%"
          src="https://www.youtube.com/embed/39BO5V3SQIY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </HCenterCol>
      <Col sm={12} md={5} style={{ marginTop: '2rem' }}>
        <TextWrapper>
          <Subheading>
            JOIN THE GLOBAL GENEROSITY MOVEMENT ON #GIVINGTUESDAY
          </Subheading>
          <AlwaysHereText>
            For close to 140 years the Daily Pennsylvanian has been a news
            publication, a Penn student activity and a life-changing educational
            non-profit organization. Our organization has always and continues
            to be driven by our student staff’s dedication and determination to
            deliver news, content and information, unfiltered, to the Penn
            community. Supporting the DP today will help to ensure that
            tradition and sustain our legacy of providing Penn students with
            transformational experiences for generations to come.
          </AlwaysHereText>
          <AlwaysHereText>
            All dollars raised today will go directly to our students through
            scholarships, financial assistance, internships, training, resources
            and tools.
          </AlwaysHereText>
        </TextWrapper>
      </Col>
    </RowWithPadding>
    <CenteredButton
      text="donate"
      bgColor={BLACK}
      textColor={WHITE}
      posCenter
      width="10"
    />
  </Wrapper>
)

export default AlwaysHere
