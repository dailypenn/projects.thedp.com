import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'

import { RED, WordWithLine } from './shared'

const Article = ({}) => (
  <>
  </>
)

const TanComponent = ({articles, columns, word}) => (
  <>
    <WordWithLine word={word} lineColor={RED}/>
  </>
)

export default TanComponent