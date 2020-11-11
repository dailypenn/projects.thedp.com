import React from 'react';
import s from 'styled-components';
import { COOPER_BLACK_REGULAR } from '../../../utils/font'

// TODO: Extract consts into another file
const ORANGE = `#F29F4D`;
const MAGENTA = `#AE7794`;

const HeaderWrapper = s.h1.attrs(() => ({
    className: "mx-auto"
}))`
    ${COOPER_BLACK_REGULAR}
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-bottom-color: ${({inverted}) => inverted ? ORANGE : MAGENTA};
    color: ${({inverted}) => inverted ? MAGENTA : ORANGE};
    display: inline-block;
    text-align: center;
`

export const Header = ({children, inverted}) => <HeaderWrapper inverted={inverted}>
    {children}
</HeaderWrapper>
