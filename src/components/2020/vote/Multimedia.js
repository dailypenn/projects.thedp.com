import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import { Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleAuthor, 
  StyledLink, 
  RedSectionHeader} from './shared'
import { StaticQuery, graphql } from 'gatsby'
import Stars from '../../../content/images/2020/vote/stars.png'

const StreetIssue = () => (
  <div className="row" style={{margin:'auto', display:'block'}}>
    <img src={Stars} style={{margin:'auto', display:'block', width:'2rem'}}/>
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
    <img src={Stars} style={{margin:'auto', display:'block', width:'2rem'}}/>
  </div>
)

const Video = ({article}) => (
  <>
    <div className ="row" >
      <div className = "col-md-12">
        <StyledLink href={article.link}>
          <Img fluid={article.img.src.childImageSharp.fluid} className="border border-dark"/>
        </StyledLink>
      </div>
      <div className ="col-md-12" style={{textAlign:"center"}}>
        <RedSectionHeader>Video</RedSectionHeader>
      </div>
      <div className ="col-md-12" style={{textAlign:"center"}}>
        <ArticleHeader>{article.title}</ArticleHeader>
        <ArticleAuthor>By {article.author}</ArticleAuthor>
      </div>
    </div>
  </>
)

const PhotoEssay = ({article}) => (
  <StyledLink href={article.link} target="_blank">
    <Img fluid={article.img.src.childImageSharp.fluid}/>
    <div style={{ position: 'absolute', top: '2rem', padding: '16px 0 16px 16px', backgroundColor: 'rgb(128, 128, 128, 0.5)' }}>
      <RedSectionHeader> PHOTO ESSAY </RedSectionHeader>
      <ArticleHeader>{article.title}</ArticleHeader>
    </div>
  </StyledLink>
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
      const { node: { childrenVote2020MultimediaJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div id="multimedia">
            <StreetIssue />
            <WordWithLine word="MULTIMEDIA" lineColor="#F05237"/>
            <div className ="row">
              <div className="col-md-8">
                <Video article={articles[0]}/>
              </div>
              <div className="col-md-4" style={{backgroundColor:"gray"}}>
                adss
              </div>
            </div>
            <div className="row" style={{margin:'2rem 0'}}>
              <div className="col-md-6">
                <PhotoEssay article={articles[1]}/>
              </div>
              <div className="col-md-6">
                <Video article={articles[2]}/>
                <Video article={articles[3]}/>
              </div>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Multimedia