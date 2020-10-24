import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import { Wrapper, WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'

const Explainer = ({articles}) => (
  <div className="col-md-4 pr-0">
    <div class="border border-dark">
      <Img fluid={articles[0].img.src.childImageSharp.fluid} />
    </div>
    <p className="text-center text-danger font-weight-bold pt-3"> EXPLAINER </p>
    <p className="text-center" style={{fontSize: 28}}> {articles[0].title} </p>
    <p className="text-center"> {articles[0].description} </p>
    <p className="text-center text-uppercase"> BY {articles[0].author} </p>
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
      <p className="text-danger font-weight-bold"> FEATURE </p>
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
const BlueRedBar = s.div`
  width: 15%;
  height: 10px;
  background-color: #D70000;
  margin-left: auto;
  margin-right: auto;
`

const New = ({articles}) => (
  <div className="row">
    <div className="col-md-4 pl-0">
      <NewText>
        <p className="text-danger font-weight-bold"> NEW! </p>
        <p className="w-100" style={{fontSize: 36}}> {articles[0].title} </p>
        
    <BlueRedBar>
      <div className="col w-50 h-100 px-0" style={{backgroundColor: "#2a5ad5"}}/>
    </BlueRedBar>
        <div className="d-flex justify-content-center">
          <p className="w-75"> {articles[0].description} </p>
        </div>
        <p className="pt-3 text-uppercase"> BY {articles[0].author} </p>
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