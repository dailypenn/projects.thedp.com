import React from "react"
import s from "styled-components"
import HeroImage from "../../../content/images/2020/housing-guide/hero.png"

const StyledImage = s.img`
    width: 100%;
`

export const Hero = () => <StyledImage src={HeroImage} />
