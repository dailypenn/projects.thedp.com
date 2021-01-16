import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { ROBOTO_REGULAR } from '../../../utils/font'

const Row = s.div`
  height: 450px;
  margin-left: -5px;
`

const SixtyHeader = s(Img)`
  width: 80%;
`

const HeaderBackground = s.div`
  background-color: #E9338A;
`

const SixtyBody = s.div`
  padding: 0 5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

const SixtyColumn = s.div`
  background-color: #FFF8E8;
  font-size: 15px;
  ${ROBOTO_REGULAR}
`

const FancyAuthor = s(Img)`
  width: 40%;
  margin: 10px 0;
`

const PinkFiller = s.div`
  background-color: #E9338A;
  height: 70px;
`

const OrangeFiller = s.div`
  background-color: #EC690E;
  width: 5%;
  margin: 0;
`

const Image = s(Img)`
  overflow: hidden;
  height: 450px;
  padding: 10px;
`
const Sixty = () => (
  <StaticQuery
    query={graphql`
      query {
        sixtyheadline: file(relativePath: { eq: "60s-headline.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        avrom: file(relativePath: { eq: "avrom-d.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        barbara: file(relativePath: { eq: "barbara-r.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        sidney: file(relativePath: { eq: "sidney-r.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        mainImg: file(relativePath: { eq: "Photos/1960s/Img1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        img2: file(relativePath: { eq: "Photos/1960s/img2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        img3: file(relativePath: { eq: "Photos/1960s/img3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        img4: file(relativePath: { eq: "Photos/1960s/img4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        img5: file(relativePath: { eq: "Photos/1960s/img5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        img6: file(relativePath: { eq: "Photos/1960s/img6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const {
        avrom,
        barbara,
        img2,
        img3,
        img4,
        img5,
        img6,
        sidney,
        sixtyheadline,
        mainImg,
      } = data

      return (
        <>
          <div className="row" id="60s">
            <div className="col-md" style={{ padding: '0', margin: '0' }}>
              <Img fluid={mainImg.childImageSharp.fluid} alt="sideImg" />
              <PinkFiller />
              <Row className="row" style={{ marginBottom: '20px' }}>
                <div className="col-md">
                  <Image fluid={img2.childImageSharp.fluid} alt="sideImg" />
                </div>
                <div className="col-md">
                  <Image fluid={img3.childImageSharp.fluid} alt="sideImg" />
                </div>
                <div className="col-md">
                  <Image fluid={img4.childImageSharp.fluid} alt="sideImg" />
                </div>
              </Row>
              <Row className="row">
                <div className="col-md-8">
                  <Image fluid={img5.childImageSharp.fluid} alt="sideImg" />
                </div>
                <div className="col-md">
                  <Image fluid={img6.childImageSharp.fluid} alt="sideImg" />
                </div>
              </Row>
            </div>

            <OrangeFiller />

            <SixtyColumn
              className="col-md"
              style={{ padding: '0', margin: '0' }}
            >
              <HeaderBackground>
                <div style={{ padding: '3rem' }}>
                  <SixtyHeader
                    fluid={sixtyheadline.childImageSharp.fluid}
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                </div>
              </HeaderBackground>
              <SixtyBody>
                <p>
                  The Kennedy assasination, the Vietnam War, the March on
                  Washington, the Moon Landing, and Bonnie and Clyde. The 1960’s
                  were an era of social change, technological innovation, and
                  the Summer of Love. In Philadelphia, trolleys rolled over
                  cobblestone streets throughout the city and notorious police
                  chief Frank Rizzo was on the rise. In 1960, a year at Penn
                  cost $1,250. By 1969 it was $1,950. Undergraduate women and
                  men were educated separately, with women attending the College
                  of Liberal Arts for Women.
                </p>
                <FancyAuthor fluid={avrom.childImageSharp.fluid} />
                <p>
                  Avrom Doft (W ’60), Barbara Russo (CW ’68), and Sidney Rodbell
                  (W ’68) talk back-to-school 50 seasons ago. Avrom Doft (W ‘60)
                  “When my parents brought me down to Philly, I had never seen
                  the campus. They dropped me off on a Sunday, and later that
                  night at 1:30 in the morning, a few of the guys in my dorm
                  picked up and went to a nightclub to see the Will Mastin Trio,
                  starring Sammy Davis Jr. He was an entertainer who hung around
                  with Frank Sinatra and Dean Martin. He was great. He went on
                  at 1:30 and stayed on stage for two hours. I’ll never forget,
                  that was my first night at Penn.
                </p>
                <FancyAuthor fluid={barbara.childImageSharp.fluid} />
                <p>
                  We still were a college for women, we had a Dean of women and
                  we even had a women’s lounge at the top of Bennett Hall
                  because in the forties and early fifties women couldn’t go to
                  Houston Hall. By the time I came, of course, that was
                  different.”
                </p>
                <p>
                  “[Freshman Camp] was the biggest new student orientation. A
                  couple hundred women and a couple hundred men went to a camp
                  up in the Poconos over labor day weekend. For me, it was
                  really helpful because I was going to be living at home so I
                  really networked with the women. We were in different houses,
                  almost barracks, on the camp and each barrack had to make up a
                  song. So we had a women’s cheer, as well as the men’s cheer,
                  that was made up at Freshman Camp. Ours was, ‘68’s the great,
                  we don’t even need a cheer, 68’s the greatest year.’ The men
                  had something very male, something like, ‘First in class,
                  first in field, 68 will never yield.’
                </p>
                <p>
                  “We had weekly coffee hours. Everybody, the whole university,
                  had no classes on Tuesdays at 11. So every Tuesday at 11,
                  there was an all university coffee hour at Houston Hall. That
                  was a great place to go and mingle. We also used to go to
                  pretend to study in the library and that was also a good place
                  to mingle.”
                </p>
                <p>
                  “But you know, the university changed. Things changed so much
                  while we were there. When I got there in 1964 it was really a
                  lot more like the 50s. We had to wear skirts to the library
                  and to breakfast and dinner. There were no pants allowed by
                  women in dining areas. Of course, we dined separately from
                  men. The women dined in their dorm and the men dined in the
                  freshman commons, which was in Houston Hall where the Hall of
                  Flags is. It was really like the 50s in the early 60s when I
                  got there. But things were already changing, Vietnam was
                  starting, protests were starting.”
                </p>
                <FancyAuthor fluid={sidney.childImageSharp.fluid} />
                <p>
                  “I remember walking onto campus. I had flown up from Atlanta.
                  I arrived on my own, I remember walking into this dorm in the
                  Quad and there was the crew team and they had a booth and they
                  were trying to recruit people. They told me they started at
                  5:30 in the morning and I decided that was not going to be
                  something I was going to be able to take part in. I was tall,
                  so they wanted to talk to me, but it was a short
                  conversation.”
                </p>
              </SixtyBody>
            </SixtyColumn>
          </div>
        </>
      )
    }}
  />
)

export default Sixty
