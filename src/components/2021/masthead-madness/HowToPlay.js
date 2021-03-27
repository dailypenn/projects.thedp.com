import React from 'react'
import { Col, Row } from 'react-bootstrap'
import s from 'styled-components'

import star from '../../../content/images/2021/masthead-madness/star.png'
import { POPPINS_BOLD, POPPINS_REGULAR } from '../../../utils/font'

const RED = '#AC3B4E'

const HowToPlayWrapper = s.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30rem;
  margin-bottom: 5rem;

  .point { 
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 2rem 2rem;
  }
  span {
      color: ${RED};
      ${POPPINS_BOLD}
  }
  p {
      ${POPPINS_REGULAR}
  }
`

export const HowToPlay = () => (
  <HowToPlayWrapper>
    <div className="point">
      <img src={star} />
      <div>
        <span>Score for your team</span>
        <p>Make a gift to the DP here</p>
      </div>
    </div>

    <div className="point">
      <img src={star} />
      <div>
        <span>Earn Extra Points</span>
        <p>Make and share a selfie video explaining why you participated and encourage others to get in the game as well. Use: #DPMastMad2021</p>
      </div>
    </div>

    <div className="point">
      <img src={star} />
      <div>
        <span>Shout Outs and Smack Talk</span>
        <p>Leave a message of inspiration or call out a rival. Submit to: MastMad@thedp.com</p>
      </div>
    </div>

    <div className="point">
      <img src={star} />
      <div>
        <span>Submit old DP photos and videos.</span>
        <p>Submit to: MastMad@thedp.com</p>
      </div>
    </div>

    <div className="point">
      <img src={star} />
      <div>
        <span>Encourage Others</span>
        <p>Like, love, share, comment and use Masthead Madness logos, pics, and posts on social media throughout the competition.</p>
      </div>
    </div>
  </HowToPlayWrapper>
)
