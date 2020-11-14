import React from "react"
import s from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  KARLA_BOLD,
  KARLA_REGULAR,
  FJALLA_REGULAR,
  PLAYFAIR_REGULAR,
} from "../../../utils/font"
import BracketsText from "./BracketsText"
import {
  STREET_BLUE,
  HEADLINE_DARK_GRAY,
  SUBHEAD_LIGHT_GRAY,
} from "../../../utils/colors"
import { StyledAnchor } from "./Typograph"

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
    header: "Life, Interrupted",
    content:
      "Coping with the present while longing for the past— when will things be “normal” again?",
    byline: "BY EVA INGBER",
    link:
      "https://www.34st.com/article/2020/07/covid-19-upenn-freshman-year-jeans-ivy-league",
  },
  {
    header: "Paintru: The Startup That Immortalizes Memories",
    content:
      "Paintru is revolutionizing the way to get custom artwork— all the while fostering community in Wharton and beyond.",
    byline: "BY FERNANDA BRIZUELA",
    link:
      "https://www.34st.com/article/2020/07/paintru-startup-art-photos-brendan-aronson-sravya-vishnubhatla-wharton-mba",
  },
  {
    header: "A Love Letter to Philadelphia in an Unexpected Place",
    content: "Why 'Queer Eye' Season 5 is way more than a makeover",
    byline: "BY DENALI SAGNER",
    link:
      "https://www.34st.com/article/2020/07/queer-eye-philadelphia-netflix-fab-five-sunrise-movement-italian-market",
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
  <div style={{ color: STREET_BLUE, fontSize: "120%" }}> &#10230; </div>
)

const MostRead = () => {
  return pargraphs.map((paragraph, idx) => (
    <StyledAnchor href={paragraph.link} target="_blank">
      <PHeader> {paragraph.header} </PHeader>
      <PContent style={{ marginBottom: "1rem" }}>
        {" "}
        {paragraph.content}{" "}
      </PContent>
      <PContent> {paragraph.byline} </PContent>
      {idx < pargraphs.length - 1 && (
        <img
          src="/img/black-squiggle.png"
          width="50px"
          style={{ margin: "1.5rem 0" }}
        />
      )}
    </StyledAnchor>
  ))
}

const Street = () => (
  <StaticQuery
    query={graphql`
      query {
        streetWharton: file(relativePath: { eq: "street-wharton.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        streetApp: file(relativePath: { eq: "street-app.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        streetCovid: file(relativePath: { eq: "street-covid.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const { streetApp, streetCovid, streetWharton } = data

      return (
        <Wrapper id="34st">
          <img
            className="logo"
            src="/img/street-logo-with-text.png"
            height="110px"
            style={{ transform: "translate(0, -3.5rem)" }}
          />
          <Title>
            34th Street is the arts and culture maganize of the Daily
            Pennsylvanian
          </Title>
          <Subtitle>&#8211;basically the DP's cooler, sexier twin.</Subtitle>

          <div className="row" style={{ margin: "2rem 0", padding: "0 2rem" }}>
            <div className="col-md-3 mb-3">
              <div>
                <StyledAnchor
                  href="https://www.34st.com/article/2020/08/must-have-apps-students-upenn-canvas-spotify-snackpass-ubereats-penn-mobile"
                  target="_blank"
                >
                  <Img fluid={streetApp.childImageSharp.fluid} />
                  <ArticleHeadline style={{ marginTop: "2rem" }}>
                    {" "}
                    Must Have Apps For An Online Semester{" "}
                  </ArticleHeadline>
                  <ByLine> BY EVA INGBER </ByLine>
                  <STREET_ARROW />
                </StyledAnchor>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <StyledAnchor
                  href="https://www.34st.com/article/2020/08/covid-international-students-nicaragua-canada-colombia-newzealand-pandemic-college-reopening"
                  target="_blank"
                >
                  <Img fluid={streetCovid.childImageSharp.fluid} />
                  <ArticleHeadline style={{ marginTop: "2rem" }}>
                    {" "}
                    On the Road Again: Crossing Int'l Borders During the
                    Coronavirus Pandemic{" "}
                  </ArticleHeadline>
                  <ByLine> BY DENALI SAGNER </ByLine>
                  <STREET_ARROW />
                </StyledAnchor>
              </div>
            </div>
            <div className="col-md">
              <StyledAnchor
                href="https://www.34st.com/article/2020/07/evan-thomas-foundations-album-interview-wharton-upenn-ivy-league-spotify-independent-artists"
                target="_blank"
              >
                <Img fluid={streetWharton.childImageSharp.fluid} />
                <div>
                  <ArticleHeadline style={{ marginTop: "4rem" }}>
                    {" "}
                    Wharton alum Evan Thomas reconciles faith and identity on
                    his debut album, ‘Foundations’{" "}
                  </ArticleHeadline>
                  <ByLine>
                    {" "}
                    Though Evan Thomas just graduated Penn, he's already in the
                    midst of a new phase of his life: making music.{" "}
                  </ByLine>
                  <ByLine style={{ marginTop: "2rem" }}>
                    {" "}
                    BY CHARDONNAY NEEDLER{" "}
                  </ByLine>
                  <STREET_ARROW />
                </div>
              </StyledAnchor>
            </div>
            <div
              className="col-md-3"
              style={{ border: `1px solid ${STREET_BLUE}`, background: "#fff" }}
            >
              <div style={{ padding: "2rem 1.5rem" }}>
                <img
                  src="/img/must-read-full-text.png"
                  className="img-fluid"
                  style={{ marginBottom: "3rem" }}
                />
                <MostRead />
              </div>
            </div>
          </div>

          <StyledAnchor href="https://www.34st.com/" target="_blank">
            <MoreLink> &#8212; More content this way &#8594;</MoreLink>
          </StyledAnchor>

          <BracketsText
            bracketColor={STREET_BLUE}
            link="http://bit.ly/join34st"
            text="Entirely student–run, we update our website daily with student life pieces, humor, current events coverage, food reviews, movie recs, and in–depth features. Street is for witty and media–savvy creators who are in-the-know, on–and off–campus."
          />
        </Wrapper>
      )
    }}
  />
)

export default Street
