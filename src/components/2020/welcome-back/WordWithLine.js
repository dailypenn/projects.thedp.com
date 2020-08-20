import React from 'react'
import s from 'styled-components'

const H2 = s.h2` 
  text-align: center; 
  border-bottom: 4px solid #283033; 
  line-height: 0.1em;
  margin: 3rem 5rem;

  span {
    background:#fff; 
    padding: 0 10px; 
  }
`

const WordWithLine = ({ word }) => (
  <H2><span>{word}</span></H2>
)

export default WordWithLine