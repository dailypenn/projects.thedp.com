import React , { Component }from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import { Header, WHITE, BLACK, YELLOW, PINK, CenteredButton } from './shared'
import { RowWithPadding } from '../../shared'
import Img from 'gatsby-image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import PennHistory from "./PennHistoryCarousel.js"
import WorldHistory from "./WorldHistoryCarousel.js"

const Wrapper = s.div`
  background-color: ${PINK};
  padding-bottom: 5rem;
`
const ImagesDiv = s.div`
  margin-top: 1vw;
  margin-bottom: 4vw;
`
const ParaDiv = s.div`
  margin-top: 7vw;
  margin-left: 4vw;
  font-family: 'Gopher', sans-serif;
`
export const Title = s.p`
  font-size: 4em;
  color: ${PINK};
  text-transform: uppercase;
  padding-left: 2rem;
  line-height: 0.66;
  margin-bottom: 3rem;
  margin-top: 3rem;
`
export const LeftDiv = s.div`
  width: 60%;
  margin: auto;
`
export const RightDiv = s.div`
  width: 60%;
  margin: auto;
`
//renderArrowPrev = (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode;
const AlwaysThere = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { relativePath: { eq: "decades_GT_2020.json" } }) {
      edges {
        node {
          childrenDecadesGt2020Json {
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
  node: { childrenDecadesGt2020Json: stories },
} = data.allFile.edges[0]

  return(
    <>
      <Wrapper>
        <Header title="ALWAYS THERE" titleColor={WHITE} subColor={YELLOW} />
        <Row>
          <Col sm={12} md={7}>
            <ImagesDiv>
              <RowWithPadding padding="3" >
                {stories.map((story) => (
                  <Col sm={12} md={4}>
                    <Img fluid={story.image.src.childImageSharp.fluid} className="img-fluid" style={{"margin-top": "1vw"}} />
                  </Col>
                ))}
              </RowWithPadding>
            </ImagesDiv>
          </Col> 
          <Col sm={12} md={4}>
            <ParaDiv>
                  <h4>THROUGH THE DECADES</h4>
                  <p style = {{color: WHITE}}>UPenn students have always been at the forefront of social justice issues and its solutions, and wherever it happens, the DP is there to spotlight extraordinary causes and individuals to spread awareness and to bring to our attention important events that demand to be noticed.</p>
                  <p style = {{color: WHITE}}>From uncovering unjust surveillance, participating in sit-ins, and protesting police brutality, student activism has evolved tremendously over the years and continues to be one of the Quakers community’s most distinctive characteristics. The DP evolves just as our community does, inspired to keep up with its achievements and dedicated to sharing them to the wider world.</p>
                  <CenteredButton text="donate" bgColor={BLACK} textColor={WHITE} posLeft width="30" />
            </ParaDiv>
          </Col>
        </Row>
        <div style = {{textAlign: "center", backgroundColor: "#F8F7F7"}}>
          <Row>
            <Col sm={12} md={6} style ={{borderRight: "2px dotted #747373"}} >
              <PennHistory/>
            </Col>
            <Col sm={12} md={6} >
              <WorldHistory/>
            </Col>        
          </Row>             
        </div>
      </Wrapper>
    </>  
  )
}

export default AlwaysThere

