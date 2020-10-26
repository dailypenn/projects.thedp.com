import React from 'react'
import s from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleDescription,
  ArticleAuthor, 
  RedSectionHeader
} from './shared'

import { RADIANT_REGULAR } from '../../../utils/font'

const H2 = s.h2` 
  text-align: center; 
  font-size: 4em;
  ${RADIANT_REGULAR}
  margin-bottom: 4rem;
`

const Editorial = ({ articles }) => (
  <div className="row" style={{ backgroundColor: '#F5F4F7', padding: '1rem' }}>
    <div className="col-6">
      <RedSectionHeader> EDITORIAL </RedSectionHeader>
      <ArticleHeader style={{ fontSize: '200%' }}> {articles[0].title} </ArticleHeader>
      <ArticleDescription style={{ marginTop: '2rem' }}> {articles[0].description} </ArticleDescription>
      <ArticleAuthor style={{ marginTop: '2rem' }}> BY {articles[0].author} </ArticleAuthor>
    </div>
    <div className="col-6">
      <Img fluid={articles[0].img.src.childImageSharp.fluid} />
    </div>
  </div>
)

const ExtraArticleImage = s.div`
  height: 70%;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
`

const ExtraArticle = ({article}) => (
  <div className="col-6 text-center px-3">
    <ExtraArticleImage>
      <Img fluid={article.img.src.childImageSharp.fluid} />
    </ExtraArticleImage>
    <ArticleHeader>{article.title}</ArticleHeader>
    <ArticleAuthor>BY {article.author}</ArticleAuthor>
  </div>
)

const Extra = ({ articles }) => (
  <div>
    <div className="row pt-3">
      <ExtraArticle article={articles[0]}/>
      <ExtraArticle article={articles[0]}/>
    </div>
    <div className="row pt-3">
      <ExtraArticle article={articles[0]}/>
      <ExtraArticle article={articles[0]}/>
    </div>
  </div>
)

const MustReadArticle = ({ article }) => (
  <div className="row" style={{ marginBottom: '3rem' }}>
    <div className="col-6">
      <Img fluid={article.img.src.childImageSharp.fluid} />
    </div>
    <div className="col-6">
      <ArticleHeader style={{ fontSize: '110%' }}> {article.title} </ArticleHeader>
      <ArticleAuthor style={{ fontSize: '80%' }}> BY {article.author} </ArticleAuthor>
    </div>
  </div>
)

const MustRead = ({ articles }) => (
  <div className="col-md-4" style={{ backgroundColor: '#F8F8F8' }}>
    <div className="d-flex justify-content-center" style={{ margin: '2rem 0' }}>
      <img src="/img/stars.png" style={{ height: '25px' }} />
    </div>
    <H2> MUST READ: </H2>
    {articles.map(article => <MustReadArticle article={article} />)}
    <div className="d-flex justify-content-center">
      <img src="/img/stars.png" style={{ height: '25px' }} />
    </div>
  </div>
)

const InMyOpinion = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_opinion.json"}}) {
          edges {
            node {
              childrenVote2020OpinionJson{
                title
                description
                author
                link
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 1000, maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { node: { childrenVote2020OpinionJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="opinion">
            <WordWithLine word="IN MY OPINION" lineColor="#F05237"/>
            <div className="row">
              <MustRead articles={articles} />
              <div className="col-md-7" style={{ marginLeft: '4rem' }}>
                <Editorial articles={articles} />
                <Extra articles={articles} />
              </div>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default InMyOpinion