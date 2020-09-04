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

export const SectionDescription = s.div`
    ${OPEN_SANS_REGULAR}
    max-width: 60%;
    margin: 16px auto 64px;
    text-align: center;
`

export const MainHeader = s.h3`
    color: ${({ color }) => color};
    margin-top: 16px;
    ${DM_SERIF_DISPLAY_REGULAR}
    
`

export const SubSectionHeader = s.h5`
    color: ${({ color }) => color ? color : "#E7525F"};


    ${OPEN_SANS_BOLD}
    font-size: 18px;
    margin-bottom: 16px;
`

export const SectionMainText = s.p`
    ${OPEN_SANS_REGULAR}
    color: ${({ color }) => color};
    margin-top: 15px;
    line-height: 1.6;
`
