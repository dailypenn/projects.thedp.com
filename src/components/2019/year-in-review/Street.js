import React from 'react'
import s from 'styled-components'

import {
  StreetCard,
  StreetHeader,
  SectionHeader,
  SectionDescription,
  LIGHT_BLUE_WHITE,
} from './Typography'

const Wrapper = s.div`
    background-color: ${LIGHT_BLUE_WHITE};
    padding: 120px 0px;
`

export const Street = () => (
  <Wrapper id="street">
    <div class="container">
      <SectionHeader>34th Street</SectionHeader>
      <SectionDescription>
        2019 is nearly over. And with the new decade comes reflection,
        retrospection, and some top picks. This decade gave us an onslaught of
        pop culture, and now Street has endeavored to choose the best of all of
        it — best movies, best albums, and best television shows from this year,
        based on staff’s picks.
      </SectionDescription>
      <div class="row">
        <div class="col-md-4">
          <StreetCard>
            <a href="https://www.34st.com/article/2019/12/best-movies-decade-2010s-moonlight-carol-mad-max-get-out-grand-budapest-hotel-inside-llewyn-davis-lady-bird">
              <StreetHeader>Best Movies</StreetHeader>
            </a>
          </StreetCard>
        </div>
        <div class="col-md-4">
          <StreetCard>
            <a href="https://www.34st.com/article/2019/12/album-music-decade-2010s-roundup-beyonce-taylor-swift-kanye-west">
              <StreetHeader>Best Albums</StreetHeader>
            </a>
          </StreetCard>
        </div>
        <div class="col-md-4">
          <StreetCard>
            <a href="https://www.34st.com/article/2019/12/best-tv-shows-of-the-decade-fleabag-succession-30-rock-breaking-bad-game-of-thrones">
              <StreetHeader>Best TV Shows</StreetHeader>
            </a>
          </StreetCard>
        </div>
      </div>
    </div>
  </Wrapper>
)
