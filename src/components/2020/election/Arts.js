import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import Img from "gatsby-image"
import { SectionHeader, Title, Author } from "./shared"
import s from 'styled-components'

import { FUTURA_REGULAR} from "../../../utils/font"


const LeftTitle = s.div`
  position: relative;
  bottom: 60%;
  width: 40%;
	color: white;
	margin-left: 7%;
`

const EditorTitle = s.h1`
  ${FUTURA_REGULAR}
  color: white;
  font-size: .75em;
  margin-top: 1vw;
	margin-bottom: -1vw;
`

const Arts = () => {
  const { billStrobel, vote } = useStaticQuery(graphql`
      query {
        billStrobel: file(relativePath: {eq: "bill-strobel.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
  
        vote: file(relativePath: {eq: "vote.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)
  return <>
    <SectionHeader>ARTS</SectionHeader>
    <Container>
      <Row>
        <Col md={6} >
          <Img fluid={billStrobel.childImageSharp.fluid} style={{ filter: `brightness(.7)` }} />
          <LeftTitle>
            <EditorTitle><b>PHOTO ESSAY</b></EditorTitle>
                <Title left larger style={{ color: "white" }} >Philly Artist Bill Strobel Recreates Lady Justice With Chalk</Title>
          </LeftTitle>
        </Col>
        <Col md={6}>
          <Img fluid={vote.childImageSharp.fluid} />
          <Title center larger >Pre-2020 Election, Protest Art Demands Change</Title>
          <Author center>BY ALLISON STILLMAN</Author>
        </Col>
      </Row>
    </Container>
  </>
}

export default Arts
