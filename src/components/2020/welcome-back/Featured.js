import React from 'react'
import Img from 'gatsby-image'
import s from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { Description, ByLine } from './Typograph'
import { PLAYFAIR_BOLD, KARLA_BOLD } from '../../../utils/font'
import { HEADLINE_DARK_GRAY } from '../../../utils/colors'

const Title = s.div`
  font-size: 200%;
  margin-top: 2rem;
  color: ${HEADLINE_DARK_GRAY};
  ${PLAYFAIR_BOLD}
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
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const img = data.file

      return (
        <div className="row" style={{ margin: '2rem 5rem 0 5rem' }}>
          <div className="col-5">
            <Tag> FEATURED </Tag>
            <Title> Back to school, COVID-19 edition: Tips for first years to survive virtual college at Penn </Title>
            <Description> To help Penn's new students navigate this uniquely challenging semester, The Daily Pennsylvanian asked upperclassmen and professors for advice about how to succeed in college amid the coronavirus pandemic. </Description>
            <ByLine> {'By Pia Singh & Isabella Schlact'.toUpperCase()} </ByLine>
          </div>
          <div className="col">
            <Img fluid={img.childImageSharp.fluid} />
          </div>
        </div>
      )
    }}
  />
)

export default Featured