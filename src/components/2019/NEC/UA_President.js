import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

const UAPresident = () => (
  <StaticQuery
    query={graphql`
      query {
        allUaPresident2019Json {
          nodes {
            name
            statement
            endorsements
            id
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { nodes: people } = data.allUaPresident2019Json

      return (
        <>
          {people.map(person => (
            <div>
              <Img fluid={person.image.src.childImageSharp.fluid} />
              {person.name}
              {person.endorsements}
            </div>
          ))}
        </>
      )
    }}
  />
)

export default UAPresident