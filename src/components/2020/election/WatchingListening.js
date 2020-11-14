import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'
import s from 'styled-components'

import { SectionHeader, Title, Author, StyledRow, Wrapper, ColWithMargin } from './shared'
import { FUTURA_BOLD } from '../../../utils/font'

const ColoredColBox = s(Col)`
  border: 5px solid ${({ borderColor }) => borderColor};
  padding: 1rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const Articles = () => {
  const { borat, music } = useStaticQuery(graphql`
    query {
      borat: file(relativePath: { eq: "borat.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      music: file(relativePath: { eq: "radio.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div>
        <Img fluid={borat.childImageSharp.fluid} />
        <Title>Borat Subsequent Moviefilm:' A Review</Title>
        <Author>BY CAYLEN DAVID</Author>
      </div>
      <Row style={{ margin: '2rem 0' }}>
        <ColoredColBox sm={12} md={5} borderColor="#019459">
          <Title>
            'Star Trek', Syncopes, and the Hypothetical Fall of America
          </Title>
          <Author>BY JULIA POLSTER</Author>
        </ColoredColBox>
        <ColoredColBox
          sm={12}
          md={{ span: 5, offset: 2 }}
          borderColor="#1500FF"
        >
          <Title>What Does An Election Sound Like?</Title>
          <Author>BY NORA YOUN</Author>
        </ColoredColBox>
      </Row>
      <div>
        <Img fluid={music.childImageSharp.fluid} />
        <Title>Does the Music Industry Actually Care if You Voted</Title>
        <Author>BY PHIL STEINKRAUSS</Author>
      </div>
    </>
  )
}

const Background = s.div`
  background-color: #F8F8F8;
`
const ComicHeader = s(Title)`
  font-size: 3em;
  padding: 0 2rem;
`

const StarWrapper = s.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`

const StarImg = s.img`
  height: 25px;
`

const StarBar = () => (
  <StarWrapper>
    <StarImg src="/img/star-bg.png" />
  </StarWrapper>
)

const ComicSubtitle = s.h1`
  ${FUTURA_BOLD}
  color: #019459;
  font-size: .75em;
  text-align: center;
  margin-top: 1vw;
  margin-bottom: -1vw;
`

const ComicContent = s.div`
  margin: 0, 2rem; 
`

const ComicArticleWrapper = s(Row)`
  margin: 1rem 0;
`

const ComicRelief = () => (
  <Background>
    <ComicContent>
      <StarBar />
      <ComicHeader>For Some Comic Relief</ComicHeader>
      <ComicSubtitle>BROUGHT TO YOU BY</ComicSubtitle>
      <ComicSubtitle>UNDER THE BUTTON</ComicSubtitle>
      {/*<ComicArticleWrapper>
       <Col>
        <Img fluid= />
      </Col>
      <div className="col-md-6">
        <Title> {article.title} </Title>
        <Author style={{ fontSize: '80%' }}> BY {article.author} </Author>
      </div>
    </ComicArticleWrapper>
      <ComicArticleWrapper>
        <Col>
          <Img fluid={article.img.src.childImageSharp.fluid} />
        </Col>
        <div className="col-md-6">
          <Title> None of Our Articles As Funny as Four Seasons Total Landscaping Debacle </Title>
          <Author style={{ fontSize: '80%' }}> BY {article.author} </Author>
        </div>
      </ComicArticleWrapper>
      <ComicArticleWrapper>
        <Col>
          <Img fluid={article.img.src.childImageSharp.fluid} />
        </Col>
        <div className="col-md-6">
          <Title> {article.title} </Title>
          <Author style={{ fontSize: '80%' }}> BY {article.author} </Author>
        </div>
      </ComicArticleWrapper> */}
      <StarBar />
    </ComicContent>
    {/* <div style={{ padding: '0 1rem' }}>
      {articles.map(article => <MustReadArticle article={article} />)}
    </div> */}
    <div
      className="d-flex justify-content-center"
      style={{ padding: '2rem 0' }}
    ></div>
  </Background>
)

const WatchingListening = () => (
  <Wrapper id="watching-listening">
    <SectionHeader>WATCHING &amp; LISTENING</SectionHeader>
    <StyledRow padding="12">
      <ColWithMargin md={7}>
        <Articles />
      </ColWithMargin>
      <Col md={4}>
        <ComicRelief />
      </Col>
    </StyledRow>
  </Wrapper>
)

export default WatchingListening
