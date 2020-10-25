import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'

import {WordWithLine } from './shared'
import { StaticQuery, graphql } from 'gatsby'
import { RADIANT_REGULAR, LORA_REGULAR, FUTURA_REGULAR} from '../../../utils/font'

const BlackWrapper = s.div`
  padding: 1rem 15rem 42rem 15rem;
  background-color: black;
  height: 39rem;
  margin-left: 2rem;
  margin-right: 2rem;

  #subtitle {
    color: #f05237;
    margin: auto;
    width: 65%;
    text-align: center;
    margin-top: -1rem;
    ${FUTURA_REGULAR}
    font-style: normal;
    font-size: 0.75rem;
  }

  #articleRow {
    margin-top: 2rem;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0rem;
  }
`

const IndividualArticle = s.div`
  text-align: center;
  width: 12rem;
  color: #ffeddc;
  ${FUTURA_REGULAR}
  font-style: normal;
  font-weight: 10;
`
const ImageDiv = s.div`
  width: 12rem;
  height: 12rem;
  margin-bottom: 31rem;
  display: table-cell;
  vertical-align: middle;
`
const AuthorDiv = s.p`
  color: #ffeddc;
  margin-top: 1rem;
`
const TitlePara = s.p`
  color: #ffeddc;
  margin-top: 1rem;
`
const Shenanigans = s.p`
  width: 100%;
  text-align: center;
  color: #f05237;
  margin-top: 2rem;
  ${FUTURA_REGULAR}
  font-size: 0.9rem;
  font-style: normal;
`



const ComicRelief = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_utb.json"}}) {
          edges {
            node {
              childrenVote2020UtbJson{
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
      const { node: { childrenVote2020UtbJson: articles } } = data.allFile.edges[0]
      return (
        <BlackWrapper >
          <div id="utb">
            <WordWithLine word="For some comic relief" lineColor="#F05237"/>
            <div id = "subtitle">BROUGHT TO YOU BY UNDER THE BUTTON</div>
          </div>

          <div id="articleRow">
            {articles.map((article) => (
             <IndividualArticle>
              <ImageDiv><Img fluid={article.img.src.childImageSharp.fluid}/></ImageDiv>
               <TitlePara>{article.title}</TitlePara>
                <AuthorDiv>{article.author}</AuthorDiv>
             </IndividualArticle>
            ))}       
        </div>
        <Shenanigans>PRESS FOR SHENANIGANS</Shenanigans>
        {/*
        I tried all of these seperatley and none of them worked
        <Img fluid={"../content/images/2020/vote/shenanigans-button.png"}/>
        <img src ={"../content/images/2020/vote/shenanigans-button.png"}/>
        <img src ={require("../content/images/2020/vote/shenanigans-button.png")}/>
        */}
        </BlackWrapper>
        
      )
    }}
  />
)



export default ComicRelief

