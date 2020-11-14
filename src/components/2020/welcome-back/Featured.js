import React from "react"
import Img from "gatsby-image"
import s from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { Description, ByLine, StyledAnchor } from "./Typograph"
import { PLAYFAIR_BOLD, KARLA_BOLD } from "../../../utils/font"
import { HEADLINE_DARK_GRAY, SUBHEAD_LIGHT_GRAY } from "../../../utils/colors"

const Wrapper = s.div`
  .row {
    margin: 2rem 5rem 0 5rem;

    @media (max-width: 768px) {
      margin: 2rem 1rem 0 1rem;
    }
  }
`

const Title = s.div`
  font-size: 200%;
  margin-top: 2rem;
  line-height: 95%;
  color: ${HEADLINE_DARK_GRAY};
  ${PLAYFAIR_BOLD}

  :hover {
    color: ${SUBHEAD_LIGHT_GRAY};
    transition: 0.3s;
  }
`

const Tag = s.div`
  font-size: 80%;
  margin-top: 1.5rem;
  color: ${HEADLINE_DARK_GRAY};
  ${KARLA_BOLD}
`

const Featured = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/dp-1.png/" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const img = data.file

      return (
        <Wrapper>
          <div className="row" id="featured">
            <div className="col-md-5 mb-3">
              <StyledAnchor
                href="https://www.thedp.com/article/2020/08/first-year-advice-list-penn-zoom-virtual-wellness"
                target="_blank"
              >
                <Tag> FEATURED </Tag>
                <Title>
                  {" "}
                  Back to school, COVID-19 edition: Tips for first years to
                  survive virtual college at Penn{" "}
                </Title>
                <Description>
                  {" "}
                  To help Penn's new students navigate this uniquely challenging
                  semester, The Daily Pennsylvanian asked upperclassmen and
                  professors for advice about how to succeed in college amid the
                  coronavirus pandemic.{" "}
                </Description>
                <ByLine>
                  {" "}
                  {"By Pia Singh & Isabella Schlact".toUpperCase()}{" "}
                </ByLine>
              </StyledAnchor>
            </div>
            <div className="col-md">
              <Img fluid={img.childImageSharp.fluid} />
            </div>
          </div>
        </Wrapper>
      )
    }}
  />
)

export default Featured
