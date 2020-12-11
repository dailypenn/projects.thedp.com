import React from 'react'
import s from 'styled-components'
import { Row } from "react-bootstrap"

const GREEN = "#639E7D"
const BLUE = "#032FB7"
const YELLOW = "#FEFAD8"

const Box = s(Row)`
    margin: auto;
    background-color: ${GREEN};
    padding: 2%;
`

const BoxTitle = s.div`
    color: ${BLUE};
    font-size: 250%;
    word-break: keep-all;
    width: 100%;
`

const BoxContent = s.div`
    padding: 4%;
    padding-top 0;
    text-align: left;
    color: ${YELLOW};
    font-size: 80%;
    width: 100%;
`

const BlueTitle = s.h1`
    position: absolute;
    margin-left: 4vw;
    margin-top: -60%;
    width: 100%;
    color: ${BLUE};
    height: 5%;
    transform: rotate(-90deg);
    transform-origin: right bottom 0;
    font-size: 2vw;
`

const Timeline = s.div`
    margin-top: 150%;
    margin-left: 40%;
    width: 60%;
    text-align: center;
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

