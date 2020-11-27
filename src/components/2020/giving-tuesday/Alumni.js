import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Header, WHITE, BLACK } from './shared'
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
`

const AlumniImg = s(Img)`
  border-radius: 50%;
  width: 70%;
  margin: auto;
  margin-bottom: 3rem;
`

const LogoImg = s(Img)`
  margin: auto;
  width: 40%;
`

const BorderedCol = ({ idx, children }) => {
  if (idx === 0) {
    return (
      <Col md={6} style={{ padding: '2rem', borderRight: `1px solid ${BLACK}`, borderBottom: `1px solid ${BLACK}` }}>
        {children}
      </Col>
    )
  } else if (idx === 1) {
    return (
      <Col md={6} style={{ padding: '2rem', borderBottom: `1px solid ${BLACK}` }}>
        {children}
      </Col>
    )
  } else if (idx === 2) {
    return (
      <Col md={6} style={{ padding: '2rem', borderRight: `1px solid ${BLACK}` }}>
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

const Person = ({ name, description, image, logo, idx }) => (
  <BorderedCol idx={idx}>
    <Row>
      <Col md={6}>
        <AlumniImg fluid={image.src.childImageSharp.fluid} />
        <LogoImg fluid={logo.src.childImageSharp.fluid} />
      </Col>
      <Col md={6}>
        <AlumniText>
          <AlumniName> {name} </AlumniName>
          {description}
        </AlumniText>
        
      </Col>
    </Row>
  </BorderedCol>
)

const CompanyText = s.h3`
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  margin: 1rem 0 0 0;
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
      <Header title="alumni" subtitle="always here" />
      
      <RowWithPadding padding="6">
        {alumni.map((person, idx) => (
          <Person {...person} idx={idx} />
        ))}
      </RowWithPadding>

      <CompanyText> you can find DP alum at the following companies: </CompanyText>

    </Wrapper>
  )
}

export default Alumni