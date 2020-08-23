import React, { useState } from 'react'
import Img from 'gatsby-image'
import s from 'styled-components'

const Category = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Candidate = s.div`
  width: 33%;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

const StatementButton = s.h4`
  color: #888;
  font-weight: 400;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Statement = s.p`
  display: ${({ show }) => show ? 'block' : 'none'};
`

const UAPresident = ({ people, title }) => {
  // candidate statement is shown if id in showSet
  const [showSet, setShowSet] = useState(new Set())

  const toggleShow = id => {
    let newSet = new Set(showSet)
    if (newSet.has(id)) {
      newSet.delete(id)
      setShowSet(newSet)
    } else {
      newSet.add(id)
      setShowSet(newSet)
    }
  }

  return (
    <>
      <h2> {title} </h2>
      <Category>
        {people.map(person => (
          <Candidate>
            <Img fluid={person.image.src.childImageSharp.fluid} />
            <h3> {person.name} </h3>
            <p> <i> Endorsements: </i> {person.endorsements} </p>
            <StatementButton onClick={() => toggleShow(person.id)}>
              Read Statement
              <span> {showSet.has(person.id) ? '↑' : '↓'} </span>
            </StatementButton>
            <Statement show={showSet.has(person.id)}> {person.statement} </Statement>
          </Candidate>
        ))}
      </Category>
    </>
  )
}

export default UAPresident