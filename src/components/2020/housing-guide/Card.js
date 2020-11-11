import React from 'react';
import s from 'styled-components';

const WHITE = `#FFFFFF`;
const BOX_SHADOW = `0px 5px 20px rgba(0, 0, 0, 0.1)`;

export const CardWrapper = s.div`
    ${({ padding}) => padding && `padding: 40px 40px 30px 40px;`}
    background-color: ${WHITE};
    border-radius: 15px;
    box-shadow: ${BOX_SHADOW};
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 60px;
    transition: all 0.3s;
    padding-bottom: 30px;
`

export const Card = ({ children, padding }) => <CardWrapper padding={padding}>
    {children}
</CardWrapper>
