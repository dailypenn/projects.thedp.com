import React from 'react'
import s from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'

import { Wrapper, SectionHeader, MustRead, BigArticle } from './shared'

const Extra = ({ articles }) => (
  <div>
    <div className="col" style={{ padding: '2rem 0' }}>
      <BigArticle article={articles[0]} />
      <BigArticle article={articles[1]} />
    </div>
  </div>
)

const ArticlesWrapper = s.div`
  @media screen and (max-width: 768px) {
    padding-left: 0rem;
  }
`

const Street = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "final-34st.json" } }) {
        edges {
          node {
            childrenFinal34StJson {
              title
              link
              section
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
      <div className="row main" id="34st">
        <SectionHeader>34th STREET MAGAZINE</SectionHeader>
        <div className="row">
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
