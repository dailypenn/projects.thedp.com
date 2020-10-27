import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'

import { 
  Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleDescription,
  ArticleAuthor, 
  RedSectionHeader,
  StyledAnchor
} from './shared'
import { FUTURA_REGULAR, LORA_REGULAR } from '../../../utils/font'
import DividerLine from '../../../content/images/2020/vote/divider-line.png'

const ExplainWrapper = s.div`
  margin-top: 0rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`

const Explainer = ({ article }) => (
  <div className="col-md-4">
    <ExplainWrapper>
      <StyledAnchor href={article.link} target="_blank">
        <Img fluid={article.img.src.childImageSharp.fluid} />
        <RedSectionHeader style={{textAlign:'center', marginTop: '2rem'}}> EXPLAINER </RedSectionHeader>
        <ArticleHeader style={{textAlign:'center', marginTop: '1rem'}}> {article.title} </ArticleHeader>
        <ArticleDescription style={{textAlign:'center', marginTop: '1rem'}}> {article.description} </ArticleDescription>
        <ArticleAuthor style={{textAlign:'center', marginTop: '1rem'}}> BY {article.author} </ArticleAuthor>
      </StyledAnchor>
    </ExplainWrapper>
  </div>
)

const FeatureText = s.div`
  padding: 1.5rem 1.5rem 1.5rem 2.5rem;
  color: #FFFFFF;
  text-align: left;
`

const Title = s.p`
  ${FUTURA_REGULAR}
  font-size: 200%;
  line-height: 1.1;
`

const Description = s.p`
  ${LORA_REGULAR}
  margin-top: 1rem;
`

const Author = s.p`
  ${FUTURA_REGULAR}
`

const Feature = ({ article }) => (
  <div className="col-md-8">
    <BackgroundImage fluid={article.img.src.childImageSharp.fluid} style={{ border: 'none' }}>
      <StyledAnchor href={article.link} target="_blank">
        <FeatureText>
          <RedSectionHeader> FEATURE </RedSectionHeader>
          <Title className="w-50"> {article.title} </Title>
          <Description> {article.description} </Description>
          <Author className="pt-3 text-uppercase"> BY {article.author} </Author>
        </FeatureText>
      </StyledAnchor>
    </BackgroundImage>
  </div>
)

const NewText = s.div`
  padding-top: 4rem;
  text-align: center;
`

const New = ({ article }) => (
  <StyledAnchor href={article.link} target="_blank">
    <div className="row" style={{ marginTop: '4rem' }}>
      <div className="col-md-4 pl-0">
        <NewText>
          <RedSectionHeader> NEW! </RedSectionHeader>
          <ArticleHeader style={{fontSize: '2.5rem'}}> {article.title} </ArticleHeader>
          <img src={DividerLine} style={{width:'4em', margin:'1em 0em'}}/>
          <ArticleDescription> {article.description} </ArticleDescription>
          <ArticleAuthor> BY {article.author} </ArticleAuthor>
        </NewText>
      </div>
      <div className="col-md-8">
        <iframe src="https://flo.uri.sh/visualisation/3639321/embed" title="Interactive or visual content" frameborder="0" scrolling="no" style="width:100%;height:600px;" />
        <div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/3639321/?utm_source=embed&utm_campaign=visualisation/3639321" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"/> </a></div>
      </div>
    </div>
  </StyledAnchor>
)

const ExplainItToMe = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_ExplainItToMe.json"}}) {
          edges {
            node {
              childrenVote2020ExplainItToMeJson{
                title
                description
                author
                link
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 1000, maxHeight: 600) {
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
    `}
    render={data => {
      const { node: { childrenVote2020ExplainItToMeJson: articles } } = data.allFile.edges[0]
      return (
        <Wrapper>
          <div id="explainers">
            <WordWithLine word="EXPLAIN IT TO ME" lineColor="#F05237"/>
              <div className="row">
                <Feature article={articles[0]}/>
                <Explainer article={articles[1]}/>
              </div>
              <New article={articles[2]}/>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default ExplainItToMe