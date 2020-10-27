import s from 'styled-components'
import { 
  OPEN_SANS_REGULAR, 
  OPEN_SANS_BOLD, 
  DM_SERIF_DISPLAY_BOLD, 
  DM_SERIF_DISPLAY_REGULAR
} from '../../../utils/font'

// Color Palette
export const WHITE = '#FFFFFF'
export const BLACK = '#131313'
export const DARK_GREY = '#4A4A4A'
export const METALLIC_GREY = '#8E929F'
export const BLUE_GREY = '#6C6F78'
export const LIGHT_BLUE_WHITE = '#F1F5FF'
export const BLUE_WHITE = '#CFD3DD'
export const PINK_WHITE = '#DBDBDB'
export const TINT_WHITE = '#F7F7F7'
export const ROUGE_RED = '#E7525F' 
export const DARK_ROUGE_RED = '#D23C49'

export const FAINT_BLACK = 'rgba(0, 0, 0, 0.3)';
export const FAINT_WHITE = 'rgba(255, 255, 255, 0.3)';


export const SectionHeader = s.h1`
  ${DM_SERIF_DISPLAY_BOLD}
  color: ${({ color }) => color};
  font-size: 52px;
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
`

export const Section = s.div`
  background-color: ${({ inverse }) => inverse ? WHITE : BLACK};
  padding: ${({ inverse }) => inverse ? "80px" : "120px"} 0px;
`

export const SectionDescription = s.p`
  ${OPEN_SANS_REGULAR}
  max-width: 60%;
  margin: 16px auto 64px;
  text-align: center;
`

export const MoreStories = s.div`
  border-top: 1px solid ${({ inverse }) => inverse ? FAINT_BLACK : FAINT_WHITE}; 
  margin-top: 20px;
  padding-top: 20px;
  background-color: inherit;
`

export const PrimaryStoryLine = s.hr`
  background-color: ${({ inverse }) => inverse ? FAINT_BLACK : FAINT_WHITE};
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
  color: ${({ inverse }) => inverse ? BLACK : WHITE};
  font-size: 22px;

  :hover {
    color: ${({ inverse }) => inverse ? DARK_GREY : PINK_WHITE};
  }
`

export const SecondaryStory = s.h5`
  ${DM_SERIF_DISPLAY_REGULAR}
  color: ${({ inverse }) => inverse ? BLACK : WHITE};
  font-size: 18px;

  :hover {
    color: ${({ inverse }) => inverse ? DARK_GREY : PINK_WHITE};
  }
`

export const ColumnTitle = s.p`
  ${OPEN_SANS_BOLD} 
  color: ${ROUGE_RED};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const StreetHeader = s.h3`
  ${DM_SERIF_DISPLAY_REGULAR}
  color: ${WHITE};
  font-size: 40px;
  margin: 0 28px;
  position: absolute;
  bottom: 72px;
`

export const StreetCard = s.div`
  margin-bottom: 60px;
  padding-bottom: 60px;
  height: 260px;
  background: ${ROUGE_RED};

  :hover {
      background: ${DARK_ROUGE_RED};
  }
`

export const Date = s.p`
  ${OPEN_SANS_REGULAR}
  color: ${({ inverse }) => inverse ? BLUE_GREY : BLUE_WHITE};
`

export const Author = s.p`
  ${({ opinion }) => opinion ? OPEN_SANS_REGULAR : ""};
  color: ${METALLIC_GREY};
  font-weight: bold;
  font-size: 14px;
`

export const MainHeader = s.h3`
  ${DM_SERIF_DISPLAY_REGULAR}
  color: ${({ inverse }) => inverse ? BLACK : WHITE};
  margin-top: 1.5rem;
`

export const SubSectionHeader = s.h5`
  ${OPEN_SANS_BOLD}
  color: ${({ color }) => color || ROUGE_RED};
  margin-bottom: 16px;
  font-size: 18px;
`

export const MoreStoriesHeader = s(SubSectionHeader)`
  color: ${({ inverse }) => inverse ? BLACK : WHITE};
  font-size: ${({ opinion }) => opinion ? "1.25rem" : ""};
`

export const SectionMainText = s.p`
  ${OPEN_SANS_REGULAR}
  color: ${({ inverse }) => inverse ? BLACK : TINT_WHITE};
  margin-top: 15px;
  line-height: 1.6;
`

export const PhotoGallery = s.img`
  margin-bottom: 20px;
`
