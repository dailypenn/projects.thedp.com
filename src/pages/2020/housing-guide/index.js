import React from 'react'
import s from 'styled-components'

import { Helmet } from 'react-helmet'
const Metadata = () => (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Housing Guide 2020 | The Daily Pennsylvanian</title>

    <meta property="og:title" content="Housing Guide 2020 | The Daily Pennsylvanian" />
    <meta property="og:image" content={Thumbnail} />
    <meta property="og:description" content="Your guide to living at Penn" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://projects.thedp.com/2020/housing-guide/" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Housing Guide 2020 | The Daily Pennsylvanian" />
    <meta name="twitter:image" content={Thumbnail} />
    <meta name="twitter:description" content="Your guide to living at Penn" />
    <meta name="twitter:url" content="https://projects.thedp.com/2020/housing-guide/" />
    <meta name="twitter:site" content="@dailypenn" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
  </Helmet>
)

// TODO: Extract out add component for DP usage
export default () => <>
  <Metadata />
</>;
