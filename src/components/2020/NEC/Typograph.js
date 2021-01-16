import s from 'styled-components'
import { Link } from 'gatsby'

import { KARLA_REGULAR, KARLA_BOLD } from '../../../utils/font'

export const ClassButton = s(Link)`
    margin: 10px;
	border: none;
	padding: 10px 30px;
    position: relative;
    font-size: 20px/23px;
    background-color: inherit;
    text-decoration: none;
    color: black;

    ${KARLA_REGULAR}
    
	&::before{
        border-radius:50px;
		transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		content: '';
        width: 42px;
		height: 100%;
		background: #DEF2F1;
		position: absolute;
        top: 0;
        text-decoration: none;
        opacity: 70%;
		left: 0;
    }
    
    &:hover{
        opacity: 70%;
        color: black;
        text-decoration: none;
		&::before{
			width: 100%;
		}
	}
`

export const ToggleButton = s.h4`
    ${KARLA_REGULAR}
    color: #2B7A77;

    font-size: 18px;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const VoteButton = s.div`
display: block;
height: 100%;
animation: hue-rotate 10s linear infinite;

.button {
    -webkit-font-smoothing: antialiased;
    background-color: #222;
    border: none;
    color: #fff;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 100;
    text-decoration: none;
    user-select: none;
    letter-spacing: 1px;
    color: white;
    padding: 20px 40px;
    text-transform: uppercase;
    transition: all 0.1s ease-out;
  
    &:hover {
      background-color: #90feb5;
      color: #fff;
    }
    
    &:active {
      transform: scale(0.95);
    }
  
    &--bubble {
      position: relative;
      z-index: 2;
      color: white;
      background: none;
  
      &:hover {
        background: none;
      }
  
      &:hover + .button--bubble__effect-container .circle {
        background: darken(#90feb5, 15%);
      }
  
      &:hover + .button--bubble__effect-container .button {
        background: darken(#90feb5, 15%);
      }
  
      &:active + .button--bubble__effect-container {
        transform: scale(0.95);
      }
  
      &__container {
        position: relative;
        display: inline-block;
  
        .effect-button {
          position: absolute;
          width: 50%;
          height: 25%;
          top: 50%;
          left: 25%;
          z-index: 1;
          transform: translateY(-50%);
          background: #222;
          transition: background 0.1s ease-out;
        }
      }
    }
  }
  
  .button--bubble__effect-container {
    position: absolute;
    display: block;
    width: 200%;
    height: 400%;
    top: -150%;
    left: -50%;
    -webkit-filter: url("#goo");
    filter: url("#goo");
    transition: all 0.1s ease-out;
    pointer-events: none;
  
    .circle {
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 15px;
      background: $dark-blue;
      transition: background 0.1s ease-out;
  
      &.top-left {
          top: 40%;
          left: 27%;
      }
  
      &.bottom-right {
          bottom: 40%;
          right: 27%;
      }
    }
  }
  
  .goo {
    position: absolute;
    visibility: hidden;
    width: 1px;
    height: 1px;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  
  .button--bubble__container {
    top: 50%;
    margin-top: -25px;
  }
  
  @keyframes hue-rotate {
        from {
          -webkit-filter: hue-rotate(0);
          -moz-filter: hue-rotate(0);
          -ms-filter: hue-rotate(0);
          filter: hue-rotate(0);
        }
        to {
          -webkit-filter: hue-rotate(360deg);
          -moz-filter: hue-rotate(360deg);
          -ms-filter: hue-rotate(360deg);
          filter: hue-rotate(360deg);
        }
  }
`
