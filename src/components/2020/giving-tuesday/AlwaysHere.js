import React from 'react'
import s from 'styled-components'

import { Header, PINK, WHITE, BLACK } from './shared'
import { RowWithPadding } from '../../shared'
import { GOPHER_REGULAR, GOPHER_BOLD } from '../../../utils/font'
import { Row, Col } from 'react-bootstrap'

const Wrapper = s.div`
  background-color: ${PINK};
`
const Video = s.iframe`
  height: 600px;
  margin-left: 30px;
`
const Subheading = s.div`
  ${GOPHER_BOLD};
  font-size: 1.4em;
  color: ${BLACK};
`
const AlwaysHereText = s.div`
  ${GOPHER_REGULAR};
  font-size: 1em;
  color: ${WHITE};
  margin-top: 15px;
`
const TextWrapper = s.div`
  margin-right: 200px;
  line-height: 1.3rem;
`
const ButtonWrapper = s.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`
const DonateButton = s.div`
  text-transform: uppercase;
  background-color: ${BLACK};
  color: ${WHITE};
  text-align: center;
  padding: 0.5rem 3rem;
`
const AlwaysHere = () => (
  <Wrapper>
    <Header title="ALWAYS HERE" />
    <Row>
      <Col md={7}>
        <Video
          width="90%"
          src="https://www.youtube.com/embed/XqZsoesa55w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Col>
      <Col md={5}>
        <TextWrapper>
          <Subheading>
            JOIN THE GLOBAL GENEROSITY MOVEMENT ON #GIVINGTUESDAY
          </Subheading>
          <AlwaysHereText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper. Ipsum a arcu cursus vitae congue mauris. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Cursus euismod quis viverra nibh cras pulvinar. Velit euismod in pellentesque massa placerat duis ultricies. Pellentesque habitant morbi tristique senectus et netus. Euismod quis viverra nibh cras pulvinar mattis nunc. Risus in hendrerit gravida rutrum quisque non tellus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Arcu cursus vitae congue mauris rhoncus aenean vel. A condimentum vitae sapien pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet massa vitae tortor condimentum lacinia.
          </AlwaysHereText>
          <AlwaysHereText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellinar mattis nunc. Risus in hendrerit gravida rutrum quisque non tellus. Sc viverra nibh cras pulvinar mattis nunc. Risus in hendrerit gr congue mauris rhoncus aenean vel. A condimentum vitae sapien pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibavida rutrum quisque non tellus. Scelerisque mauris pellentesque pulvinar elerisque mauris pellentlementum nisi quis eleifend. Amet massa vitae tortor condimentum lacinia.
          </AlwaysHereText>
          <AlwaysHereText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellinar mattis nunc. Risus in hendrerit gravida rutrum quisque non tellus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Arcu cursus vitae congue mauris rhoncus aenean vel. A condimentum vitae sapien pellentesque habitant morbi. Aenean pharetra magna ac placerat vestibulum lectus mauris. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet massa vitae tortor condimentum lacinia.
          </AlwaysHereText>
        </TextWrapper>
      </Col>
    </Row>
    <ButtonWrapper>
      <DonateButton>DONATE</DonateButton>
    </ButtonWrapper>
  </Wrapper>
)

export default AlwaysHere


