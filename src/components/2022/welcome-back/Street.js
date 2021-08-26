import React from 'react'
import s from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import {
  KARLA_BOLD,
  KARLA_REGULAR,
  FJALLA_REGULAR,
  PLAYFAIR_REGULAR,
} from '../../../utils/font'
import BracketsText from './BracketsText'
import {
  STREET_BLUE,
  HEADLINE_DARK_GRAY,
  SUBHEAD_LIGHT_GRAY,
} from '../../../utils/colors'
import { StyledAnchor } from './Typograph'

const Wrapper = s.div` 
  text-align: center; 
  border-top: 2px solid ${STREET_BLUE};
  background: #F6F7F7;
  margin: 0 5rem;
  margin-top: 8rem;

  .logo {
    left: 40%;
    background-color: #fff;
    padding: 1rem 2rem;
    border-top: 2px solid ${STREET_BLUE};
    border-bottom: 2px solid ${STREET_BLUE};
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const Title = s.div`
  color: ${SUBHEAD_LIGHT_GRAY};
  font-size: 90%;
  ${KARLA_REGULAR}
`

const Subtitle = s.div`
  color: ${STREET_BLUE};
  font-size: 110%;
  ${FJALLA_REGULAR}
`

const ArticleHeadline = s.div`
  margin-top: 0.3rem;
  font-size: 150%;
  color: ${HEADLINE_DARK_GRAY};
  line-height: 97%;
  ${PLAYFAIR_REGULAR}

  :hover {
    color: ${STREET_BLUE};
    transition: 0.3s;
  }
`

const ByLine = s.div`
  margin-top: 1rem;
  font-size: 80%;
  color: ${SUBHEAD_LIGHT_GRAY};
  ${KARLA_REGULAR}
`

const PHeader = s.div`
  font-size: 120%;
  color: ${HEADLINE_DARK_GRAY};
  margin-bottom: 0.5rem;
  line-height: 98%;
  ${KARLA_REGULAR}

  :hover {
    color: ${STREET_BLUE};
    transition: 0.3s;
  }
`

const PContent = s.div`
  font-size: 80%;
  color: ${SUBHEAD_LIGHT_GRAY};
  line-height: 94%;
  ${KARLA_REGULAR}
`

const pargraphs = [
  {
    header: 'Life, Interrupted',
    content:
      'Coping with the present while longing for the past— when will things be “normal” again?',
    byline: 'BY EVA INGBER',
    link:
      'https://www.34st.com/article/2020/07/covid-19-upenn-freshman-year-jeans-ivy-league',
  },
  {
    header: 'Paintru: The Startup That Immortalizes Memories',
    content:
      'Paintru is revolutionizing the way to get custom artwork— all the while fostering community in Wharton and beyond.',
    byline: 'BY FERNANDA BRIZUELA',
    link:
      'https://www.34st.com/article/2020/07/paintru-startup-art-photos-brendan-aronson-sravya-vishnubhatla-wharton-mba',
  },
  {
    header: 'A Love Letter to Philadelphia in an Unexpected Place',
    content: "Why 'Queer Eye' Season 5 is way more than a makeover",
    byline: 'BY DENALI SAGNER',
    link:
      'https://www.34st.com/article/2020/07/queer-eye-philadelphia-netflix-fab-five-sunrise-movement-italian-market',
  },
]

const MoreLink = s.div`
  font-size: 130%;
  color: ${STREET_BLUE};

  ${KARLA_BOLD}

  :hover {
    color: ${SUBHEAD_LIGHT_GRAY};
  }
`

const STREET_ARROW = () => (
  <div style={{ color: STREET_BLUE, fontSize: '120%' }}> &#10230; </div>
)

const Street = ({ articles }) => (
<Fade>
  <Wrapper id="34st">
    <img
      className="logo"
      src="/img/street-logo-with-text.png"
      height="110px"
      style={{ transform: 'translate(0, -3.5rem)' }}
    />
    <Title>
      34th Street is the arts and culture maganize of the Daily
      Pennsylvanian
    </Title>
    <Subtitle>&#8211;basically the DP's cooler, sexier twin.</Subtitle>

    <div className="row" style={{ margin: '2rem 0', padding: '0 2rem' }}>
        {articles.slice(0).map(article => (
          <div
            className="col-md-6 mb-4"
            style={{ borderRight: '1px solid #D8D2D2' }}
          >
          <StyledAnchor
            href={article.published_link}
            target="_blank"
          >
            <Fade delay={200}>
            <img src={article.image_link} style={{ maxWidth: "100%" }} />
            <div>
              <ArticleHeadline style={{ marginTop: '4rem' }}>
                {article.headline}
              </ArticleHeadline>
              <ByLine style={{ marginTop: '2rem' }}>
                BY {article.byline.toUpperCase()}
              </ByLine>
              <STREET_ARROW />
            </div>
            </Fade>
          </StyledAnchor>
          </div>
        ))}
    </div>

    <StyledAnchor href="https://www.34st.com/" target="_blank">
     <Fade><MoreLink> &#8212; More content this way &#8594;</MoreLink></Fade>
    </StyledAnchor>

    <Fade>
      <BracketsText
        bracketColor={STREET_BLUE}
        link="http://bit.ly/join34st"
        text="Entirely student–run, we update our website daily with student life pieces, humor, current events coverage, food reviews, movie recs, and in–depth features. Street is for witty and media–savvy creators who are in-the-know, on–and off–campus."
      />
    </Fade>
  </Wrapper>
  </Fade>
)

export default Street
