import React from 'react'
import { Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import Img from 'gatsby-image'

import {
  Header,
  PINK,
  BLACK,
  YELLOW,
  STREET_GREEN,
  UTB_BLUE,
  WHITE,
  TextYellowUnderLine,
} from './shared'
import { RowWithPadding, StyledLink } from '../../shared'
import { Card } from '../housing-guide'

const Quotation = s.p`
  color: ${YELLOW};
  font-size: 5em;
  line-height: 0;
`

const Description = s.p`
  padding: 1rem;
  margin-top: -3rem;
`

const StoryTitle = s.h2`
  color: ${({ idx }) => (idx === 0 ? STREET_GREEN : UTB_BLUE)};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`

const StoryDescription = s.p`
  margin: 3rem 0;
`

const LearnMoreButton = s.div`
  text-transform: uppercase;
  background-color: ${({ idx }) => (idx === 0 ? STREET_GREEN : UTB_BLUE)};
  color: ${WHITE};
  text-align: center;
  width: 50%;
  padding: 0.5rem 0;
`

const CardContent = ({ description, image, idx }) => (
  <StyledLink style={{ padding: '3rem' }}>
    <StoryTitle idx={idx}>
      {' '}
      {idx === 0 ? (
        <text>
          {' '}
          34<sup>st </sup> street{' '}
        </text>
      ) : (
        'under the button'
      )}{' '}
    </StoryTitle>
    <Img fluid={image.src.childImageSharp.fluid} className="img-fluid" />
    <StoryDescription> {description} </StoryDescription>
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <LearnMoreButton idx={idx}> Learn more </LearnMoreButton>
    </div>
  </StyledLink>
)

const Students = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "students_GT_2020.json" } }) {
        edges {
          node {
            childrenStudentsGt2020Json {
              description
              image {
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
  `)

  const {
    node: { childrenStudentsGt2020Json: stories },
  } = data.allFile.edges[0]

  return (
    <>
      <TextYellowUnderLine text="students" />

      <RowWithPadding>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          <Quotation> &#8220; </Quotation>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            ipsum consequat nisl vel pretium lectus quam id leo. Elit
            pellentesque habitant morbi tristique senectus et netus et —Sage
            Levine Video Editor
          </Description>
        </Col>
      </RowWithPadding>

      <RowWithPadding>
        {stories.map((story, idx) => (
          <Col sm={12} md={6}>
            <Card>
              <CardContent {...story} idx={idx} />
            </Card>
          </Col>
        ))}
      </RowWithPadding>
    </>
  )
}

export default Students
