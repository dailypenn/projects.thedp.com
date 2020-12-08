import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { BottomTextImage, TextImage } from '../../shared'
import { Wrapper } from './shared'

const News = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "news_wb_2020.json" } }) {
          edges {
            node {
              childrenNewsWb2020Json {
                tag
                title
                description
                byline
                link
                image {
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
      const {
        node: { childrenNewsWb2020Json: articles },
      } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div className="row main" id="news">
            <div className='col-md-6'>
              <TextImage article = {articles[0]} />
              <TextImage article = {articles[1]} />
            </div>
            <div className='col-md-6'>
              <TextImage article = {articles[2]} />
              <TextImage article = {articles[3]} />
            </div>
          </div>
          <div className="row main">
            <BottomTextImage 
              article = {articles[1]} 
              miniHeader = {'Student'}
              color = {'rgba(3,47,183, 0.57)'} 
              md = {4}/>
            <BottomTextImage 
              article = {articles[2]} 
              miniHeader = {'Student'}
              color = {'rgba(3,47,183, 0.57)'} 
              md = {4}/>
            <BottomTextImage 
              article = {articles[1]} 
              miniHeader = {'Student'}
              color = {'rgba(3,47,183, 0.57)'} 
              md = {4}/>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default News
