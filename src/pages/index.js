import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import s from 'styled-components'

// import Layout from "../components/layout"
import Image from "../components/image"
// import SEO from "../components/seo"

import projectsJSON from '../content/projects.json'

const Wrapper = s.div`
  body {
    font-family: neuzeit-grotesk, Helvetica, Arial, sans-serif;
    padding-left: 15px;
    padding-right: 15px;
  }

  a {
    color: #000;
  }

  h1, h2, h3 {
    margin-top: 0 !important;
  }

  nav img {
    padding-top: 15px;
  }

  #featured-secondary {
    padding-left: 25px;
    margin-left: 15px;
    margin-right: -15px;
    border-left: 1px solid #eee;
  }

  .wrapper {
    margin-top: 100px;
  }

  .row {
    margin-bottom: 15px;
  }

  .row:first-child {
    padding-top: 0;
  }

  .ad {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 0;
  }

  .welcome {
    width: 50%;
  }

  .welcome p {
    margin-top: 0;
    padding: 0;
  }

  .welcome a {
    color: #AA1E22;
  }

  #articles.row {
    margin-bottom: 0;
  }

  .proj-desc, .pull-left, .pull-right {
    color: #777;
  }

  .proj-section {
    font-size: 16px;
    color: #777;
    text-transform: uppercase;
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 200;
  }

  .img-full {
    width: 100%;
  }

  .secondary-feature:first-of-type {
    padding-bottom: 40px;
    margin-bottom: 20px;
  }

  .credit {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    #featured-secondary {
      border-left: none;
    }

    .welcome {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .mobile-only {
      display: none;
    }
  }
`

const URL = ({ link, children }) => {
  if (link.includes('http')) return <a href={link} target="_blank"> {children} </a>
  return <Link to={link} target="_blank"> {children} </Link>
}

const MainArticle = ({ article }) => (
  <>
    <div>
      <img src={article.image} class="img img-responsive img-full" alt={article.alt} />
    </div>
    <div>
      <div class="proj-section row">
        <div class="col-xs-6"> {article.section} </div>
        <div class="col-xs-6 text-right"> {article.date} </div>
      </div>
      <URL link={article.link}> <h1> {article.title} </h1> </URL>
      <div class="proj-desc"> {article.description} </div>
      <br />
      <span class="author pull-right"> {article.sponsored ? 'Sponsored by ' + article.author : article.author} </span>
    </div>
  </>
)

const SideArticle = ({ article }) => (
  <>
    <div class="secondary-feature">
      <div>
        <img src={article.image} class="img img-responsive img-full" alt={article.alt} />
      </div>
    <div>
      <div class="proj-section row">
        <div class="col-xs-5"> {article.section} </div>
        <div class="col-xs-7 text-right"> {article.date} </div>
      </div>
        <URL link={article.link}> <h3> {article.title} </h3> </URL>
        <div class="proj-desc"> {article.description} </div>
        <br />
        <span class="author pull-right"> {article.sponsored ? 'Sponsored by ' + article.author : article.author} </span>
      </div>
    </div>
  </>
)

const Article = ({ article }) => (
  <div class="row">
    <div class="col-sm-4">
      <img src={article.image} class="img img-responsive" alt={article.alt} />
    </div>
    <div class="col-sm-8">
      <div class="proj-section row">
        <div class="col-xs-6"> {article.section} </div>
        <div class="col-xs-6 text-right"> {article.date} </div>
      </div>
      <URL link={article.link}> <h2> {article.title} </h2> </URL>
      <div class="proj-desc"> {article.description} </div>
      <br />
      <span class="author pull-right"> {article.sponsored ? 'Sponsored by ' + article.author : article.author} </span>
    </div>
    <div class="col-xs-12"> <hr /> </div>
  </div>
)

const IndexPage = () => (
  <Wrapper>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Projects | The Daily Pennsylvanian</title>
      <link rel="stylesheet" type="text/css" href="https://d1q35ni5859stt.cloudfront.net/20161213m1eLHQrMRG/dist/css/master.min.css" />
    </Helmet>

    <nav className="navbar navbar-inverse navbar-fixed-top">
      <center>
        <a href="https://www.thedp.com">
          <img src="https://snworksceo.imgix.net/dpn/aa058626-f082-47a5-9191-86c645d2986b.sized-1000x1000.png" alt="The Daily Pennsylvanian" width="250" />
        </a>
      </center>
    </nav>

    <div class="container wrapper">
      <h1>DP Projects &amp; Guides</h1>

      <div class="welcome">
        <p>Welcome to The Daily Pennsylvanian's Projects page! This site showcases the work done by the DP's web development team, such as project pages for special issues or standalone interactives.</p>
        <p><a href="https://projects.34st.com" target="_blank">34th Street Magazine</a> and <a href="https://projects.underthebutton.com" target="_blank">Under the Button</a> have their own project pages. Check them out for more of their content!</p>
      </div>

      <hr />

      <div class="row" id="featured">
        <div class="col-sm-8" id="featured-main">
          <MainArticle article={projectsJSON.featured[0]} />
        </div>
        <div class="col-xs-12 mobile-only"><hr class="mobile-only" /></div>
        <div class="col-sm-4" id="featured-secondary">
          {projectsJSON.featured.slice(1).map(article => <SideArticle article={article} />)}
        </div>
      </div>

      <hr />

      {/* <div class="ad">
        <div class="hidden-xs hidden-sm">
          <!-- /12234093/DP.com-Leaderboard -->
          <div id='div-gpt-ad-1485118541142-1' style='height:90px; width:728px;'>
            <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1485118541142-1'); });
            </script>
          </div>
        </div>
        <div class="hidden-md hidden-lg">
          <!-- /12234093/DP.com-mobile-leaderboard -->
          <div id='div-gpt-ad-1485118541142-0' style='height:50px; width:320px;'>
            <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1485118541142-0'); });
            </script>
          </div>
        </div>
      </div> */}

      <hr />

      <div class="row" id="articles">
        {projectsJSON.articles.map(article => <Article article={article} />)}
      </div>

      <div class="credit">
        <p>Copyright &copy; 2016-2020 The Daily Pennsylvanian. All rights reserved.</p>
      </div>

    </div>

    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Wrapper>
)

export default IndexPage
