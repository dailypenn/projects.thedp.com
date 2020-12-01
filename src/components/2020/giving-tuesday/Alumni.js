import React from 'react'
import s from 'styled-components'
import { Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  WHITE,
  BLACK,
  TextYellowUnderLine,
  CenteredButton,
  YELLOW,
} from './shared'
import { RowWithPadding } from '../../shared'

import {
  GOPHER_MEDIUM,
  GOPHER_BOLD,
} from '../../../utils/font'

const Wrapper = s.div`
  background-color: #DD666E;
`

const AlumniText = s.div`
  ${GOPHER_MEDIUM}
  @media screen and (max-width: 1300px) {
    font-size: 0.9em;
  }
`

const AlumniName = s.p`
  ${GOPHER_MEDIUM}
  text-transform: uppercase;
  color: ${WHITE};
  font-size: 0.9em;
  margin-top: 1rem;
`

const AlumniPosition = s.p`
  ${GOPHER_MEDIUM}
  color: ${WHITE};
  font-size: 0.9em;
  padding-left: 1rem;
  margin-top: -1rem;
`

const AlumniHeader = s.h4`
  ${GOPHER_BOLD}

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`

const BorderedCol = ({ idx, children }) => {
  if (idx === 0) {
    return (
      <Col
        md={6}
        style={{
          padding: '2rem',
          borderRight: `1px solid ${BLACK}`,
          borderBottom: `1px solid ${BLACK}`,
        }}
      >
        {children}
      </Col>
    )
  } else if (idx === 1) {
    return (
      <Col
        md={6}
        style={{ padding: '2rem', borderBottom: `1px solid ${BLACK}` }}
      >
        {children}
      </Col>
    )
  } else if (idx === 2) {
    return (
      <Col
        md={6}
        style={{ padding: '2rem', borderRight: `1px solid ${BLACK}` }}
      >
        {children}
      </Col>
    )
  }

  return (
    <Col md={6} style={{ padding: '2rem' }}>
      {children}
    </Col>
  )
}

const Person = ({ name, description, dpPosition, currPosition, idx }) => (
  <BorderedCol idx={idx}>
    <AlumniText>
      &ldquo;{description}&rdquo;
      <AlumniName> &#8212;{name} </AlumniName>
      {dpPosition && <AlumniPosition> {dpPosition} </AlumniPosition>}
      <AlumniPosition> {currPosition} </AlumniPosition>
    </AlumniText>
  </BorderedCol>
)

const Paragraph = s.p`
  ${GOPHER_MEDIUM}
  color: ${WHITE};
  font-size: 0.9em;
`

const Alumni = () => {
  const data = useStaticQuery(graphql`
    query {
      dpaa: file(relativePath: { eq: "dpaa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      alumni: allFile(filter: { relativePath: { eq: "alumni_GT_2020.json" } }) {
        edges {
          node {
            childrenAlumniGt2020Json {
              name
              dpPosition
              currPosition
              description
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenAlumniGt2020Json: alumni },
  } = data.alumni.edges[0]

  const { dpaa } = data

  return (
    <Wrapper>
      <TextYellowUnderLine text="alumni" textColor={YELLOW} />

      <RowWithPadding padding="8">
        <Col sm={12} md={7}>
          <Img fluid={dpaa.childImageSharp.fluid} className="img-fluid" />
        </Col>
        <Col sm={12} md={5}>
          <AlumniHeader> DP ALUMNI ASSOCIATION </AlumniHeader>
          <Paragraph>
            An association, a network and really just a
            family! The DPAA and our alumni are the heartbeat of our
            organization. Every year, DP alumni generously give time, guidance
            and the funds we need to operate and advance our organization. Our
            students are incredibly lucky to have such an available and
            supportive volunteer alumni community working closely with them.
          </Paragraph>
          <Paragraph>
            The best part about the DPAA is that it will ALWAYS be a loyal
            network of support for our students and alumni long after their Penn
            journeys have ended.
          </Paragraph>
          <CenteredButton text="donate" textColor={WHITE} bgColor={BLACK} />
        </Col>
      </RowWithPadding>

      <RowWithPadding padding="14" paddingTB="4">
        {alumni.map((person, idx) => (
          <Person {...person} idx={idx} />
        ))}
      </RowWithPadding>
    </Wrapper>
  )
}

export default Alumni
