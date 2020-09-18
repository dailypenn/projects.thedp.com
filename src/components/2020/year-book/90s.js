import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import accentImage from '../../../content/images/2020/year-book/90s-accent.png'
import { ROBOTO_REGULAR } from '../../../utils/font'

const SeventyBody = s.div`
  ${ROBOTO_REGULAR}
  padding: 3rem 6rem;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

const SeventyColumn = s.div`
  align-items: center;
  margin: 50px;
`

const FancyAuthor = s(Img)`
  width: 40%;
  margin: 10px 0;
`

const NinetyHeader = s(Img)`
  width: 80%;
`

const ImgWrapper = s.div`
  padding: 0 4rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
    margin-bottom: 1rem;
  }
`

const Nineties = () => (
    <StaticQuery
      query={graphql`
      query {
          ninetyheadline: file(relativePath: {eq: "90s-headline.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          accent: file(relativePath: {eq: "90s-accent.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          main: file(relativePath: {eq: "Photos/1990s/main.png"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          rebecca: file(relativePath: {eq: "rebecca-f-l.png"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          asima: file(relativePath: {eq: "asima-b.png"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const { asima, rebecca, main, accent, ninetyheadline } = data
        return (
            <>
              <div className="row" id="90s">      
                <SeventyColumn className="col-md-6" style={{padding: "0", margin: "0"}}>
                  <ImgWrapper>
                    <NinetyHeader fluid={ninetyheadline.childImageSharp.fluid} />
                  </ImgWrapper>
                  
                  <SeventyBody>
                    <p>
                      Although they might feel like yesterday, the 90s are now 20 years behind us. As the Cold War was coming to a close and Tamagotchis were hitting the market, Penn students were listening to Tupac and Missy Eliot in the Quad. In 1993, Judith Rodin was elected President and Chief Executive of Penn, the first woman to serve as President of an Ivy League institution. Big hair and “Saved by the Bell” era pastels were popular, alongside jelly sandals and chunky Fila’s. Rebecca Fein Luks (C ‘97) and Asima Berkett (C ‘98) remember move in at 1990s Penn.
                    </p>
                    <FancyAuthor fluid={rebecca.childImageSharp.fluid}/>
                    <p>
                      “Coming from Texas, [Penn] was an opportunity to really meet a lot of different kinds of people with different backgrounds and interests. Programs like Pennquest…I think really fostered that and got people from the outset of the college experience meeting people whose paths they may not have otherwise crossed.”
                    </p>
                    <p>
                      “For really the whole first semester, it was all about navigating what I was interested in, what clicked for me, finding the courses I was interested in, finding the people I wanted to spend my time with, the activities I wanted to be involved in. That first semester was really about just trying things on and seeing what worked.”
                    </p>
                    <p>
                    “Coming from Texas where it’s hot and humid into the fall, I was just absolutely captivated by falling leaves and the crisp air and the signs that real fall and winter were coming. I’d never been to a big football game on a college campus before. I remember just loving the traditions on Franklin Field and throwing toast while making a toast to Dear Old Penn. I loved the school spirit and again, I loved meeting people from other regions of the country and the world. It was a really exciting time.” 
                    </p>
                    <FancyAuthor fluid={asima.childImageSharp.fluid}/>
                    <p>
                      “I met a lot of friends through new student transfer orientation, people who I’m still very close friends with to this day.”
                    </p> 
                    <p>
                      “I remember my first day there was a lunch, in that area between the three high rises and that was really where I first started really meeting people once I moved in.”
                    </p>
                  </SeventyBody>
                </SeventyColumn>             
                <div className="col" style={{ paddingRight: '2rem' }}>
                  <Img fluid={main.childImageSharp.fluid} />
                </div>
              </div>
            </>
        )
      }}
    />
  )

export default Nineties