import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { ROBOTO_REGULAR } from '../../../utils/font'


const Header = s(Img)`
  margin: 60px;
`

const SixtyHeader = s(Img)`
  width: 80%;
  margin: 0 60px;
`
const HeaderBackground = s.div`
  background-color: #E9338A;
`

const SeventyBody = s.div`
  padding-top: 50px;
  ${ROBOTO_REGULAR}
  font-size: 16px;
`

const SeventyColumn = s.div`
  padding-top: 50px;
  ${ROBOTO_REGULAR}
  background-color: #FFF8E8;
  font-size: 16px;
`

const Paragraph = s.div`
`

const FancyAuthor = s(Img)`
  width: 40%;
  margin: 10px 0;
`

const SeventyHeader = s.div`
  background-color: #6CB4AA;
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
              <div className="row" style={{margin: "-70px"}} id="70s">                   
                <div className="col" style={{padding: "0"}}>
                  <Header fluid={seventyheadline.childImageSharp.fluid} />
                </div>
              </div>
              <div className="row" style={{backgroundColor: "#FFF8E8"}}>                   
                <div className="col-md">
                    <SeventyBody>
                      <p>
                        As Billy Joel once famously sang, “Watergate, punk rock / Begin, Reagan, Palestine, terror on the airline.” The 1970s at Penn stood out distinctly from the buttoned-up early-60s. Students in bootcut jeans, long hair, and platform shoes walked up and down Locust as Penn’s campus rapidly expanded further into the neighborhood. “All in the Family” and “Happy Days” were the hottest shows on the air and Fleetwood Mac and Elton John ruled the radio waves. The environmental movement and women’s rights grew, as well as the anti-war movement throughout the decade. Eileen O’Brien (C ‘76) remembers her first move in and the excitement of being at Penn in the fall of 1973. 
                      </p>
                      <Img fluid={eileen.childImageSharp.fluid}/>
                      <p>
                        “I arrived as a sophomore, I spent my freshman year at a different college. A high school friend drove me down and in a very friendly but fast-moving way - because everything was so new to me - dropped me off and helped me get things upstairs. I was on the fourth floor of what they used to call High Rise East. That was my first move-in. It was a little bit hectic but not bad. It was the fall of 1973, which may sound like 1873 now.” “I knew it would be a big change. I transferred specifically to get the big school experience and I could tell right away I was at a big school. I was there to go to school in a big city and meet a lot of people. It was not much of a party school, but I didn’t go there to get that or to get away from that, so it was kind of a non-factor.” “I was in one of those four person suites and somewhere over the first weekend I met my suite-mates as well as the four suite-mates across the hall. Two of the people who lived across the hall worked for the Daily Pennsylvanian, and that’s how I decided to go over. I would have gone over anyway but at least I could go over dropping names.”
                      </p>
                    </SeventyBody>
                    <Img fluid={img1.childImageSharp.fluid} />
                </div>
                <div className="col-md">
                  <SeventyBody>
                    <Img fluid={img2.childImageSharp.fluid} />
                    <Img fluid={img3.childImageSharp.fluid} />
                  </SeventyBody>
                </div>
                <div className="col-md">
                  <SeventyBody>
                    <Img fluid={img4.childImageSharp.fluid} />
                    <Img fluid={img5.childImageSharp.fluid} />
                  </SeventyBody>
                </div>
              </div>
              <div className="row" style={{margin: "-70px"}} id="70s">                   
                <div className="col" style={{padding: "0", margin: "0"}}>
                  <Header fluid={rainbow.childImageSharp.fluid} />
                </div>
              </div>
            </>
        )
      }}
    />
  )

export default Sixtys