import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

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

      const topArticles = articles.slice(0, 4)
      const bottomArticles = articles.slice(4)

      return (
        <Wrapper id="news">
          <div className="row main">
            <div className='col-md-12'>
              <SectionHeader>NEWS</SectionHeader>
              <Row>
                {topArticles.map(article => <TextImage article={article}/>)}
              </Row>
              <Row style={{ padding: '0 1rem' }}>
                <BottomTextImage 
                  article = {bottomArticles[0]} 
                  color = {'rgba(3,47,183, 0.57)'} 
                  md = {4}/>
                <BottomTextImage 
                  article = {bottomArticles[1]} 
                  color = {'rgba(3,47,183, 0.57)'} 
                  md = {4}/>
                <BottomTextImage 
                  article = {bottomArticles[2]}
                  color="rgba(3,47,183, 0.57)"
                  md={4} />
              </Row>
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default News
