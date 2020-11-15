import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import s from 'styled-components'

import {
  SectionHeader,
  Title,
  Author,
  VerticalCol,
  StyledRow,
  ColWithMargin,
  Wrapper
} from './shared'
import { FUTURA_REGULAR } from '../../../utils/font'
import { StyledLink } from '../../shared'
import Articles from '../../../content/json/2020/34st-election/hot_takes.json'

const SpacedRow = s(Row)`
  margin-top: 1vw;
`

const EditorTitle = s.h1`
  ${FUTURA_REGULAR}
  color: #1500FF;
  font-size: .75em;
  margin-top: 1vw;
  margin-bottom: -1vw;
  text-transform: uppercase;
`

const HotTakes = () => {
  const { biden, melania, harris, whiteHouse } = useStaticQuery(graphql`
    query {
      biden: file(relativePath: { eq: "biden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      melania: file(relativePath: { eq: "free-melania.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      harris: file(relativePath: { eq: "harris.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      whiteHouse: file(relativePath: { eq: "white-house.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper id="hot-takes">
      <SectionHeader>HOT TAKES</SectionHeader>
      <StyledRow padding="13">
        <ColWithMargin sm={12} md={5}>
          <StyledLink href={Articles[0].link} target="_blank">
            <Row>
              <Col>
                <Img fluid={melania.childImageSharp.fluid} />
              </Col>
              <VerticalCol>
                <Title left> {Articles[0].title} </Title>
                <Author left>BY KIRA WANG</Author>
              </VerticalCol>
            </Row>
          </StyledLink>
          <StyledLink href={Articles[1].link} target="_blank">
            <SpacedRow>
              <Col>
                <Img fluid={harris.childImageSharp.fluid} />
              </Col>
              <VerticalCol>
                <Title left> {Articles[1].title} </Title>
                <Author left>BY EMILY WHITE</Author>
              </VerticalCol>
            </SpacedRow>
          </StyledLink>

          <StyledLink href={Articles[2].link} target="_blank">
            <SpacedRow>
              <Col>
                <Img fluid={biden.childImageSharp.fluid} />
              </Col>
              <VerticalCol>
                <Title left> {Articles[2].title} </Title>
                <Author left>BY HANNAH YUSUF</Author>
              </VerticalCol>
            </SpacedRow>
          </StyledLink>
        </ColWithMargin>

        <Col sm={12} md={6}>
          <StyledLink href={Articles[3].link} target="_blank">
            <Img fluid={whiteHouse.childImageSharp.fluid} />
            <EditorTitle> <b>{Articles[3].title}</b> </EditorTitle>
            <Title left larger> {Articles[3].abstract} </Title>
            <Author left>BY KARIN HANANEL</Author>
          </StyledLink>
        </Col>
      </StyledRow>
    </Wrapper>
  )
}

export default HotTakes
