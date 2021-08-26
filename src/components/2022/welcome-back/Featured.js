import React from 'react'
import Img from 'gatsby-image'
import s from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

import { Description, ByLine, StyledAnchor } from './Typograph'
import { PLAYFAIR_BOLD, KARLA_BOLD } from '../../../utils/font'
import { HEADLINE_DARK_GRAY, SUBHEAD_LIGHT_GRAY } from '../../../utils/colors'

const Wrapper = s.div`
  .row {
    margin: 2rem 5rem 0 5rem;

    @media (max-width: 768px) {
      margin: 2rem 1rem 0 1rem;
    }
  }
  margin-bottom: 7rem;
`

const Title = s.div`
  font-size: 200%;
  margin-top: 2rem;
  line-height: 95%;
  color: ${HEADLINE_DARK_GRAY};
  ${PLAYFAIR_BOLD}

  :hover {
    color: ${SUBHEAD_LIGHT_GRAY};
    transition: 0.3s;
  }
`

const Tag = s.div`
  font-size: 80%;
  margin-top: 1.5rem;
  color: ${HEADLINE_DARK_GRAY};
  ${KARLA_BOLD}
`

const Featured = ({ content }) => (
  <Wrapper>
    <div className="row" id="featured">
      <Fade delay={200}>
      <div className="col-md-5 mb-3">
        <StyledAnchor
          href={content.published_link}
          target="_blank"
        >
          <Tag> FEATURED </Tag>
          <Title>
            {content.title}
          </Title>
          <Description>
            {content.description}
          </Description>
          <ByLine>
            {'BY '}{content.byline.toUpperCase()}
          </ByLine>
        </StyledAnchor>
      </div>
      <div className="col-md">
        <img src={content.image_link} style={{ maxWidth: "100%" }}/>
      </div>
    </Fade>
    </div>
  </Wrapper>
)

export default Featured
