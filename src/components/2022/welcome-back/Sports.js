import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import s from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Title, Description, ByLine, StyledAnchor } from './Typograph'

const Wrapper = s.div`
  .main {
    margin: 3rem 5rem;

    @media (max-width: 768px) {
      margin: 3rem 1rem;
    }
  }
`

const Sports = ({ articles }) => (
  <Wrapper>
    <div className="row main" id="sports">
      {articles.slice(0, 2).map(article => (
        <div
          className="col-md-4 mb-4"
          style={{ borderRight: '1px solid #D8D2D2' }}
        >
          <StyledAnchor href={article.published_link} target="_blank">
            <Fade>
              <img src={article.image_link} style={{ maxWidth: '100%' }} />
              <Title> {article.title} </Title>
              <Description> {article.description} </Description>
              <ByLine>BY {article.byline.toUpperCase()} </ByLine>
            </Fade>
          </StyledAnchor>
        </div>
      ))}

      <div className="col">
        {articles.slice(2).map((article, idx) => (
          <StyledAnchor href={article.published_link} target="_blank">
            <div
              className="row"
              style={{
                borderBottom: idx === 0 ? '1px solid #D8D2D2' : '',
                marginBottom: '2rem',
                paddingBottom: '2rem',
              }}
            >
              <Fade>
                <div className="col-md mb-3">
                  <Title noMarginTop> {article.title} </Title>
                  <ByLine>BY {article.byline.toUpperCase()} </ByLine>
                </div>
                <div className="col-md-7">
                  <img src={article.image_link} style={{ maxWidth: '100%' }} />
                </div>
              </Fade>
            </div>
          </StyledAnchor>
        ))}
      </div>
    </div>
  </Wrapper>
)

export default Sports
