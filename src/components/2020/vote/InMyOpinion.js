import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { RADIANT_REGULAR } from '../../../utils/font'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

const H2 = s.h2` 
  text-align: center; 
  line-height: 0.1em;
  margin-bottom: 3.2rem;
  margin-top: 2rem;
  font-size: 4em;
  letter-spacing: -2px;
  ${RADIANT_REGULAR}
`
const MustReadArticle = ({article}) => (
  <div className="row pl-3 py-3">
    <div className="col-4 py-3 border border-dark">
      <Img fluid={article.img.src.childImageSharp.fluid} className="border border-dark" />
    </div>
    <div className="col-8">
      <p style={{fontSize:20, lineHeight: 1}}>{article.title}</p>
      <p className="text-uppercase">BY {article.author}</p>
    </div>
  </div>
  
)

const MustRead = ({articles}) => (
  <div className="col-md-4 pl-0" style={{backgroundColor: "#e4e4e4"}}>
    <div className="d-flex justify-content-center">
      <p className="pt-3">red and blue star here</p>
    </div>
    <H2> MUST READ: </H2>
    <MustReadArticle article={articles[0]}/>
    <MustReadArticle article={articles[0]}/>
    <MustReadArticle article={articles[0]}/>
    <MustReadArticle article={articles[0]}/>
    <MustReadArticle article={articles[0]}/>
    <div className="d-flex justify-content-center">
      <p className="pt-3">red and blue star here</p>
    </div>
  </div>
)
const Editorial = ({articles}) => (
  <div className="px-3">
    <div className="row" style={{backgroundColor: "#e4e4e4"}}>
      <div className="col-6 pl-5 pt-5">
        <p className="text-danger font-weight-bold"> EDITORIAL </p>
        <p className="w-100" style={{fontSize: 36, lineHeight: 1}}> {articles[0].title} </p>
        <p style={{lineHeight: 1}}> {articles[0].description} </p>
        <p className="text-uppercase"> BY {articles[0].author} </p>
      </div>
      <div className="col-6">
        <Img fluid={articles[0].img.src.childImageSharp.fluid} className="border border-dark" />
      </div>
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
      <Img fluid={article.img.src.childImageSharp.fluid} className="border border-dark" />
    </ExtraArticleImage>
    <p style={{fontSize:20, lineHeight: 1}}>{article.title}</p>
    <p className="text-uppercase">BY {article.author}</p>
  </div>

)

const Extra = ({articles}) => (
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
                      fluid(maxWidth: 1000, maxHeight: 600) {
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
              <MustRead articles={articles}/>
              <div className="col-md-1"></div>
              <div className="col-md-7 px-0">
                <Editorial articles={articles}/>
                <Extra articles={articles}/>
              </div>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default InMyOpinion