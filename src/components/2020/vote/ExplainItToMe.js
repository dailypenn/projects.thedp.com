import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import { Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleDescription,
  ArticleAuthor, 
  RedSectionHeader} from './shared'
import { StaticQuery, graphql } from 'gatsby'
import DividerLine from '../../../content/images/2020/vote/divider-line.png'

const Explainer = ({articles}) => (
  <div className="col-md-4 pr-0">
    <div class="border border-dark">
      <Img fluid={articles[0].img.src.childImageSharp.fluid} />
    </div>
    <RedSectionHeader style={{textAlign:'center'}}> EXPLAINER </RedSectionHeader>
    <ArticleHeader style={{textAlign:'center'}}> {articles[0].title} </ArticleHeader>
    <ArticleDescription style={{textAlign:'center'}}> {articles[0].description} </ArticleDescription>
    <ArticleAuthor  style={{textAlign:'center'}}> BY {articles[0].author} </ArticleAuthor>
  </div>
)

const FeatureText = s.div`
  padding-left: 9%;
  padding-top: 12%;
  color: #FFFFFF;
  text-align: left;
`
const Feature = ({articles}) => (
  <div className="col-md-8 pl-0">
    <BackgroundImage className="h-100 border border-dark" fluid={articles[0].img.src.childImageSharp.fluid}>
    <FeatureText>
      <RedSectionHeader> FEATURE </RedSectionHeader>
      <p className="w-50" style={{fontSize: 36}}> {articles[0].title} </p>
      <p> {articles[0].description} </p>
      <p className="pt-3 text-uppercase"> BY {articles[0].author} </p>
    </FeatureText>
    
    
    </BackgroundImage>
    
  </div>
)

const NewText = s.div`
  padding-top: 25%;
  text-align: center;
`


const New = ({articles}) => (
  <div className="row" style={{marginTop:'2rem'}}>
    <div className="col-md-4 pl-0">
      <NewText>
        <RedSectionHeader> NEW! </RedSectionHeader>
        <ArticleHeader style={{fontSize: '2.5rem'}}> {articles[0].title} </ArticleHeader>
        <img src={DividerLine} style={{width:'4em', margin:'1em 0em'}}/>
        <ArticleDescription> {articles[0].description} </ArticleDescription>
        <ArticleAuthor> BY {articles[0].author} </ArticleAuthor>
      </NewText>
    </div>
    <div className="col-md-8 pr-0">
      <Img fluid={articles[0].img.src.childImageSharp.fluid} className="border border-dark" />
    </div>
  </div>
)

const ExplainItToMe = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_ExplainItToMe.json"}}) {
          edges {
            node {
              childrenVote2020ExplainItToMeJson{
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
      const { node: { childrenVote2020ExplainItToMeJson: articles } } = data.allFile.edges[0]
      console.log(articles)
      return (
        <Wrapper>
          <div id="explainers">
            <WordWithLine word="EXPLAIN IT TO ME" lineColor="#F05237"/>
              <div className="row">
                <Feature articles={articles}/>
                <Explainer articles={articles}/>
              </div>

              <New articles={articles}/>
            



          </div>
        </Wrapper>
      )
    }}
  />
)

export default ExplainItToMe