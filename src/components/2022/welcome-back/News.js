import React from 'react'
import Img from 'gatsby-image'
import s from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Title, Description, ByLine, Tag, StyledAnchor } from './Typograph'

const Wrapper = s.div`
  .main {
    margin: 2rem 5rem 0 5rem;

    @media (max-width: 768px) {
      margin: 2rem 1rem 0 1rem;
    }
  }
`

const News = ({ articles }) => (
  <Wrapper>
    <div className="row main" id="news">
      <div
        className="col-md-7 mb-5"
        style={{ borderRight: '1px solid #D8D2D2' }}
      >
        <StyledAnchor href={articles[0].published_link} target="_blank">
          <div
            style={{
              textAlign: 'center',
              borderBottom: '1px solid #D8D2D2',
              marginBottom: '2rem',
              paddingBottom: '2rem',
            }}
          >
            <Fade>
              <img src={articles[0].image_link} style={{ maxWidth: "100%" }} />
              <Title> {articles[0].title} </Title>
              <Description> {articles[0].description} </Description>
              <ByLine>BY {articles[0].byline.toUpperCase()} </ByLine>
            </Fade>
          </div>
        </StyledAnchor>
        <StyledAnchor href={articles[1].published_link} target="_blank">
          <div
            style={{
              textAlign: 'center',
              borderBottom: '1px solid #D8D2D2',
              marginBottom: '2rem',
              paddingBottom: '2rem',
            }}
          >
            <Fade>
              <img src={articles[1].image_link} style={{ maxWidth: "100%" }} />
              <Title> {articles[1].title} </Title>
              <Description> {articles[1].description} </Description>
              <ByLine>BY {articles[1].byline.toUpperCase()} </ByLine>
            </Fade>
          </div>
        </StyledAnchor>
        <StyledAnchor href={articles[2].published_link} target="_blank">
          <div
            style={{
              textAlign: 'center',
              borderBottom: '1px solid #D8D2D2',
              marginBottom: '2rem',
              paddingBottom: '2rem',
            }}
          >
            <Fade>
              <img src={articles[2].image_link} style={{ maxWidth: "100%" }} />
              <Title> {articles[2].title} </Title>
              <Description> {articles[2].description} </Description>
              <ByLine>BY {articles[2].byline.toUpperCase()} </ByLine>
            </Fade>
          </div>
        </StyledAnchor>
      </div>

      <div className="col">
        {articles.slice(3).map((article, idx) => (
          <StyledAnchor href={article.published_link} target="_blank">
            <div
              className="row"
              style={{
                borderBottom:
                  idx + 1 !== articles.length - 1
                    ? '1px solid #D8D2D2'
                    : '',
                marginBottom: '2rem',
                paddingBottom: '2rem',
              }}
            >
              <Fade>
              <div className="col-md mb-3">
                <Title noMarginTop> {article.title} </Title>
                <ByLine>BY {article.byline.toUpperCase()} </ByLine>
              </div>
              <div className="col-md-5">
                <img src={article.image_link} style={{ maxWidth: "100%" }} />
              </div>
              </Fade>
            </div>
          </StyledAnchor>
        ))}
      </div>
    </div>
  </Wrapper>
)

export default News
