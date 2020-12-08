import React from 'react'
import s from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StyledLink } from './Typograph'
import { FUTURA_REGULAR } from '../../utils/font'
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
  @media (max-width: 1024px) {
    display: None;
  }
`
const ArticleAuthor = s.p`
  ${FUTURA_REGULAR}
  text-transform: uppercase;
`
const BottomWrapper = s.div`
  background: ${({ color }) => `linear-gradient(${color}, ${color})`};
  padding: 1rem 2rem 0;
  position: absolute;
  bottom: 0rem;
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

const StyledRow = s(Row)`
  margin: 10%;
`

const miniHeader = s.p`
  ${FUTURA_REGULAR}
  font-size:0.4em;
`
const BottomDescription = s.p`
${FUTURA_REGULAR}
font-size:1em;
line-height:1.1em;
`

export const TextImage = ({ article }) => (
  <StyledRow>
    <Col>
      <StyledLink href={article.link} target="_blank">
        <DarkBackgroundImage
          fluid={article.image.src.childImageSharp.fluid}
          style={{ border: 'none' }}
          Dark = {true}
        >
          <FeatureText>
            <Title>{article.title} </Title>
            <BottomWrapper>
              <Description> {article.description} </Description>
              <ArticleAuthor> {article.byline} </ArticleAuthor>
            </BottomWrapper>
          </FeatureText>
        </DarkBackgroundImage>
      </StyledLink>
    </Col>
  </StyledRow>
)

export const BottomTextImage = ({ article, miniHeader, color, md = 12 }) => (
  <Col md = {md} style={{padding:'0px'}}>
    <StyledLink href={article.link} target="_blank">
      <DarkBackgroundImage
        fluid={article.image.src.childImageSharp.fluid}
        style={{ border: 'none' }}
      >
        <FeatureText>
          <BottomWrapper color ={color}>
            <miniHeader> {miniHeader} </miniHeader>
            <BottomDescription> {article.title} </BottomDescription>
          </BottomWrapper>
        </FeatureText>
      </DarkBackgroundImage>
    </StyledLink>
  </Col>
)