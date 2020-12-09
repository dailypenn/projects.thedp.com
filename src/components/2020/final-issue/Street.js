import React from 'react'
import s from 'styled-components'
import { Row } from 'react-bootstrap'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  Wrapper,
  SectionHeader,
  LargeArticleHeader,
  ArticleHeader,
  ArticleAuthor,
  StyledAnchor,
} from './shared'

import { RADIANT_REGULAR } from '../../../utils/font'

const H2 = s.h2` 
  text-align: center; 
  font-size: 4em;
  ${RADIANT_REGULAR}
  color: #639E7D;
  margin: 2rem;
`

const ExtraArticle = ({ article }) => (
  <div className="text-center">
    <StyledAnchor href={article.link} target="_blank" >
      <Img style fluid={article.image.src.childImageSharp.fluid} style={{marginLeft: 'auto', marginRight: 'auto',maxWidth: '600px', maxHeight: '350px'}} />
      <LargeArticleHeader style={{ marginTop: '1.5rem' }}>
        {article.title}
      </LargeArticleHeader>
      <ArticleAuthor style={{ marginTop: '0.5rem' }}>
        BY {article.author}
      </ArticleAuthor>
    </StyledAnchor>
  </div>
)

const Extra = ({ articles }) => (
  <div>
    <div className="col" style={{padding: '2rem 0'}}>
      <ExtraArticle article={articles[0]} />
      <ExtraArticle article={articles[1]} />
    </div>
  </div>
)

const MustReadArticle = ({ article }) => (
  <StyledAnchor href={article.link} target="_blank" >
    <div className="row" style={{ marginBottom: '3rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
      <div className="col-md-6">
        <Img fluid={article.image.src.childImageSharp.fluid}/>
      </div>
      <div className="col-md-6">
        <ArticleHeader>
          {' '}
          {article.title}{' '}
        </ArticleHeader>
        <ArticleAuthor style={{ fontSize: '80%' }}>
          {' '}
          BY {article.author}{' '}
        </ArticleAuthor>
      </div>
    </div>
  </StyledAnchor>
)

const MustRead = ({ articles }) => (
  <div className="col-md-6">
    <div style={{ backgroundColor: '#F8FC57' }}>
      <div
        className="d-flex justify-content-center"
        style={{ padding: '1rem' }}
      />
      <H2> STREET'S PICKS OF 2020: </H2>
      <div style={{ padding: '0 1rem' }}>
        {articles.map(article => (
          <MustReadArticle article={article} />
        ))}
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ padding: '1rem' }}
      />
    </div>
  </div>
)

const ArticlesWrapper = s.div`
  .article-wrapper {
    padding: 4rem;

    @media screen and (max-width: 768px) {
      padding-left: 0rem;
    }
  }
`

const Street = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "final-34st.json"}}) {
        edges {
          node {
            childrenFinal34StJson {
              title
              link
              author
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 400) {
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
    node: { childrenFinal34StJson: articles },
  } = data.allFile.edges[0]

  return (
    <Wrapper>
      <div id="opinion">
        <SectionHeader>34TH STREET MAGAZINE</SectionHeader>
        <div className="row" style={{ margin: '3rem' }}>
          <MustRead articles={articles.slice(0, 3)} />
          <ArticlesWrapper className="col-md-6">
            <Extra articles={articles.slice(3)} />
          </ArticlesWrapper>
        </div>
      </div>
    </Wrapper>
  )
}

export default Street
