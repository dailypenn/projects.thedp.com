import React from "react"
import s from "styled-components"
import Img from "gatsby-image"

import { BRANDON_GROTESQUE_MEDIUM, LORA_REGULAR } from "../../../utils/font"

// TODO: Extract these into constants file
const WHITE = `#FFFFFF`
const TEXT_GREY = `#494748`
const BOX_SHADOW = `0px 5px 20px rgba(0, 0, 0, 0.1)`

export const CardWrapper = s.div.attrs(({ className }) => ({
  className,
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

export const Card = ({ className, children, flush }) => (
  <CardWrapper className={className} flush={flush}>
    {children}
  </CardWrapper>
)

const Link = s.a`
  :hover {
    color: initial;
    text-decoration: none;
  }
`

const Header = s.h2`
  ${BRANDON_GROTESQUE_MEDIUM}
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 30px;
  ${({ color }) => color && `color: ${color};`}
`

const Subheader = s.p`
  ${({ color }) => color && `color: ${color};`}
  ${LORA_REGULAR}
  margin-right: 40px;
  margin-left: 40px;
  font-style: italic;
`

const Content = s.p`
  margin-right: 40px;
  margin-left: 40px;
  color: ${TEXT_GREY};
  ${LORA_REGULAR};
`

export const CardContent = ({
  title,
  link,
  authors,
  abstract,
  image,
  primary,
  secondary,
  noImg
}) => (
  <Link href={link} target="_blank">
    {!noImg && <Img fluid={image.src.childImageSharp.fluid} className="img-fluid" />}
    <Header href={link} color={primary}>
      {title}
    </Header>
    <Subheader color={secondary}>{authors}</Subheader>
    <Content>{abstract}</Content>
  </Link>
)
