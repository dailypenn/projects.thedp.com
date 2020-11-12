import React from 'react'
import s from 'styled-components'
import { Helmet } from 'react-helmet'

import { Navbar } from '../../../components/2020/election'

export default () => {
  return <>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Your guide for navigating this unprecedented virtual school year" />
      <title>The Election | 34th Street Magazine</title>
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />

      <meta property="og:title" content="The Election | 34th Street Magazine" />
      <meta property="og:image" content="https://snworksceo.imgix.net/dpn/1fe2ce10-46fa-402e-a9f2-498cc011769b.sized-1000x1000.jpg" />
      <meta property="og:description" content="Your guide for navigating this unprecedented virtual school year" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://projects.thedp.com/2020/34st-election" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Election | 34th Street Magazine" />
      <meta name="twitter:image" content="https://snworksceo.imgix.net/dpn/1fe2ce10-46fa-402e-a9f2-498cc011769b.sized-1000x1000.jpg" />
      <meta name="twitter:description" content="Your guide for navigating this unprecedented virtual school year" />
      <meta name="twitter:url" content="https://projects.thedp.com/2020/34st-election" />
      <meta name="twitter:site" content="@dailypenn"></meta>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
    </Helmet>
    <Navbar />
  </>
}
