import React from 'react'
import s from 'styled-components'
import { 
  PhotoGallery, 
  SectionHeader, 
  SectionMainText, 
  MainHeader,
  BLACK,
  WHITE,
  TINT_WHITE
} from './Typography'

const Spacer = s.div`
    margin-bottom: 50px;
`

const Wrapper = s.div`
    background-color: ${BLACK};
    padding: 120px 0px;
`

export const MultiMedia = () => (
  <Wrapper id="multimedia">
    <div class="container">
      <SectionHeader color={WHITE}>Multimedia</SectionHeader>
      <div>
        <a href="https://www.thedp.com/article/2019/12/penn-decade-in-review-2010s-highlights-photo-essay-gallery">
          <PhotoGallery className="img-fluid" src="https://snworksceo.imgix.net/dpn/8baab047-09cd-40cf-9033-87fc736f07b8.original.jpg" />
          <MainHeader inverse>Photo Essay | Penn’s standout moments from the 2010s</MainHeader>
        </a>
        <SectionMainText color={TINT_WHITE}>The 2010s are coming to a close, and a lot has happened at Penn in the last decade. It was a decade of firsts: the first Penn alumnus to be to elected President of the United States, the first Philadelphia Eagles Super Bowl victory, and the first Women's March. There were several record-breaking and newsworthy athletic achievements. Important figures such as Pope Francis and LeBron James visited the University. And Penn's campus continued to expand with new construction projects.Take a look back at the past decade at Penn in photos.</SectionMainText>
      </div>
      <Spacer/>
      <div>
        <div class="embed-container d-flex justify-content-center">
            <iframe title="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/FMH7sXPXf7c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
        <MainHeader inverse>The Story of 2019</MainHeader>
        <SectionMainText color={TINT_WHITE}>As 2019 comes to a close, The Daily Pennsylvanian looked back on some of the highlights from the year.</SectionMainText>
      </div>
    </div>
  </Wrapper>
)
