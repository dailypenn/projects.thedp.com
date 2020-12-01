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
  Wrapper,
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
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "hot_takes.json" } }) {
        edges {
          node {
            childrenHotTakesJson {
              title
              abstract
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
    node: { childrenHotTakesJson: articles },
  } = data.allFile.edges[0]

  return (
    <Wrapper id="hot-takes">
      <SectionHeader>HOT TAKES</SectionHeader>
      <StyledRow padding="13">
        <ColWithMargin sm={12} md={5}>
          <StyledLink href={articles[0].link} target="_blank">
            <Row>
              <Col>
                <Img fluid={articles[0].image.src.childImageSharp.fluid} />
              </Col>
              <VerticalCol>
                <Title left> {articles[0].title} </Title>
                <Author left>BY {articles[0].authors}</Author>
              </VerticalCol>
            </Row>
          </StyledLink>
          <StyledLink href={articles[1].link} target="_blank">
            <SpacedRow>
              <Col>
                <Img fluid={articles[1].image.src.childImageSharp.fluid} />
              </Col>
              <VerticalCol>
                <Title left> {articles[1].title} </Title>
                <Author left>BY {articles[1].authors}</Author>
              </VerticalCol>
            </SpacedRow>
          </StyledLink>

          <StyledLink href={articles[2].link} target="_blank">
            <SpacedRow>
              <Col>
                <Img fluid={articles[2].image.src.childImageSharp.fluid} />
              </Col>
              <VerticalCol>
                <Title left> {articles[2].title} </Title>
                <Author left>BY {articles[2].authors}</Author>
              </VerticalCol>
            </SpacedRow>
          </StyledLink>
        </ColWithMargin>

        <Col sm={12} md={6}>
          <StyledLink href={articles[3].link} target="_blank">
            <Img fluid={articles[3].image.src.childImageSharp.fluid} />
            <EditorTitle>
              {' '}
              <b>{articles[3].title}</b>{' '}
            </EditorTitle>
            <Title left larger>
              {' '}
              {articles[3].abstract}{' '}
            </Title>
            <Author left>BY {articles[3].authors}</Author>
          </StyledLink>
        </Col>
      </StyledRow>
    </Wrapper>
  )
}

export default HotTakes
