import React from 'react'
import s from 'styled-components'
import { Helmet } from 'react-helmet'

import NavBar from '../../../components/2020/vote/Nav'
import VoteHeader from '../../../content/images/2020/vote/vote-header.png'
import ExplainItToMe from '../../../components/2020/vote/ExplainItToMe'
import InOtherNews from '../../../components/2020/vote/InOtherNews'
import InMyOpinion from '../../../components/2020/vote/InMyOpinion'
import Sports from '../../../components/2020/vote/Sports'
import Multimedia from '../../../components/2020/vote/Multimedia'
import ComicRelief from '../../../components/2020/vote/ComicRelief'

const IndexPage = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Your guide for voting in the 2020 elections" />
      <title>2020 Election Guide | The Daily Pennsylvanian</title>
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      
      <meta property="og:title" content="2020 Election Guide | The Daily Pennsylvanian" />
      <meta property="og:image" content="" />
      <meta property="og:description" content="Your guide for voting in the 2020 elections" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://projects.thedp.com/2020/vote" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="2020 Election Guide | The Daily Pennsylvanian" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:description" content="Your guide for navigating this unprecedented virtual school year" />
      <meta name="twitter:url" content="https://projects.thedp.com/2020/vote" />
      <meta name="twitter:site" content="@dailypenn"></meta>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
    </Helmet>

    <NavBar />
    <div>
      <img src = {VoteHeader} style={{width:'100%'}}/>
    </div>
    <ExplainItToMe />
    <InOtherNews />
    <InMyOpinion />
    <Sports />
    <Multimedia />
    <ComicRelief />
  </>
)

export default IndexPage
