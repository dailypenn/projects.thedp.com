import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import s from 'styled-components'
import Img from 'gatsby-image'

import {
  YELLOW,
  STREET_GREEN,
  UTB_BLUE,
  WHITE,
  TextYellowUnderLine,
} from './shared'
import { RowWithPadding, StyledLink } from '../../shared'
import { Card } from '../housing-guide'

import {
  GOPHER_MEDIUM,
  GOPHER_REGULAR,
  RAMA_GOTHIC_BOLD,
  GOPHER_BOLD
} from '../../../utils/font'

const Quotation = s.p`
  ${GOPHER_REGULAR}  
  color: ${YELLOW};
  font-size: 15em;
  line-height: 0;
`

const Description = s.p`
  ${GOPHER_MEDIUM}
  font-size: 0.9em;
  margin-top: ${({ marginT = '-3' }) => marginT}rem;
  padding-left: ${({ paddingL = '2' }) => paddingL}rem;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none'} ;
`

const StoryHeader = s.h2`
  ${RAMA_GOTHIC_BOLD}  
  font-size: 6em;
  color: ${({ idx }) => (idx === 0 ? STREET_GREEN : UTB_BLUE)};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`

const StoryTitle = s.p`
 ${GOPHER_BOLD}
 margin-top: 3rem;
`

const StoryDescription = s.p`
  ${GOPHER_REGULAR}  
  margin: 3rem 0;
`

const LearnMoreButton = s.div`
  text-transform: uppercase;
  background-color: ${({ idx }) => (idx === 0 ? STREET_GREEN : UTB_BLUE)};
  color: ${WHITE};
  text-align: center;
  width: 50%;
  padding: 0.5rem 0;

  :hover {
    background-color: ${({ idx }) => (idx === 0 ? '#317C7E' : '#183569')};
  }
`

const AlumniImg = s(Img)`
  border-radius: 50%;
  width: 70%;
  margin: auto;
  margin-bottom: 3rem;
`

const CardContent = ({ description, image, idx, title, link }) => (
  <StyledLink style={{ padding: '3rem' }} href={link} target="_blank">
    <StoryHeader idx={idx}>
      {idx === 0 ? (
        <text>
          34<sup>th </sup> street
        </text>
      ) : (
        'under the button'
      )}
    </StoryHeader>
    <img src={image} className="img-fluid" />
    <StoryTitle> {title} </StoryTitle>
    <StoryDescription> {description} </StoryDescription>
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <LearnMoreButton idx={idx}> Learn more </LearnMoreButton>
    </div>
  </StyledLink>
)

const ColWithMargin = s(Col)`
  margin-left: -3rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`

const Person = ({ name, description, image, position }) => (
  <Row>
    <Col sm={12} md={5}>
      <AlumniImg fluid={image.src.childImageSharp.fluid} />
    </Col>
    <ColWithMargin sm={12} md={7}>
      <Quotation> &#8220; </Quotation>
      <Description> {description} </Description>
      <Description marginT="0" uppercase> &#8212;{name} </Description>
      <Description marginT="-1" paddingL="3"> {position} </Description>
    </ColWithMargin>
  </Row>
)

const Students = () => {
  const data = useStaticQuery(graphql`
    query {
      students: allFile(filter: { relativePath: { eq: "students_GT_2020.json" } }) {
        edges {
          node {
            childrenStudentsGt2020Json {
              name
              description
              position
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

      others: allFile(filter: { relativePath: { eq: "streetUTB_GT_2020.json" } }) {
        edges {
          node {
            childrenStreetUtbGt2020Json {
              title
              description
              image
              link
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenStudentsGt2020Json: students },
  } = data.students.edges[0]

  const {
    node: { childrenStreetUtbGt2020Json: stories },
  } = data.others.edges[0]

  return (
    <>
      <TextYellowUnderLine text="students" />

      <RowWithPadding padding="5" marginTB="3">
        {students.map(student => (
          <Col sm={12} md={6}>
            <Person {...student} />
          </Col>          
        ))}
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
