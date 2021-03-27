import React from 'react'
import s from 'styled-components'
import LogoImage from '../../../content/images/2021/masthead-madness/logo.png'

const StyledImage = s.img`
    width: 100%;
`

export const Logo = () => <StyledImage src={LogoImage} />
