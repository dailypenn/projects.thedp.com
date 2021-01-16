import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import {
  Wrapper,
  WordWithLine,
  ArticleHeader,
  ArticleAuthor,
  StyledAnchor,
  RedSectionHeader,
} from './shared'
import { FUTURA_REGULAR } from '../../../utils/font'
import { Ads } from '../../shared'

const NewsLetterWrapper = s.div`
  margin-bottom: 2rem;

  .newsletter {
    justify-content: center;
    margin-top: 1rem;
    padding: 0 10rem;

    @media(max-width: 768px) {
      padding: 0 2rem;
    }
  }
`

const NewsLetter = s.img`
  :hover { 
    opacity: 70%;
  }
`

const StreetIssue = () => (
  <StyledAnchor href="https://www.34st.com/" target="_blank">
    <NewsLetterWrapper>
      <div className="row newsletter">
        <div className="col">
          <NewsLetter src="/img/34st-shoutout.png" className="img-fluid" />
        </div>
      </div>
    </NewsLetterWrapper>
  </StyledAnchor>
)

const videos = [
  {
    title:
      'Penn Prof. Mitchell Berman Discusses Legitimacy Of Election, Politicization Of Courts',
    link: 'https://www.youtube.com/embed/eIQGxVNwhUs',
    caption:
      'The Daily Pennsylvanian sat down with Professor Mitchell Berman, Leon Meltzer Professor of Law at the University of Pennsylvania Law School, to discuss threats to the legitimacy of the 2020 election and the politicization of courts.',
    tag: 'video',
  },
  {
    title: 'Penn Students On Activism And Politics In The Age Of COVID-19',
    link: 'https://www.youtube.com/embed/hguRV7U5Q94',
    caption:
      'Penn student activists from different political organizations on campus consider the stakes of the upcoming election and what civic engagement means to them.',
    tag: 'video',
  },
  {
    title:
      'Penn Democrats Deliver Mail-In Ballot Applications To Off-Campus Student Apartments',
    link: 'https://www.youtube.com/embed/3KJrlF9T4Rc',
    caption:
      'On Oct. 4, Penn Democrats distributed voter materials to off-campus apartments in an attempt to increase student voter turnout.',
    tag: 'video',
  },
]

const Video = s.iframe`
  height: ${({ height = '275px' }) => height};

  @media (max-width: 768px) {
    height: 200px;
  }
`

const PhotoEssay = ({ article }) => (
  <StyledAnchor href={article.link} target="_blank">
    <Img fluid={article.img.src.childImageSharp.fluid} />
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <RedSectionHeader> {article.tag.toUpperCase()} </RedSectionHeader>
      <ArticleHeader style={{ lineHeight: 1.1 }}>{article.title}</ArticleHeader>
      <Caption>{article.abstract}</Caption>
      <ArticleAuthor>BY {article.authors}</ArticleAuthor>
    </div>
  </StyledAnchor>
)

const Caption = s.p`
  ${FUTURA_REGULAR}
  margin-top: 1rem;
`

const VideoArticle = ({ article, height }) => (
  <>
    <Video
      height={height}
      width="100%"
      src={article.link}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <RedSectionHeader style={{ textAlign: 'center' }}>
        {article.tag.toUpperCase()}
      </RedSectionHeader>
    </div>
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <ArticleHeader style={{ fontSize: '170%', lineHeight: 1.1 }}>
        {article.title}
      </ArticleHeader>
      <Caption>{article.caption}</Caption>
    </div>
  </>
)

const Multimedia = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "vote_2020_multimedia.json" } }) {
          edges {
            node {
              childVote2020MultimediaJson {
                title
                link
                authors
                tag
                abstract
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 600, maxHeight: 1000) {
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
      const {
        node: { childVote2020MultimediaJson: articles },
      } = data.allFile.edges[0]

      return (
        <>
          <Wrapper>
            <div id="multimedia">
              <StreetIssue />
              <WordWithLine word="MULTIMEDIA" lineColor="#F05237" />
              <VideoArticle article={videos[0]} height="400px" />
              <div className="row" style={{ margin: '2rem -15px' }}>
                <div className="col-md-6">
                  <PhotoEssay article={articles} />
                </div>
                <div className="col-md">
                  {videos.slice(1).map(article => (
                    <VideoArticle article={article} />
                  ))}
                </div>
              </div>
            </div>
          </Wrapper>

          <Ads />
        </>
      )
    }}
  />
)

export default Multimedia
