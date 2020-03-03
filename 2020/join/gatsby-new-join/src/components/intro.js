import React from 'react'
import styled from 'styled-components'

const IntroStyle = styled.section`
  display: flex;
  justify-content: center;
  background: linear-gradient(transparent, transparent, #000), url('https://snworksceo.imgix.net/dpn/0f26a007-001d-4745-8088-7db4e3297602.sized-1000x1000.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 150px);
`;

const IntroText = styled.div`
  color: #FFF;
  text-align: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
`;

const Intro = () => (
  <IntroStyle>
    <IntroText>
      <h1>The Daily Pennsylvanian, Inc.</h1>
      <h3> Your campus compass. Join us and find your direction.</h3>
      <a href="#apply"><div className="join-button">Join Now</div></a>
    </IntroText>
  </IntroStyle>
)

export default Intro