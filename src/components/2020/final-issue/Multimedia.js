import React from 'react'
import { Col } from 'react-bootstrap'

import {
  Wrapper,
  SectionHeader,
  BigArticleStaticImg
} from './shared'

const ArticlesJSON = [
  {
    "title": "In Photos: 2020",
    "link": "https://www.thedp.com/article/2020/12/2020-photos-year-in-review-covid-black-lives-matter-election",
    "author": "KYLIE COOPER",
    "section": "PHOTO",
    "img": "https://s3.amazonaws.com/snwceomedia/dpn/45adb6db-3fdb-43f5-901a-479d942a20e0.original.gif"
  },
  {
    "title": "2020 Year in Review",
    "link": "",
    "author": "SAGE LEVINE",
    "section": "VIDEO",
    "img": "https://s3.amazonaws.com/snwceomedia/dpn/45adb6db-3fdb-43f5-901a-479d942a20e0.original.gif"
  }
]

const Multimedia = () => {
  return (
    <Wrapper>
      <div className="row main" id="34thst">
        <Col>
          <SectionHeader>MULTIMEDIA</SectionHeader>
          <div className="row">
            <Col><BigArticleStaticImg article={ArticlesJSON[0]} /></Col>
            <Col><BigArticleStaticImg article={ArticlesJSON[1]} /></Col>
          </div>
        </Col>
      </div>
    </Wrapper>
  )
}

export default Multimedia
