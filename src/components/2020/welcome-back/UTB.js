import React from 'react'
import s from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { KARLA_BOLD, KARLA_REGULAR, FJALLA_REGULAR } from '../../../utils/font'
import BracketsText from './BracketsText'

const UTB_BLUE = '#456CB3'
const HEADLINE_DARK_GRAY = '#283033'
const SUBHEAD_LIGHT_GRAY = '#707070'

const Wrapper = s.div` 
  text-align: center; 
  border-top: 2px solid #456CB3;
  background: #F6F7F7;
  margin: 0 5rem;
  margin-top: 10rem;

  img {
    left: 40%;
    background-color: #fff;
    padding: 1rem 2rem;
    border-top: 2px solid ${UTB_BLUE};
    border-bottom: 2px solid ${UTB_BLUE};
  }
`

const Title = s.div`
  color: ${SUBHEAD_LIGHT_GRAY};
  font-size: 85%;
  ${KARLA_REGULAR}
`

const Subtitle = s.div`
  color: ${UTB_BLUE};
  font-size: 110%;
  ${FJALLA_REGULAR}
`

const ArticleTag = s.div`
  margin-top: 0.5rem;
  font-size: 120%;
  color: ${UTB_BLUE};
  ${KARLA_BOLD}
`

const ArticleHeadline = s.div`
  margin-top: 0.3rem;
  font-size: 150%;
  color: ${HEADLINE_DARK_GRAY};
  line-height: 97%;
  ${KARLA_BOLD}
`

const ByLine = s.div`
  margin-top: 1rem;
  font-size: 80%;
  color: ${SUBHEAD_LIGHT_GRAY};
  ${KARLA_REGULAR}
`

const MoreLink = s.div`
  font-size: 130%;
  color: ${UTB_BLUE};

  ${KARLA_BOLD}
`

const UTB_ARROW = () => (<div style={{ color: UTB_BLUE, fontSize: '120%' }}> &#10230; </div>)

const UTB = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: { name: { eq: "utb" }, sourceInstanceName: { eq: "json" } }) {
          edges {
            node {
              childrenUtbJson {
                tag
                headline
                byLine
                image {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 600, maxHeight: 600) {
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
      const { node: { childrenUtbJson: articles } } = data.allFile.edges[0]

      return (
        <Wrapper>
          <img src='/img/utb-logo-with-text.png' height="110px" style={{ transform: 'translate(0, -3.5rem)' }}/>
          <Title>Under the Button is the University of Pennsylvania's <i>truly</i> independent satire publication</Title>
          <Subtitle>Think the Onion, but better (or worse, if you ask the DP).</Subtitle>

          <div className="row" style={{ margin: '2rem 0', padding: '0 2rem' }}>
            {articles.map(article => (
              <div className="col">
                <Img fluid={article.image.src.childImageSharp.fluid} />
                <ArticleTag> {article.tag} </ArticleTag>
                <ArticleHeadline> {article.headline} </ArticleHeadline>
                <ByLine> {article.byLine} </ByLine>
                <UTB_ARROW />
              </div>
            ))}
          </div>

          <MoreLink> More shenainigans this way </MoreLink>
          
          <div style={{ padding: '0 15rem', marginTop: '2rem' }}>
            <BracketsText bracketColor={UTB_BLUE} text="We publish new articles everyday directly to our website, as well as to Facebook and Twitter. We’re accepting applications now, so if you’re interested in comedy, satire, or just want to subject the rest of campus to your sense of humor, we’re the club for you." />
          </div>
        </Wrapper>
      )
    }}
  />
)

export default UTB