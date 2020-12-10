import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { Image } from 'react-bootstrap'

import {
  FUTURA_REGULAR,
  LORA_REGULAR,
  RADIANT_REGULAR,
  FUTURA_BOLD,
  MARGO
} from '../../../../utils/font'

export const Wrapper = s.div`
  .main {
    margin: 2rem 5rem 0 5rem;
    padding-left: 15%;
    @media (max-width: 768px) {
      margin: 2rem 1rem 0 1rem;
      padding: 1rem;
    }
  }
`

export const SubsectionTitle = s.p`
  ${FUTURA_BOLD}
  color: #639E7D;
  font-size: 16px;
  padding-top: .5rem;
`

export const GreenSectionHeader = s.p`
  ${FUTURA_BOLD}
  letter-spacing: 1.6px;
  color: #639E7D;
  padding-top: 1rem;
  text-transform: uppercase;
`

export const SectionHeader = s.h1`
  ${MARGO}
  color: #032FB7;
  text-align: center;
  margin: 1em;
  margin-left: auto;
  margin-right: auto;
  font-size: 4rem;
`

export const ArticleHeader = s.h3`
  ${FUTURA_REGULAR}
  line-height: 1.1;
  color: #032FB7;
  font-size: 30px;

  :hover {
    color: #707070;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const H2 = s.h2` 
  text-align: center; 
  font-size: 4em;
  ${RADIANT_REGULAR}
  color: #639E7D;
  margin: 2rem;
`

export const MustReadArticle = ({ article }) => (
  <StyledAnchor href={article.link} target="_blank" >
    <div className="row" style={{ marginBottom: '4.5rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
      <div className="col-md-6">
        <Img fluid={article.image.src.childImageSharp.fluid}/>
      </div>
      <div className="col-md-6">
        <ArticleHeader>
          {' '}
          {article.title}{' '}
        </ArticleHeader>
        <ArticleAuthor style={{ fontSize: '80%' }}>
          {' '}
          BY {article.author}{' '}
        </ArticleAuthor>
      </div>
    </div>
  </StyledAnchor>
)

export const MustRead = ({ articles }) => (
  <div className="col-md-6">
    <div style={{ backgroundColor: '#F8FC57' }}>
      <div
        className="d-flex justify-content-center"
        style={{ padding: '1rem' }}
      />
      <H2> STREET'S PICKS OF 2020:</H2>
      <div style={{ padding: '0 1rem' }}>
        {articles.map(article => (
          <MustReadArticle article={article} />
        ))}
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ padding: '1rem' }}
      />
    </div>
  </div>
)
const SmallHeader = s.h3`
  ${FUTURA_REGULAR}
  font-size: 140%;
  line-height: 1;
  color: #032FB7;

  :hover {
    color: #707070;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    font-size:100%
  }
`

const Square = s.div`
  width:100%;
  padding-top:100%;
  position: relative;
  background-color: #F8FC57;
  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 1rem;
  }
`
const SportsArticleWrapper = s.div`
  position: absolute;
  bottom: 5%;
  right: 0;
  top: 5%;
  left: 0;
  @media (min-width: 768px) and (max-width: 1200px) {
    font-size:100%;
  }
  @media (max-width: 768px) {
    position: relative;
  }
`

const SportsReadArticle = ({ article }) => (
  <StyledAnchor href={article.link} target="_blank" >
    <div className="row" style={{padding:'5%'}}>
      <div className="col-md-5">
        <Img fluid={article.image.src.childImageSharp.fluid}/>
      </div>
      <div className="col-md-7">
        <SmallHeader>
          {article.title}
        </SmallHeader>
        <ArticleAuthor style={{ fontSize: '80%', padding:0 }}>
          BY {article.author}
        </ArticleAuthor>
      </div>
    </div>
  </StyledAnchor>
)

export const SportsReads = ({ articles }) => (
  <div className = 'row'>
    <div className="col-md-12">
      <Square>
        <SportsArticleWrapper>
          {articles.map(article => (
            <SportsReadArticle article={article} />
          ))}
        </SportsArticleWrapper>
      </Square>
    </div>
  </div>
)

export const BigArticle = ({ article }) => (
  <div className="text-center">
    <StyledAnchor href={article.link} target="_blank" >
      <Img style fluid={article.image.src.childImageSharp.fluid} style={{marginLeft: 'auto', marginRight: 'auto',maxWidth: '600px', maxHeight: '300px'}} />
      <SubsectionTitle>{article.section}</SubsectionTitle>
      <LargeArticleHeader>
        {article.title}
      </LargeArticleHeader>
      <ArticleAuthor style={{ marginTop: '0.5rem' }}>
        BY {article.author}
      </ArticleAuthor>
    </StyledAnchor>
  </div>
)

export const BigArticleStaticImg = ({ article }) => (
  <div className="text-center">
    <StyledAnchor href={article.link} target="_blank" >
      <Image src={article.img}  fluid/>
      <SubsectionTitle>{article.section}</SubsectionTitle>
      <LargeArticleHeader>
        {article.title}
      </LargeArticleHeader>
      <ArticleAuthor style={{ marginTop: '0.5rem' }}>
        BY {article.author}
      </ArticleAuthor>
    </StyledAnchor>
  </div>
)

const Video = s.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 66.66%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

export const BigArticleVideo = ({ article }) => (
  <div className="text-center">
    <StyledAnchor href={article.link} target="_blank">
      <Video>
        <iframe
          src="https://www.youtube.com/embed/_DJKKm6T3SE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Video>
      
      <SubsectionTitle>{article.section}</SubsectionTitle>
      <LargeArticleHeader>
        {article.title}
      </LargeArticleHeader>
      <ArticleAuthor style={{ marginTop: '0.5rem' }}>
        BY {article.author}
      </ArticleAuthor>
    </StyledAnchor>
  </div>
)

export const LargeArticleHeader = s.h3`
  ${FUTURA_REGULAR}
  margin: -5px;
  font-size: 25px;
  line-height: 1;

  :hover {
    color: #707070;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const ArticleDescription = s.p`
  ${LORA_REGULAR}
  font-size:1em;
  line-height:1.1em;
`

export const ArticleAuthor = s.p`
  ${FUTURA_REGULAR}
  font-size: 14px;
  text-transform: uppercase;
  padding-top: 1rem;
`

export const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`
