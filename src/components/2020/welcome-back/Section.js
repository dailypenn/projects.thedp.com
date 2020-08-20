import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { PLAYFAIR_REGULAR, KARLA_REGULAR, KARLA_BOLD } from '../../../utils/font'
import { HEADLINE_DARK_GRAY, SUBHEAD_LIGHT_GRAY } from '../../../utils/colors'

const Title = s.div`
  font-size: 150%;
  margin-top: ${({ noMarginTop }) => noMarginTop ? '0' : '1.5rem'};
  color: ${HEADLINE_DARK_GRAY};
  ${PLAYFAIR_REGULAR}
`

const Description = s.div`
  font-size: 100%;
  margin-top: 1.5rem;
  color: ${SUBHEAD_LIGHT_GRAY};
  ${KARLA_REGULAR}
`

const ByLine = s.div`
  font-size: 80%;
  margin-top: 1.5rem;
  color: #B5B4B4;
  ${KARLA_BOLD}
`

const Section = ({ articles }) => (
  <>
    <div className="row" style={{ margin: '2rem 0', padding: '0 6rem' }}>
      {articles.slice(0,2).map(article => (
        <div className="col-4" style={{ borderRight: '1px solid #D8D2D2' }}>
          <Img fluid={article.image.src.childImageSharp.fluid} />
          <Title> {article.title} </Title>
          <Description> {article.description} </Description>
          <ByLine> {article.byline.toUpperCase()} </ByLine>
        </div>
      ))}
      
      <div className="col">
        {articles.slice(2).map((article, idx) => (
          <div className="row"
            style={{ borderBottom: idx === 0 ? '1px solid #D8D2D2' : '', marginBottom: '2rem', paddingBottom: '2rem' }}>
            <div className="col mb-3">
              <Title noMarginTop> {article.title} </Title>
              <ByLine> {article.byline.toUpperCase()} </ByLine>
            </div>
            <div className="col-5">
              <Img fluid={article.image.src.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default Section