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

const Ego = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "ego.json"}}) {
        edges {
          node {
            childrenEgoJson {
              title
              authors
              link
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
    }
  `)

  const {
    node: { childrenEgoJson: articles },
  } = data.allFile.edges[0]

  return (
    <Wrapper id="ego">
      <SectionHeader>EGO</SectionHeader>
      <StyledRow padding="12">
        <ColWithMargin md={5}>
          <StyledLink href={articles[0].link} target="_blank">
            <Img fluid={articles[0].image.src.childImageSharp.fluid} />
            <Title left> {articles[0].title} </Title>
            <Author left>BY {articles[0].authors}</Author>
          </StyledLink>
        </ColWithMargin>
        <Col md={6}>
          <Row>
            <Col md={5}>
              <Img fluid={articles[1].image.src.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <StyledLink href={articles[1].link} target="_blank">
                <Title left> {articles[1].title} </Title>
                <Author left>BY {articles[1].authors}</Author>
              </StyledLink>
            </Vertical>
          </Row>
          <Row style={{ marginTop: '2vw' }}>
            <Col md={5}>
              <Img fluid={articles[2].image.src.childImageSharp.fluid} />
            </Col>
            <Vertical md={7}>
              <StyledLink href={articles[2].link} target="_blank">
                <Title left> {articles[2].title} </Title>
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
