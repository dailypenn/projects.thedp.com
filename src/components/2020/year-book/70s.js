import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { ROBOTO_REGULAR } from '../../../utils/font'

const SeventyBody = s.div`
  padding: 0 5rem;
  font-size: 15px;
  ${ROBOTO_REGULAR}

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const FancyAuthor = s(Img)`
  width: 60%;
  margin: -15px -10px 10px -5px;
`

const Image = s(Img)`
  margin-bottom: 20px;
`

const Sixtys = () => (
    <StaticQuery
      query={graphql`
      query {
          seventyheadline: file(relativePath: {eq: "70s-headline.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          eileen: file(relativePath: {eq: "eileen-o'.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          rainbow: file(relativePath: {eq: "70s-rainbow.png"}) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img1: file(relativePath: {eq: "Photos/1970s/img1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img2: file(relativePath: {eq: "Photos/1970s/img2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img3: file(relativePath: {eq: "Photos/1970s/img3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img4: file(relativePath: {eq: "Photos/1970s/img4.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          img5: file(relativePath: {eq: "Photos/1970s/img5.png"}) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const { img1, img2, img3, img4, img5, eileen, rainbow, seventyheadline } = data
        return (
          <>
            <div className="row" id="70s">                   
              <div className="col">
                <Img fluid={seventyheadline.childImageSharp.fluid} />
              </div>
            </div>
            <div className="row" style={{ paddingTop: "50px", backgroundColor: "#FFF8E8", paddingBottom: '2rem' }}>                   
              <div className="col-md-5">
                <SeventyBody>
                  <p style={{ marginBottom: '2rem' }}>
                    As Billy Joel once famously sang, “Watergate, punk rock / Begin, Reagan, Palestine, terror on the airline.” The 1970s at Penn stood out distinctly from the buttoned-up early-60s. Students in bootcut jeans, long hair, and platform shoes walked up and down Locust as Penn’s campus rapidly expanded further into the neighborhood. “All in the Family” and “Happy Days” were the hottest shows on the air and Fleetwood Mac and Elton John ruled the radio waves. The environmental movement and women’s rights grew, as well as the anti-war movement throughout the decade. Eileen O’Brien (C ‘76) remembers her first move in and the excitement of being at Penn in the fall of 1973. 
                  </p>
                  <FancyAuthor fluid={eileen.childImageSharp.fluid}/>
                  <p style={{ margin: '2rem 0 3rem 0' }}>
                    “I arrived as a sophomore, I spent my freshman year at a different college. A high school friend drove me down and in a very friendly but fast-moving way - because everything was so new to me - dropped me off and helped me get things upstairs. I was on the fourth floor of what they used to call High Rise East. That was my first move-in. It was a little bit hectic but not bad. It was the fall of 1973, which may sound like 1873 now.” “I knew it would be a big change. I transferred specifically to get the big school experience and I could tell right away I was at a big school. I was there to go to school in a big city and meet a lot of people. It was not much of a party school, but I didn’t go there to get that or to get away from that, so it was kind of a non-factor.” “I was in one of those four person suites and somewhere over the first weekend I met my suite-mates as well as the four suite-mates across the hall. Two of the people who lived across the hall worked for the Daily Pennsylvanian, and that’s how I decided to go over. I would have gone over anyway but at least I could go over dropping names.”
                  </p>
                  <Image fluid={img1.childImageSharp.fluid} style={{ height: "330px", overflow: "hidden" }}/>
                </SeventyBody>
              </div>
              <div className="col-md">
                <Image fluid={img2.childImageSharp.fluid} style={{ height: "630px", overflow: "hidden" }}/>
                <Image fluid={img3.childImageSharp.fluid} style={{ height: '360px' }}/>
              </div>
              <div className="col-md" style={{ paddingRight: '5rem' }}>
                <Image fluid={img4.childImageSharp.fluid} />
                <Image fluid={img5.childImageSharp.fluid} style={{ height: "590px", overflow: "hidden" }}/>
              </div>
            </div>
            <div className="row" id="70s">                   
              <div className="col">
                <Img fluid={rainbow.childImageSharp.fluid} />
              </div>
            </div>
          </>
        )
      }}
    />
  )

export default Sixtys