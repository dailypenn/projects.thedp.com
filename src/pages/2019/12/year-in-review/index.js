import React from 'react'
import { Helmet } from 'react-helmet'
import s from 'styled-components'

import NavBar from '../../../../components/2019/year-in-review/Nav'
import MultiMedia from '../../../../components/2019/year-in-review/Multimedia'
import HeaderSection from '../../../../components/2019/year-in-review/HeaderSection'
import Opinion from '../../../../components/2019/year-in-review/Opinion'
import Street from '../../../../components/2019/year-in-review/Street'
import News from '../../../../components/2019/year-in-review/News'
import Sports from '../../../../components/2019/year-in-review/Sports'
import { OPEN_SANS_REGULAR } from '../../../../utils/font'

const Wrapper = s.div`
    a:hover {
        text-decoration: none;
    }
`

const Footer = s.div`
    ${OPEN_SANS_REGULAR}
    text-align: center;
    padding: 50px 0;
`

const Index = () => (
  <>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Year In Review 2019 | The Daily Pennsylvanian</title>

        <meta property="og:title" content="Year in Review 2019 | The Daily Pennsylvanian" />
        <meta property="og:image" content="https://s3.amazonaws.com/snwceomedia/dpn/c9f5bdfc-5a9d-450e-9a90-4e8ad3b04186.sized-1000x1000.jpg" />
        <meta property="og:description" content="Take a look back on 2019's most memorable moments with The Daily Pennsylvanian's Year in Review." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://projects.thedp.com/2019/12/year-in-review/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Year in Review 2019 | The Daily Pennsylvanian" />
        <meta name="twitter:image" content="https://s3.amazonaws.com/snwceomedia/dpn/c9f5bdfc-5a9d-450e-9a90-4e8ad3b04186.sized-1000x1000.jpg/" />
        <meta name="twitter:description" content="Take a look back on 2019's most memorable moments with The Daily Pennsylvanian's Year in Review." />
        <meta name="twitter:url" content="https://projects.thedp.com/2019/12/year-in-review/" />
        <meta name="twitter:site" content="@dailypenn" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    </Helmet>

    <Wrapper>
        <HeaderSection/>
        <NavBar/>

        <News/>
        <Opinion/>

        <Sports/>
        <Street/>
        <MultiMedia/>
        <Footer> Made with 🎉 by The Daily Pennsylvanian, © 2018. All rights reserved. </Footer>
    </Wrapper>
  </>
)

export default Index