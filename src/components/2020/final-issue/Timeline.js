import React from 'react'
import s from 'styled-components'
import { Row } from "react-bootstrap"

import { SPECTRAL_REGULAR, MARGO } from "../../../utils/font"

const GREEN = "#639E7D"
const BLUE = "#032FB7"
const YELLOW = "#FEFAD8"

const Box = s(Row)`
    margin: auto;
    background-color: ${GREEN};
    padding: 2%;
`

const BoxTitle = s.div`
    ${MARGO}
    color: ${BLUE};
    font-size: 300%;
    word-break: keep-all;
    width: 100%;
`

const BoxContent = s.div`
    ${SPECTRAL_REGULAR}
    padding: 4%;
    padding-top 0;
    text-align: left;
    color: ${YELLOW};
    font-size: 80%;
    width: 100%;
`

const BlueTitle = s.h1`
    ${MARGO}
    position: absolute;
    margin-left: 4vw;
    margin-top: -60%;
    width: 100%;
    color: ${BLUE};
    height: 5%;
    transform: rotate(-90deg);
    transform-origin: right bottom 0;
    font-size: 3vw;
    padding-top: 4.5rem;

    @media (max-width: 991px) {
        display: none;
    }
`

const Timeline = s.div`
    margin-top: 150%;
    margin-left: 40%;
    width: 60%;
    text-align: center;

    @media (max-width: 991px) {
        display: none;
    }
`

const Circle = () => (
    <svg height="80" width="80"  style={{
        display: "block",
        margin: "auto",
        padding: 0
    }}>
        <circle cx="40" cy="40" r="40" stroke={BLUE} stroke-width="0" fill={BLUE} />
    </svg>
)

const Line = s.div`
    width: 4px;
    border-left: 4px solid blue;
    height: ${({ height }) => height || '5vw'};
    margin-left: -3px;
    display: block;
    margin: auto;
`

export default () => (
    <div>
        <BlueTitle>
            Tracking Covid-19
        </BlueTitle>
        <Timeline>
            <Circle/>
            <Line height="25vw"/>
            <Box>
                <BoxTitle>Jan 26</BoxTitle>
                <BoxContent>No cases had yet been reported at Penn, but the University announced in an email to undergraduates that it was monitoring the pandemic and communicating with students studying abroad in China.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>Feb 4</BoxTitle>
                <br />
                <BoxContent>COVID-19 prompted the Penn Wharton China Center in Beijing to remain closed until at least Feb. 10. At this point, the COVID-19 case count was 20,000 worldwide, 11 of which were in the United States.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>March 11</BoxTitle>
                <br />
                <BoxContent>Penn moved to a completely virtual semester following the COVID-19 outbreak. Spring break was extended another week, and virtual learning began on March 23. Students on campus were expected to leave campus by March 17.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>March 12</BoxTitle>
                <br />
                <BoxContent>Penn extended the deadline to move off campus by two days to March 17 after students expressed frustration with the short timeline. Penn Abroad urged students studying in Europe, the United Kingdom, and Ireland to return home immediately.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>March 16</BoxTitle>
                <br />
                <BoxContent>Three Penn students tested positive for COVID-19 after traveling abroad for spring break. Of the three students, two were off campus and one was on campus.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>April 13</BoxTitle>
                <br />
                <BoxContent>As the COVID-19 pandemic raged on across the nation, Penn announced it would conduct all of its summer courses virtually.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>June 11</BoxTitle>
                <br />
                <BoxContent>After multiple delays, Penn canceled all fall 2020 study abroad programs as a result of the global travel restrictions and health risks from the COVID-19 pandemic.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>June 25</BoxTitle>
                <br />
                <BoxContent>Penn announced it would reopen campus for a hybrid fall semester. The semester would start on Sept. 1, and in-person operations would be suspended on Nov. 20.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>Aug. 11</BoxTitle>
                <br />
                <BoxContent>Following a spike in COVID-19 cases across the country, Penn decided to close on-campus housing for the fall and conduct a completely virtual semester.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>Oct. 30</BoxTitle>
                <br />
                <BoxContent>Penn announced it would reopen on-campus housing for the spring semester, while the majority of classes would still be taught remotely.</BoxContent>
            </Box>
            <Line />
            <Box>
                <BoxTitle>Nov. 4</BoxTitle>
                <br />
                <BoxContent>Penn reported what was at the time a semester-high weekly count of positive COVID-19 cases, with 107 recorded in the last week of October.</BoxContent>
            </Box>
            <Line height="10vw"/>
            <Circle/>
        </Timeline>
    </div>
)