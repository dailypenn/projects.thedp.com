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

const Wrapper = s.div`
  background-color: #DD666E;
`

const AlumniText = s.div`
  @media screen and (max-width: 1300px) {
    font-size: 0.8em;
  }
`

const AlumniName = s.text`
  text-transform: uppercase;
  color: ${WHITE};
  font-size: 1.2em;
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

const Person = ({ name, description, idx }) => (
  <BorderedCol idx={idx}>
    <AlumniText>
      <AlumniName> {name} </AlumniName>
      {description}
    </AlumniText>
  </BorderedCol>
)

const Paragraph = s.p`
  color: ${WHITE};
`

const Alumni = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "alumni_GT_2020.json" } }) {
        edges {
          node {
            childrenAlumniGt2020Json {
              name
              description
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
              logo {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
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
    node: { childrenAlumniGt2020Json: alumni },
  } = data.allFile.edges[0]

  return (
    <Wrapper>
      <TextYellowUnderLine text="alumni" textColor={YELLOW} />

      <RowWithPadding padding="12">
        <Col sm={12} md={7}></Col>
        <Col sm={12} md={5}>
          <h4> DP ALUMNI ASSOCIATION </h4>
          <Paragraph>
            {' '}
            DP ALUMNI ASSOCIATION An association, a network and really just a
            family! The DPAA and our alumni are the heartbeat of our
            organization. Every year, DP alumni generously give time, guidance
            and the funds we need to operate and advance our organization. Our
            students are incredibly lucky to have such an available and
            supportive volunteer alumni community working closely with them.{' '}
          </Paragraph>
          <Paragraph>
            {' '}
            The best part about the DPAA is that it will ALWAYS be a loyal
            network of support for our students and alumni long after their Penn
            journeys have ended.{' '}
          </Paragraph>
          <Paragraph>
            {' '}
            Make your annual gift today and become a proud member of the DPAA.{' '}
          </Paragraph>
          <CenteredButton text="donate" textColor={WHITE} bgColor={BLACK} />
        </Col>
      </RowWithPadding>

      <RowWithPadding padding="14" paddingTB="5">
        {alumni.map((person, idx) => (
          <Person {...person} idx={idx} />
        ))}
      </RowWithPadding>
    </Wrapper>
  )
}

export default Alumni
