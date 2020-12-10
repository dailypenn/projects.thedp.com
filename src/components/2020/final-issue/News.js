import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import { BottomTextImage, TextImage, LCol, RCol } from '../../shared'
import { Wrapper, SectionHeader } from './shared'

const News = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "final-news-2020.json" } }) {
          edges {
            node {
              childrenFinalNews2020Json {
                title
                description
                author
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
        node: { childrenFinalNews2020Json: articles },
      } = data.allFile.edges[0]

      return (
        <Wrapper>
          <div className="row main" id="news">
            <div className='col-md-12'>
              <SectionHeader>NEWS</SectionHeader>
              <div className='row'>
                <LCol md={6}>
                  <TextImage article = {articles[0]}/>
                  <TextImage article = {articles[1]} />
                </LCol>
                <RCol md={6}>
                  <TextImage article = {articles[2]} />
                  <TextImage article = {articles[3]} />
                </RCol>
              </div>
              <div className="row">
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
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default News
