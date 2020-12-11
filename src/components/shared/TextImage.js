import React from 'react'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StyledLink } from './Typograph'
import { FUTURA_BOLD, FUTURA_REGULAR } from '../../utils/font'
import { Row, Col } from 'react-bootstrap'

const FeatureText = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1.5rem 0rem;
  color: #FEFAD8;
  text-align: left;
`
const Title = s.p`
  ${FUTURA_REGULAR}
  font-size: 150%;
  padding: 0 2rem;
  line-height: 1;
`
const Description = s.p`
  ${FUTURA_REGULAR}
  font-size:1em;
  line-height:1.1em;
  padding: 1rem 2rem 0;
  @media (max-width: 1024px) {
    display: None;
  }
`
const ArticleAuthor = s.p`
  ${FUTURA_REGULAR}
  padding: 0 2rem;
  text-transform: uppercase;
`
const BottomWrapper = s.div`
  background: ${({ color }) => `linear-gradient(${color}, ${color})`};
  position: absolute;
  bottom: 0rem;
  width:100%;
`

const DarkBackgroundImage = s(BackgroundImage)`
  width: 100%;
  padding-top: 100%;
  postion: relative;
  opacity: 1 !important;
  background: ${({ Dark }) => Dark ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
    : 'none'};
  background-size: cover;
`

const MiniHeader = s.p`
  ${FUTURA_REGULAR}
  padding: 1rem 2rem 0;
  font-size: 1em;
  text-transform: uppercase;
`

const BottomDescription = s.p`
  ${FUTURA_REGULAR}
  padding: 0 2rem;
  font-size: 1em;
  line-height: 1.1em;
`

export const TextImage = ({ article, padding }) => (
  <Col md={6} style={{ padding: padding || '1rem' }}>
    <StyledLink href={article.link} target="_blank">
      <DarkBackgroundImage
        fluid={article.image.src.childImageSharp.fluid}
        style={{ border: 'none' }}
        Dark
      >
        <FeatureText>
          <Title>{article.title} </Title>
          <BottomWrapper>
            <Description> {article.description} </Description>
            <ArticleAuthor> {article.author} </ArticleAuthor>
          </BottomWrapper>
        </FeatureText>
      </DarkBackgroundImage>
    </StyledLink>
  </Col>
)

export const BottomTextImage = ({ article, color, md=12 }) => (
  <Col md={md} style={{ padding: 0 }}>
    <StyledLink href={article.link} target="_blank">
      <DarkBackgroundImage
        fluid={article.image.src.childImageSharp.fluid}
        style={{ border: 'none' }}
      >
        <FeatureText>
          <BottomWrapper color={color}>
            <MiniHeader> BY {article.author} </MiniHeader>
            <BottomDescription> {article.title} </BottomDescription>
          </BottomWrapper>
        </FeatureText>
      </DarkBackgroundImage>
    </StyledLink>
  </Col>
)
const BigTitle = s.p`
  ${FUTURA_BOLD}
  font-size: 250%;
  padding: 0 2rem;
  line-height: 1.1;
  @media (max-width: 1024px) {
    font-size: 150%;
  }
`

export const BigTextImage = ({ article }) => (
  <Row>
    <Col>
      <StyledLink href={article.link} target="_blank">
        <DarkBackgroundImage
          fluid={article.image.src.childImageSharp.fluid}
          style={{ border: 'none' }}
          Dark = {true}
        >
          <FeatureText>
            <BigTitle>{article.title} </BigTitle>
            <Description> {article.description} </Description>
            <ArticleAuthor> BY {article.author} </ArticleAuthor>
          </FeatureText>
        </DarkBackgroundImage>
      </StyledLink>
    </Col>
  </Row>
)