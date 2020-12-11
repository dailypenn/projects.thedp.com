import React from 'react'
import { Col } from 'react-bootstrap'

import {
  Wrapper,
  SectionHeader,
  BigArticleStaticImg,
  BigArticleVideo
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
    "title": "The Story of 2020",
    "link": "https://youtu.be/_DJKKm6T3SE",
    "author": "SOPHIE HUANG",
    "section": "VIDEO",
  }
]

const Multimedia = () => {
  return (
    <Wrapper>
      <div className="row main" id="multimedia">
        <Col>
          <SectionHeader>MULTIMEDIA</SectionHeader>
          <div className="row">
            <Col sm={12} md={6}>
              <BigArticleStaticImg article={ArticlesJSON[0]} />
            </Col>
            <Col sm={12} md={6}>
              <BigArticleVideo article={ArticlesJSON[1]} />
            </Col>
          </div>
        </Col>
      </div>
    </Wrapper>
  )
}

export default Multimedia