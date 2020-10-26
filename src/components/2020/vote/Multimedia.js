import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import {
  Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleAuthor, 
  StyledAnchor, 
  RedSectionHeader
} from './shared'


const StreetIssue = () => (
  <div className="row" style={{margin:'auto', display:'block'}}>
    <img src="/img/stars.png" style={{margin:'auto', display:'block', width:'2rem'}}/>
    <div className="row" style={{margin:'1rem 6rem'}}>
      <div className="col-md-4" style={{marginRight:0}}>
        34th st sticker
      </div>
      <div className="col-md-8">
        <ArticleHeader>
          Politics doesn’t stop after the election—and neither do we. Visit 
          <a href="34st.com" style={{color:"#5D92CD", textDecoration:'none'}}> 34st.com</a> 
          for the post–election issue.
        </ArticleHeader>
      </div>
    </div>
    <img src="/img/stars.png" style={{margin:'auto', display:'block', width:'2rem'}}/>
  </div>
)

// const PhotoEssay = ({ article }) => (
//   <StyledAnchor href={article.link} target="_blank">
//     <Img fluid={article.img.src.childImageSharp.fluid}/>
//     <div style={{ position: 'absolute', top: '2rem', padding: '16px 0 16px 16px', backgroundColor: 'rgb(128, 128, 128, 0.5)' }}>
//       <RedSectionHeader> PHOTO ESSAY </RedSectionHeader>
//       <ArticleHeader>{article.title}</ArticleHeader>
//     </div>
//   </StyledAnchor>
// )

const Video = s.iframe`
  height: 350px;

  @media (max-width: 768px) {
    height: 200px;
  }
`

const Article = ({ article }) => (
  <div>
    <Video width="100%" src={article.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <RedSectionHeader style={{ textAlign: 'center' }}>VIDEO</RedSectionHeader>
    </div>
    <div style={{ textAlign: 'center' }}>
      <ArticleHeader>{article.title}</ArticleHeader>
      <ArticleAuthor>By {article.caption}</ArticleAuthor>
    </div>
  </div>
)

const Multimedia = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_multimedia.json"}}) {
          edges {
            node {
              childrenVote2020MultimediaJson{
                title
                caption
                link
                tag
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { node: { childrenVote2020MultimediaJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="multimedia">
            <StreetIssue />
            <WordWithLine word="MULTIMEDIA" lineColor="#F05237"/>
            <div className ="row">
              <div className="col-md-8">
                <Article article={articles[0]}/>
              </div>
              <div className="col-md-4" style={{backgroundColor:"gray"}}>
                adss
              </div>
            </div>
            <div className="row" style={{margin:'2rem 0'}}>
              {articles.slice(1,).map(article => 
                <div className="col-md-6"><Article article={article} /></div>
              )}
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Multimedia