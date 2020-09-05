import s from 'styled-components'
import { OPEN_SANS_REGULAR, OPEN_SANS_BOLD, DM_SERIF_DISPLAY_BOLD, DM_SERIF_DISPLAY_REGULAR } from '../../../utils/font'

export const SectionHeader = s.h1`
    color: ${({ color }) => color};
    ${DM_SERIF_DISPLAY_BOLD}
    font-size: 52px;
    font-style: italic;
    text-align: center;
    margin-bottom: 40px;
`

export const SectionDescription = s.p`
    ${OPEN_SANS_REGULAR}
    max-width: 60%;
    margin: 16px auto 64px;
    text-align: center;
`

export const MoreStories = s.div`
    margin-top: 20px;
    padding-top: 20px;
    background-color: inherit;
    border-top: 1px solid ${({ inverse }) => inverse ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"}; 
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
    color: ${({ inverse }) => inverse ? "#131313" : "white"};
    ${DM_SERIF_DISPLAY_REGULAR}
    font-size: 22px;

    :hover {
        color: ${({ inverse }) => inverse ? "#4a4a4a" : "#dbdbdb"};
    }
`

export const SecondaryStory = s.h5`
    color: ${({ inverse }) => inverse ? "#131313" : "white"};
    ${DM_SERIF_DISPLAY_REGULAR}
    font-size: 18px;

    :hover {
        color: ${({ inverse }) => inverse ? "#4a4a4a" : "#DBDBDB"};
    }
`

export const ColumnTitle = s.p`
    color: #E7525F;
    ${OPEN_SANS_BOLD}
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
`

export const StreetHeader = s.h3`
    color: white;
    font-size: 40px;
    ${DM_SERIF_DISPLAY_REGULAR}
    margin-left: 28px;
    margin-right: 28px;
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
    ${({opinion}) => opinion ? OPEN_SANS_REGULAR : ""};
    color: #8E929F;
    font-weight: bold;
    font-size: 14px;
`

export const MainHeader = s.h3`
    color: ${({ color }) => color ? color : "white"};
    margin-top: 16px;
    ${DM_SERIF_DISPLAY_REGULAR}
    
`

export const SubSectionHeader = s.h5`
    color: ${({ color }) => color ? color : "#E7525F"};
    ${OPEN_SANS_BOLD}
    font-size: ${({ opinion }) => opinion ? "" : "18px"};
    margin-bottom: 16px;
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