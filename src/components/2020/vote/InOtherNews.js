import React from 'react'
import Img from 'gatsby-image'
import Carousel from 'react-bootstrap/Carousel'
import { StaticQuery, graphql } from 'gatsby'

import {
  Wrapper, 
  WordWithLine, 
  ArticleHeader, 
  ArticleDescription, 
  ArticleAuthor, 
  StyledAnchor,
  RedSectionHeader
} from './shared'
import DividerLine from '../../../content/images/2020/vote/divider-line.png'
import Ads from '../../shared/Ads'

const Slideshows = [
  {
    "title": "Amid a poll worker shortage, Penn students are stepping up to work on Election Day",
    "link": "https://www.thedp.com/article/2020/10/philadelphia-penn-student-poll-workers-election-day",
    "img":  "/img/election/carousel-0-0.jpg"
  },
  {
    "title": "Penn faculty have donated about 100 times more money to Biden’s campaign than Trump’s",
    "link": "https://www.thedp.com/article/2020/10/penn-donations-fec-professors-faculty-biden-trump",
    "img": "/img/election/carousel-0-1.jpg"
  },
  {
    "title": "84% of surveyed Penn students plan to vote for Joe Biden",
    "link": "https://www.thedp.com/article/2020/10/penn-students-poll-biden-trump-2020-election",
    "img": "/img/election/carousel-0-2.jpg"
  },
  {
    "title": "Penn says it can’t give Election Day off, but it’s unclear what state regulations prevent it",
    "link":"https://www.thedp.com/article/2020/10/penn-election-day-holiday-announcement-academic-calendar",
    "img": "/img/election/carousel-1.jpg"
  },
  {
    "title": "Pennsylvania will allow mail-in ballots this election. Here’s all you need to know.",
    "link": "https://www.thedp.com/article/2020/09/philadelphia-selections-vote-by-mail-and-absentee-ballots",
    "img":  "/img/election/carousel-2.jpg"
  },
  {
    "title": "In exclusive interview, Andrew Yang highlights electoral importance of Penn students",
    "link":"https://www.thedp.com/article/2020/10/andrew-yang-pennsylvania-biden-harris-penn",
    "img": "/img/election/carousel-3.jpg"
  },
  {
    "title": "In Philadelphia, Obama urges Penn community to ‘get to work’ and vote for Biden",
    "link":"https://www.thedp.com/article/2020/10/philly-obama-campaigns-for-biden-penn-students-election",
    "img": "/img/election/carousel-4.jpg"
  },
  {
    "title": "Penn’s election experts claim media outlets will responsibly call the presidential race",
    "link":"https://www.thedp.com/article/2020/10/penn-professors-guardian-article-us-media-calling-2020-election",
    "img": "/img/election/carousel-5.jpg"
  },
  {
    "title": "‘Avalanche of lies’: Election experts, students critique Trump’s presidential debate antics",
    "link":"https://www.thedp.com/article/2020/10/election-presidential-debate-biden-trump-penn-students-professors-react",
    "img": "/img/election/carousel-6.jpg"
  },
  {
    "title": "Are ‘bad things’ happening at the Philadelphia polls? Student political organizers say no.",
    "link":"https://www.thedp.com/article/2020/10/bad-things-happen-in-philadelphia-student-poll-workers-penn-dems-penn-leads-the-vote",
    "img": "/img/election/carousel-7.jpg"
  },
  {
    "title": "’Out now!’: Penn students join protests outside President Trump’s Philadelphia town hall",
    "link":"https://www.thedp.com/article/2020/09/trump-town-hall-in-philadelphia",
    "img": "/img/election/carousel-8.jpg"
  },
  {
    "title": "Penn AAPI Politics and Pa. AAPI for Biden co-host virtual rally with Andrew Yang, Helen Gym",
    "link":"https://www.thedp.com/article/2020/10/biden-pennsylvania-congressional-aapi-bus-tour",
    "img": "/img/election/carousel-9.jpg"
  },
  {
    "title": "Penn Dems and College Republicans face off in Penn’s edition of the presidential debate",
    "link":"https://www.thedp.com/article/2020/10/politics-penn-debate-republicans-democrats-biden-trump",
    "img": "/img/election/carousel-10.jpg"
  }
]

const InOtherNews = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {relativePath: {eq: "vote_2020_InOtherNews.json"}}) {
          edges {
            node {
              childrenVote2020InOtherNewsJson{
                title
                description
                author
                link
                img {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 2000, maxHeight: 1200) {
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
      const { node: { childrenVote2020InOtherNewsJson: articles } } = data.allFile.edges[0]

      return (
        <>
          <Wrapper>
            <div id="inOtherNews">
              <WordWithLine word="IN OTHER NEWS" lineColor="#7BA3D3"/>
              <div className="row text-center">
                {articles.map(article => (
                  <div className="col-md-6">
                    <StyledAnchor href={article.link} target="_blank">
                      <Img fluid={article.img.src.childImageSharp.fluid} />
                      <RedSectionHeader style={{ marginTop: '2rem' }}>Feature</RedSectionHeader>
                      <ArticleHeader style={{ fontSize: '200%', lineHeight: 1.1 }}>{article.title}</ArticleHeader>
                      <img src={DividerLine} style={{ width:'4em', margin:'1em 0em' }} />
                      <ArticleDescription style={{ marginTop: '1rem' }}>
                        {article.description}
                      </ArticleDescription>
                      <ArticleAuthor>BY {article.author}</ArticleAuthor>
                    </StyledAnchor>
                  </div>
                ))}
              </div>

              <div className="row" style={{ marginTop: '3rem' }}>
                <div className="col-md-12">
                <Carousel>
                  {Slideshows.map(article => (
                    <Carousel.Item interval={3000}>
                      <img src={article.img} className="d-block w-100" />
                      <Carousel.Caption style ={{ backgroundColor: '#000000', opacity: 0.57 }}>
                        <StyledAnchor href={article.link} target="_blank">
                          <ArticleHeader style={{ color: 'white' }}>{article.title}</ArticleHeader>
                        </StyledAnchor>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
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

export default InOtherNews