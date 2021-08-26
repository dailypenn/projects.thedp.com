import React from 'react'
import s from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { KARLA_BOLD, KARLA_REGULAR, FJALLA_REGULAR } from '../../../utils/font'
import BracketsText from './BracketsText'
import { StyledAnchor } from './Typograph'

const UTB_BLUE = '#456CB3'
const HEADLINE_DARK_GRAY = '#283033'
const SUBHEAD_LIGHT_GRAY = '#707070'

const Wrapper = s.div` 
  text-align: center; 
  border-top: 2px solid #456CB3;
  background: #F6F7F7;
  margin: 0 5rem;
  margin-top: 10rem;

  .logo {
    left: 40%;
    background-color: #fff;
    padding: 1rem 2rem;
    border-top: 2px solid ${UTB_BLUE};
    border-bottom: 2px solid ${UTB_BLUE};
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const Title = s.div`
  color: ${SUBHEAD_LIGHT_GRAY};
  font-size: 85%;
  ${KARLA_REGULAR}
`

const Subtitle = s.div`
  color: ${UTB_BLUE};
  font-size: 110%;
  ${FJALLA_REGULAR}
`

const ArticleTag = s.div`
  margin-top: 1rem;
  font-size: 80%;
  color: ${UTB_BLUE};
  ${KARLA_BOLD}
`

const ArticleHeadline = s.div`
  margin-top: 0.3rem;
  font-size: 125%;
  color: ${HEADLINE_DARK_GRAY};
  line-height: 97%;
  ${KARLA_BOLD}

  :hover {
    color: ${UTB_BLUE};
    transition: 0.3s;
  }
`

const ByLine = s.div`
  margin-top: 1rem;
  font-size: 80%;
  color: ${SUBHEAD_LIGHT_GRAY};
  ${KARLA_REGULAR}
`

const MoreLink = s.div`
  font-size: 130%;
  color: ${UTB_BLUE};

  ${KARLA_BOLD}

  :hover {
    color: ${SUBHEAD_LIGHT_GRAY};
  }
`

const UTB_ARROW = () => (
  <div style={{ color: UTB_BLUE, fontSize: '120%' }}> &#10230; </div>
)

const UTB = ({ articles }) => (
  <Fade>
  <Wrapper id="utb">
    <img
      className="logo"
      src="/img/utb-logo-with-text.png"
      height="110px"
      style={{ transform: 'translate(0, -3.5rem)' }}
    />
    <Title>
      Under the Button is the University of Pennsylvania's <i>truly</i>{' '}
      independent satire publication
    </Title>
    <Subtitle>
      Think the Onion, but better (or worse, if you ask the DP).
    </Subtitle>

    <div className="row" style={{ margin: '2rem 0', padding: '0 2rem' }}>
      {articles.map(article => (
        <div className="col-md">
          <StyledAnchor href={article.published_link} target="_blank">
            <Fade delay={200}>
            <img src={article.image_link} style={{ maxWidth: "100%" }} />
            <ArticleHeadline> {article.headline} </ArticleHeadline>
            <ByLine>BY {article.byline} </ByLine>
            <UTB_ARROW />
            </Fade>
          </StyledAnchor>
        </div>
      ))}
    </div>

    <StyledAnchor href="https://www.underthebutton.com/" target="_blank">
      <Fade><MoreLink> More shenanigans this way &#10503; </MoreLink></Fade>
    </StyledAnchor>
    
    <Fade>
      <BracketsText
        bracketColor={UTB_BLUE}
        link="http://bit.ly/2EgtJSY"
        text="We publish new articles everyday directly to our website, as well as to Facebook and Twitter. We’re accepting applications now, so if you’re interested in comedy, satire, or just want to subject the rest of campus to your sense of humor, we’re the club for you."
      />
    </Fade>
  </Wrapper>
  </Fade>
)

export default UTB
