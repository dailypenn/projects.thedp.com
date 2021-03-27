import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { FUTURA_BOLD } from '../../../utils/font'

import header_blue_left from '../../../content/images/2021/masthead-madness/header_blue_left.png'
import header_blue_right from '../../../content/images/2021/masthead-madness/header_blue_right.png'
import header_red from '../../../content/images/2021/masthead-madness/header_red.png'

const HeadlineWrapper = s.div`
  display: flex;
  padding: 0 2rem;

  img {
    flex: 33.33%;
    height: 1rem;
    margin: 0 -3rem 0 -3rem;
    overflow: hidden;
  }
  .left {
    transform: translate(-5rem, 2rem);
  }
  .right {
    transform: translate(5rem, 2rem);
  }
`

const TextWrapper = s.div`
  color: ${props => props.color};
  font-size: 4rem;
  margin-bottom: ${props => props.marginBottom}rem;
  margin-left: ${props => props.marginSides}rem;
  margin-right: ${props => props.marginSides}rem;
  text-align: center;
  ${FUTURA_BOLD}
`

function SectionHeader(props) {
  const flag = props.flag;

  return (
    <Row>
      <Col sm={12} md={6}>
        <HeadlineWrapper>
          { flag == "1" &&
            <img className="left" src={header_blue_left} />
          }
          { flag == "2" &&
            <img className="left" src={header_red} />
          }  
          <TextWrapper color={props.color} marginBottom={props.marginBottom} marginSides={props.marginSides}>{props.text}</TextWrapper>
          { flag == "1" &&
            <img className="right" src={header_blue_right} />
          }
          { flag == "2" &&
            <img className="right" src={header_red} />
          }  
        </HeadlineWrapper>
      </Col>
    </Row>
  )
}

export default SectionHeader