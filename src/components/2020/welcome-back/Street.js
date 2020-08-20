import React from 'react'
import s from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { KARLA_BOLD, KARLA_REGULAR, FJALLA_REGULAR, PLAYFAIR_REGULAR } from '../../../utils/font'
import BracketsText from './BracketsText'
import { STREET_BLUE, HEADLINE_DARK_GRAY, SUBHEAD_LIGHT_GRAY } from '../../../utils/colors'

const Wrapper = s.div` 
  text-align: center; 
  border-top: 2px solid ${STREET_BLUE};
  background: #F6F7F7;
  margin: 0 5rem;
  margin-top: 10rem;

  .logo {
    left: 40%;
    background-color: #fff;
    padding: 1rem 2rem;
    border-top: 2px solid ${STREET_BLUE};
    border-bottom: 2px solid ${STREET_BLUE};
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
  ${KARLA_REGULAR}
`

const PContent = s.div`
  font-size: 90%;
  color: ${SUBHEAD_LIGHT_GRAY};
  ${KARLA_REGULAR}
`

const pargraphs = [
  {
    "header": "Life, Interrupted",
    "content": "Coping with the present while longing for the past— when will things be “normal” again?",
    "byline": "BY EVA INGBER"
  },
  {
    "header": "Paintru: The Startup That Immortalizes Memories",
    "content": "Paintru is revolutionizing the way to get custom artwork— all the while fostering community in Wharton and beyond.",
    "byline": "BY FERNANDA BRIZUELA"
  },
  {
    "header": "A Love Letter to Philadelphia in an Unexpected Place",
    "content": "Why Queer Eye Season 5 is way more than a makeover",
    "byline": "BY DENALI SAGNER"
  }
]

const MoreLink = s.div`
  font-size: 130%;
  color: ${STREET_BLUE};

  ${KARLA_BOLD}
`

const STREET_ARROW = () => (<div style={{ color: STREET_BLUE, fontSize: '120%' }}> &#10230; </div>)

const MostRead = () => {
  return pargraphs.map((paragraph, idx) => (
    <>
      <PHeader> {paragraph.header} </PHeader>
      <PContent style={{ marginBottom: '1rem' }}> {paragraph.content} </PContent>
      <PContent> {paragraph.byline} </PContent>
      {idx < pargraphs.length - 1 && <img src='/img/black-squiggle.png' width="50px" style={{ margin: '3rem 0' }}/>}
    </>
  ))
}

const Street = () => (
  <StaticQuery
    query={graphql`
      query {
        streetWharton: file(relativePath: {eq: "street-wharton.jpeg"}) {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        streetApp: file(relativePath: {eq: "street-app.jpeg"}) {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        streetCovid: file(relativePath: {eq: "street-covid.jpg"}) {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const { streetApp, streetCovid, streetWharton } = data

      return (
        <Wrapper>
          <img className="logo" src='/img/street-logo-with-text.png' height="110px" style={{ transform: 'translate(0, -3.5rem)' }}/>
          <Title>34th Street is the arts and culture maganize of the Daily Pennsylvanian</Title>
          <Subtitle>&#8211;basically the DP's coller, sexier twin.</Subtitle>

          <div className="row" style={{ margin: '2rem 0', padding: '0 2rem' }}>
            <div className="col-3">
              <div>
                <Img fluid={streetApp.childImageSharp.fluid} />
                <ArticleHeadline style={{ marginTop: '2rem' }}> Must Have Apps For An Online Semester </ArticleHeadline>
                <ByLine> BY EVA INGBER </ByLine>
                <STREET_ARROW />
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Img fluid={streetCovid.childImageSharp.fluid} />
                <ArticleHeadline style={{ marginTop: '2rem' }}> On the Road Again: Crossing Int'l Borders During the Coronavirus Pandemic </ArticleHeadline>
                <ByLine> BY DENALI SAGNER </ByLine>
                <STREET_ARROW />
              </div>
            </div>
            <div className="col">
              <Img fluid={streetWharton.childImageSharp.fluid} />
              <ArticleHeadline style={{ marginTop: '4rem' }}> Wharton alum Evan Thomas reconciles faith and identity on his debut album, ‘Foundations’ </ArticleHeadline>
              <ByLine> Though Evan Thomas just graduated Penn, he's already in the midst of a new phase of his life: making music. </ByLine>
              <ByLine style={{ marginTop: '2rem' }}> BY CHARDONNAY NEEDLER </ByLine>
              <STREET_ARROW />
            </div>
            <div className="col-3" style={{ border: `1px solid ${STREET_BLUE}`, background: '#fff' }}>
              <div style={{ padding: '2rem 1.5rem' }}>
                <img src="/img/must-read-full-text.png" className='img-fluid' style={{ marginBottom: '3rem' }}/>
                <MostRead />
              </div>
            </div>
          </div>

          <MoreLink> &#8212; More content this way &#8594;</MoreLink>
          
          <div style={{ padding: '0 15rem', marginTop: '2rem' }}>
            <BracketsText bracketColor={STREET_BLUE} text="Entirely student–run, we update our website daily with student life pieces, humor, current events coverage, food reviews, movie recs, and in–depth features. Street is for witty and media–savvy creators who are in-the-know, on– and off–campus." />
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Street