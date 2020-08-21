import React from 'react'
import s from 'styled-components'

const Wrapper = s.div`
  margin: 0;
  padding: 0;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    width: 100vw;
  }

  .left, .right {
    width: 50vw;
    overflow: hidden;
    display: inline-block;
  }

  .left {
    color:pink;
    transform: skew(0deg, -15deg);
  }

  .right {
    color: black;
    transform: skew(0deg, 15deg);
  }

  .left .content {
    width: 100vw;
    text-align: center;
  }

  .right .content {
    width: 100vw;
    text-align: center;
    transform: translate(-50vw);
  }

  span {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 10vw;
    text-transform: uppercase;
    line-height: .8;
    transition: ease-out .6s;
  }
`

const SlidingText = () => (
  <Wrapper>
    <div className="line">
      <div className="left">
        <div className="content">
          <span className="spanSlow">WELCOME</span>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <span className="spanSlow">WELCOME</span>
        </div>
      </div>
    </div>
    <div className="line">
      <div className="left">
        <div className="content">
          <span className="spanFast">BACK</span>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <span className="spanFast">BACK</span>
        </div>
      </div>
    </div>
  </Wrapper>
)

export default SlidingText