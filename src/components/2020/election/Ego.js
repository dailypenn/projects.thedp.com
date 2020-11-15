import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import {
  SectionHeader,
  Title,
  Author,
  VerticalCol as Vertical,
  StyledRow,
  Wrapper,
  ColWithMargin,
} from './shared'
import { StyledLink, Ads } from '../../shared'

import Articles from '../../../content/json/2020/34st-election/ego.json'

const Ego = () => {
  const { troye, sarah, campaign } = useStaticQuery(graphql`
    query {
      troye: file(relativePath: { eq: "troye.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sarah: file(relativePath: { eq: "sarah-min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      campaign: file(relativePath: { eq: "campaign-trail.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="ego">
      <SectionHeader>EGO</SectionHeader>
      <StyledRow padding="12">
        <ColWithMargin md={5}>
          <StyledLink href={Articles[0].link} target="_blank">
            <Img fluid={troye.childImageSharp.fluid} />
            <Title left> {Articles[0].title} </Title>
            <Author left>BY ANGELA SHEN</Author>
          </StyledLink>
        </ColWithMargin>
        <Col md={6}>
          <Row>
            <Col md={5}>
              <Img fluid={sarah.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <StyledLink href={Articles[1].link} target="_blank">
                <Title left> {Articles[1].title} </Title>
                <Author left>BY TAMSYN BRANN</Author>
              </StyledLink>
            </Vertical>
          </Row>
          <Row style={{ marginTop: '2vw' }}>
            <Col md={5}>
              <Img fluid={campaign.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <StyledLink href={Articles[2].link} target="_blank">
                <Title left> {Articles[2].title} </Title>
                <Author left>BY MADDIE MULDOON</Author>
              </StyledLink>
            </Vertical>
          </Row>
        </Col>
      </StyledRow>
      <Ads />
    </Wrapper>
  )
}

export default Ego
