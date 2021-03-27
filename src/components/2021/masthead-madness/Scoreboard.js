import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'

import { FUTURA_BOLD, POPPINS_REGULAR } from '../../../utils/font'

import scoreboard_blue from '../../../content/images/2021/masthead-madness/scoreboard_blue.png'
import scoreboard_blue_rectangle from '../../../content/images/2021/masthead-madness/scoreboard_blue_rectangle.png'
import scoreboard_red from '../../../content/images/2021/masthead-madness/scoreboard_red.png'
import scoreboard_red_rectangle from '../../../content/images/2021/masthead-madness/scoreboard_red_rectangle.png'

const ScoreboardWrapper = s.div`
  margin-bottom: 7rem;
  position: relative;
  top: 0;
  left: 0;

  .scoreboard {
    position: relative;
    top: 0;
    left: 19%;
  }
  .scoreboard_rectangle {
    position: absolute;
    top: -2%;
    left: 27%;
  }
  p {
    font-size: 3rem;
    position: absolute;
    top: -18%;
    left: 50%;
    ${FUTURA_BOLD}
  }
`

const ScoreboardValues = s.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: -2%;
  left: 27%;
  ${POPPINS_REGULAR}

  .subheaders {
    flex: 33.33%;
  }
`

function Scoreboard(props) {
  const flag = props.flag;

  return (
    <Row>
      <Col>
        { flag == "1" &&
          <ScoreboardWrapper>
            <p>{props.text}</p>
            <img className="scoreboard" src={scoreboard_blue} />
            <img className="scoreboard_rectangle" src={scoreboard_blue_rectangle} />
            <ScoreboardValues>
              <Col className="subheaders">
                {/* <span>Rank</span> */}
              </Col>

              <Col className="subheaders">
                {/* <span>DP Team (Year)</span> */}
              </Col>

              <Col className="subheaders">
                {/* <span>Money Raised</span> */}
              </Col>
            </ScoreboardValues>
          </ScoreboardWrapper>
        }
        { flag == "2" &&
          <ScoreboardWrapper>
            <p>{props.text}</p>
            <img className="scoreboard" src={scoreboard_red} />
            <img className="scoreboard_rectangle" src={scoreboard_red_rectangle} />
          </ScoreboardWrapper>
        }
      </Col>
    </Row>
  )
}

export default Scoreboard