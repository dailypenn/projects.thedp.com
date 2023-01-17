import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { KARLA_BOLD, KARLA_REGULAR } from '../../../utils/font'
import { Title, Description, StyledAnchor } from './Typograph'

const Tag = s.div`
  font-size: 80%;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? '0' : '1.5rem')};
  .tag {
    color: #D0C730;
    ${KARLA_BOLD}
  }

  .author {
    color: #B4B0B0;
    ${KARLA_REGULAR}
  }
`

const Wrapper = s.div`
  .main {
    margin: 2rem 5rem 10rem 5rem;

    @media (max-width: 768px) {
      margin: 2rem 1rem 10rem 1rem;
    }
  }
`

const Opinion = ({ articles }) => (
  <Wrapper>
    <div className="row main" id="opinion">
      {articles.slice(0).map(article => (
        <div
          className="col-md-4 mb-4"
          style={{ borderRight: '1px solid #D8D2D2' }}
        >
          <StyledAnchor href={article.published_link} target="_blank">
            <Fade>
              <img src={article.image_link} style={{ maxWidth: '100%' }} />
              <Tag>
                <text className="author"> By {article.byline} </text>
              </Tag>
              <Title> {article.title} </Title>
              <Description> {article.description} </Description>
            </Fade>
          </StyledAnchor>
        </div>
      ))}
    </div>
  </Wrapper>
)

export default Opinion
