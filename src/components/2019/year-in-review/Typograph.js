import s from 'styled-components'
import { 
    OPEN_SANS_REGULAR, 
    OPEN_SANS_BOLD, 
    DM_SERIF_DISPLAY_BOLD, 
    DM_SERIF_DISPLAY_REGULAR } 
    from '../../../utils/font'

export const SectionHeader = s.h1`
  ${DM_SERIF_DISPLAY_BOLD}
  color: ${({ color }) => color};
  font-size: 52px;
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
`

export const Section = s.div`
  background-color: ${({ inverse }) => inverse ? "#ffffff" : "#131313"};
  padding: ${({ inverse }) => inverse ? "80px" : "120px"} 0px;
`

export const SectionDescription = s.p`
  ${OPEN_SANS_REGULAR}
  max-width: 60%;
  margin: 16px auto 64px;
  text-align: center;
`

export const MoreStories = s.div`
  border-top: 1px solid ${({ inverse }) => inverse ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"}; 
  margin-top: 20px;
  padding-top: 20px;
  background-color: inherit;
`

export const PrimaryStoryLine = s.hr`
  background-color: ${({ inverse }) => inverse ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"};
  margin: 28px 0px;
`

export const StyledStoryLink = s.a`
  color: inherit;

  :hover {
      text-decoration: none;
      color: inherit;
  }
`

export const PrimaryStory = s.h4`
  ${DM_SERIF_DISPLAY_REGULAR}
  color: ${({ inverse }) => inverse ? "#131313" : "#ffffff"};
  font-size: 22px;

  :hover {
    color: ${({ inverse }) => inverse ? "#4a4a4a" : "#dbdbdb"};
  }
`

export const SecondaryStory = s.h5`
  ${DM_SERIF_DISPLAY_REGULAR}
  color: ${({ inverse }) => inverse ? "#131313" : "#ffffff"};
  font-size: 18px;

  :hover {
    color: ${({ inverse }) => inverse ? "#4a4a4a" : "#DBDBDB"};
  }
`

export const ColumnTitle = s.p`
  ${OPEN_SANS_BOLD} 
  color: #E7525F;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const StreetHeader = s.h3`
  ${DM_SERIF_DISPLAY_REGULAR}
  color: #ffffff;
  font-size: 40px;
  margin: 0 28px;
  position: absolute;
  bottom: 72px;
`

export const StreetCard = s.div`
  margin-bottom: 60px;
  padding-bottom: 60px;
  height: 260px;
  background: #E7525F;

  :hover {
      background: #D23C49;
  }
`

export const Date = s.p`
  ${OPEN_SANS_REGULAR}
  color: ${({ inverse }) => inverse ? "#6C6F78" : "#CFD3DD"};
`

export const Author = s.p`
  ${({ opinion }) => opinion ? OPEN_SANS_REGULAR : ""};
  color: #8E929F;
  font-weight: bold;
  font-size: 14px;
`

export const MainHeader = s.h3`
  ${DM_SERIF_DISPLAY_REGULAR}
  color: ${({ inverse }) => inverse ? "#131313" : "#ffffff"};
  margin-top: 1.5rem;
`

export const SubSectionHeader = s.h5`
  ${OPEN_SANS_BOLD}
  color: ${({ color }) => color ? color : "#E7525F"};
  margin-bottom: 16px;
  font-size: 18px;
`

export const MoreStoriesHeader = s(SubSectionHeader)`
  color: ${({ inverse }) => inverse ? "#131313" : "#ffffff"};
  font-size: ${({ opinion }) => opinion ? "1.25rem" : ""};
`

export const SectionMainText = s.p`
  ${OPEN_SANS_REGULAR}
  color: ${({ inverse }) => inverse ? "#131313" : "#f7f7f7"};
  margin-top: 15px;
  line-height: 1.6;
`

export const PhotoGallery = s.img`
  margin-bottom: 20px;
`