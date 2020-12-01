import React, { Component } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Title, RightDiv } from './AlwaysThere.js'

const WorldHistory = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "worldhistory_GT_2020.json" } }) {
        edges {
          node {
            childrenWorldhistoryGt2020Json {
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 800) {
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
  `)

  const {
    node: { childrenWorldhistoryGt2020Json: stories },
  } = data.allFile.edges[0]

  return (
    <>
      <RightDiv>
        <Title>IN WORLD HISTORY</Title>
        <Carousel autoPlay infiniteLoop>
          {stories.map(story => (
            <div>
              <Img
                fluid={story.image.src.childImageSharp.fluid}
                className="img-fluid"
              />
            </div>
          ))}
        </Carousel>
      </RightDiv>
    </>
  )
}

export default WorldHistory
