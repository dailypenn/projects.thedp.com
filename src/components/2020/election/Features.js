import React from "react"
import s from 'styled-components'
import { TemporarySectionHeader } from "./shared"
import { FUTURA_REGULAR} from '../../../utils/font'


const ArticleGrid = s.div`
    display: grid;
    grid-template-columns: 35% 60%;
    grid-gap: 3rem;
    height: 22rem;
    width: 63%;
    margin: auto;
    font-family: 'Canela', 'sans-serif';
`
const LeftTitle= s.p`
    color: black;
    text-align: center;
    margin-top: 1.4rem;
    font-size: 1.1em;
    line-height: 1.1;
    font-weight: light;
`

const LeftAuthor = s.p`
    ${FUTURA_REGULAR}
    color: black;
    text-align: center;
    margin-top: 1.4rem;
    font-size: 0.7em;
    font-weight: light;
`

const RightTitle= s.div`
    align-self: right;
    margin-right: 2%;
    text-align: center;
    display: inline-block;
    color: white;
    margin-top: 15%;
    font-size: 2.1vw;
    width: 60%;
    font-weight: 100;
`
const RightDiv = s.div`
    position: relative;
    text-align: right; 
    width: 100%;
    background-image: url("/img/34st-election/politician.png");
    background-size: contain;
    background-repeat: no-repeat;
    line-height: 1;
`
const RightAuthor = s.div`
    ${FUTURA_REGULAR}
    color: white;
    align-self: right;
    margin-right: 10%;
    margin-top: 4%;
    text-align: right;
    display: inline-block;
    font-size: 0.75vw;
    width: 60%;
    font-weight: 100;
`
const Features = () => (
    <div>
        <TemporarySectionHeader>FEATURES</TemporarySectionHeader>
        <ArticleGrid>
            <div>
                <img
                    src="/img/34st-election/ballot.png"
                    className="img-fluid"
                    
                />
                <LeftTitle>
                    <span style={{"font-weight": "bolder"}}>There's a limit to what can be expressed through the voting process</span>, but civic engagement doesn't end on Election Day.
                </LeftTitle>
                <LeftAuthor>
                    BY PEARL LIU
                </LeftAuthor>
            </div>
            <RightDiv>
                <RightTitle>In the wake of a Trump loss, the future of the Republican Party lies in the hans of some of its youngest members.</RightTitle>
                <RightAuthor>BY DELANI SAGNER</RightAuthor>
            </RightDiv>
        </ArticleGrid>
    </div>
)


export default Features
