import React from 'react'
import s from 'styled-components'

const Wrapper = s.div`
  margin-top: 5rem;
  padding: 0;

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
    color: #F3E700;
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
    font-weight: 900;
    font-size: 10vw;
    text-transform: uppercase;
    line-height: .8;
    transition: ease-out .6s;
  }
`

const SlidingText = () => (
  <Wrapper>
    <div>
          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">Welcome</span>
              </div>
            </div><div class="right">
              <div class="content">
                <span class="spanSlow">welcome</span>
              </div>
            </div>
          </div>
          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">back</span>
              </div>
            </div><div class="right">
              <div class="content">
                <span class="spanSlow">back</span>
              </div>
            </div>
            </div>
            {/* <div class="line">
                <div class="left">
                  <div class="content">
                    <span class="spanFast">you</span>
                  </div>
                </div><div class="right">
                  <div class="content">
                    <span class="spanFast">you</span>
                  </div>
                </div>
              </div>
              <div class="line">
                  <div class="left">
                    <div class="content">
                      <span class="spanSlow">want</span>
                    </div>
                  </div><div class="right">
                    <div class="content">
                      <span class="spanSlow">want</span>
                    </div>
                  </div>
                </div> */}
        </div>
  </Wrapper>
)

export default SlidingText