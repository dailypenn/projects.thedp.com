import React from 'react'
import s from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { Header, WHITE, BLACK, PINK, CenteredButton } from './shared'
import { RowWithPadding } from '../../shared'
import { GOPHER_REGULAR, GOPHER_BOLD } from '../../../utils/font'

const ImagesDiv = s.div`
  margin-top: 1vw;
  margin-bottom: 4vw;
`

const ParaDiv = s.div`
  margin-top: 7vw;
  margin-left: 4vw;
  ${GOPHER_REGULAR}
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

const StyledHeader4 = s.h4`
  ${GOPHER_BOLD}
  color: ${PINK};
`

//renderArrowPrev = (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode;
const AlwaysThere = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "alwaysThere_GT_2020.json" } }) {
        edges {
          node {
            childrenAlwaysThereGt2020Json {
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 1000) {
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
    node: { childrenAlwaysThereGt2020Json: stories },
  } = data.allFile.edges[0]

  return (
    <>
      <div id="always-there" />

      <Header title="ALWAYS THERE" color={PINK} lineHeight="0.7" />

      <Row>
        <Col sm={12} md={7}>
          <ImagesDiv>
            <RowWithPadding padding="3">
              {stories.map(story => (
                <Col sm={12} md={4}>
                  <Img
                    fluid={story.image.src.childImageSharp.fluid}
                    className="img-fluid"
                    style={{ 'margin-top': '1vw' }}
                  />
                </Col>
              ))}
            </RowWithPadding>
          </ImagesDiv>
        </Col>
        <Col sm={12} md={4}>
          <ParaDiv>
            <StyledHeader4>THROUGH THE DECADES</StyledHeader4>
            <p style={{ fontSize: '0.9em' }}>
              UPenn students have always been at the forefront of social justice
              issues and its solutions, and wherever it happens, the DP is there
              to spotlight extraordinary causes and individuals to spread
              awareness and to bring to our attention important events that
              demand to be noticed.
            </p>
            <p style={{ fontSize: '0.9em' }}>
              From uncovering unjust surveillance, participating in sit-ins, and
              protesting police brutality, student activism has evolved
              tremendously over the years and continues to be one of the Quakers
              community’s most distinctive characteristics. The DP evolves just
              as our community does, inspired to keep up with its achievements
              and dedicated to sharing them to the wider world.
            </p>
            <CenteredButton
              text="Explore Our Archives"
              bgColor={BLACK}
              textColor={WHITE}
              posLeft
              width="80"
              link="https://dparchives.library.upenn.edu/"
            />
          </ParaDiv>
        </Col>
      </Row>
    </>
  )
}

export default AlwaysThere
