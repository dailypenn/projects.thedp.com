import React from 'react';
import s from 'styled-components';

const WHITE = `#FFFFFF`;
const BOX_SHADOW = `0px 5px 20px rgba(0, 0, 0, 0.1)`;

export const CardWrapper = s.div.attrs(({ className }) => ({
  className
}))`
    background-color: ${WHITE};
    border-radius: 15px;
    box-shadow: ${BOX_SHADOW};
    display: flex;
    justify-content: center;
    flex-direction: column;
  ${({ flush }) => flush || `padding-bottom: 30px;`}
    transition: all 0.3s;
  margin-bottom: 60px;
  overflow: hidden;
`

export const Card = ({ className, children, flush }) => <CardWrapper className={className} flush={flush}>
    {children}
</CardWrapper>
