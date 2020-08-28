import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import s from 'styled-components'

import JoinEditorialJSON from '../../../json/joinEditorial.json'
import JoinBusinessJSON from '../../../json/joinBusiness.json'

const Wrapper = s.div`
  font-size: 1em;
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #000;
  background-color: #EEE;

  h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    margin: 0;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 3rem;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 2.5rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
  }

  h5 {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 10px;
  }

  p {
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    font-weight: 300;
    margin-bottom: 10px;
  }

  a:hover {
    color: #AAA;
  }

  a:last-of-type {
    margin-bottom: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: #000;
  }

  iframe {
    width: 100%;
  }

  iframe.join-form {
    height: calc(100% - 59px);
  }

  section {
    min-height: calc(100vh - 100px);
    height: auto;
    padding: 50px;
  }

  section.intro {
    display: flex;
    justify-content: center;
    background: linear-gradient(transparent, transparent, #000), url('https://snworksceo.imgix.net/dpn/a692e1b6-3022-4759-b1b9-a2f85ff75667.sized-1000x1000.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: calc(100vh - 150px);
  }

  section.street {
    background-color: #44BFBF;
    background: linear-gradient(rgba(68, 191, 191, 0.8), rgba(68, 191, 191, 0.8)), url('https://snworksceo.imgix.net/dpn/a7c7d5b9-59ac-420c-bd26-cfd44d0e52d2.sized-1000x1000.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFF;
  }

  section.street a {
    color: #044747;
  }

  section.street a:hover {
    color: #1b7777;
  }

  section.utb {
    background-color: #446CB3;
    background: linear-gradient(rgba(68, 108, 179, 0.8), rgba(68, 108, 179, 0.8)), url('https://snworksceo.imgix.net/dpn/4a08586d-e444-4f4b-82e6-0ded406a2e27.sized-1000x1000.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFF;
  }

  section.utb a {
    color: #CCC;
  }

  section.utb a:hover {
    color: #999;
  }

  section.join {
    background-color: #EEE;
    height: calc(100vh - 100px);
  }

  p.overall {
    margin: 20px auto;
    text-align: center;
  }

  .join-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border: 1px solid #AA1E22;
    border-radius: 2px;
    background-color: #AA1E22;
    color: #FFF;
    cursor:pointer;
  }

  .join-button:hover {
    color: #FFF;
    border: 1px solid #FFF;
  }

  .logo {
    margin-top: 5px;
  }

  .intro-text {
    color: #FFF;
    text-align: center;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
  }

  .section {
    width: 65%;
    margin: auto;
  }

  .section.form {
    height: calc(100% - 63px);
  }

  .departments {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .departments span {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .ed-tab, .biz-tab {
    cursor: pointer;
  }

  .ed-text, .biz-text {
    visibility: hidden;
    margin: auto;
    height: 0;
    width: 90%;
  }

  .ed-text p, .biz-text p {
    margin: 0;
    height: 0;
  }

  .ed-text.active, .biz-text.active {
    visibility: visible;
    height: auto;
  }

  .ed-text.active p, .biz-text.active p {
    margin: 1em 0;
    height: auto;
  }

  .ed-tab.active {
    font-weight: 700;
    border-bottom: 3px solid #FFF;
  }

  .biz-tab.active {
    font-weight: 700;
    border-bottom: 3px solid #000;
  }

  .inline-link {
    display: inline-block;
    margin: 0;
  }

  @media screen and (max-width: 1200px) {
    .departments {
      flex-wrap: wrap;
    }

    .departments span {
      width: 33%;
    }

    .ed-text, .biz-text {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .section {
      width: 100%;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    section {
      min-height: calc(100vh - 40px);
      height: auto;
      width: calc(100vw - 30px);
      padding: 20px 15px;
    }

    section.intro {
      min-height: calc(100vh - 90px);
    }

    section.join {
      height: calc(100vh - 40px);
    }

    .section.form {
      height: calc(100% - 86px);
    }
  }

  @media screen and (max-width: 425px) {
    .biz-body .departments span {
      width: 50%;
    }

    .join-button {
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0px;
      right: 0px;
      left: 0px;
      height: 40px;
      padding: 10px;
    }

    .intro-text {
      margin-bottom: 60px;
    }
  }
`
const Editorial = s.div`
  font-size: 1em;
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #000;
  background-color: #EEE;
  section.editorial {
    background-color: #AA1E22;
    background: ${({ background }) => background};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFF;
  }

  section.editorial a {
    color: #DDD;
  }

  section.editorial a:hover {
    color: #AAA;
  }
`
const Business = s.div`
  section.business {
    background-color: #EEE;
    background: ${({ background }) => background};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  section.business a {
    color: #AA1E22;
  }

  section.business a:hover {
    color: #777;
  }
`

const Join = () => {
  const [editorialImage, setEditorialImage] = useState("linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/917417c6-2a39-487a-bd75-8913f3427445.sized-1000x1000.jpg');")
  const [editorialDescription, setEditorialDescription] = useState([
    "By joining News, you will learn not only how to report and investigate stories relevant to Penn’s campus and students, but also the intricacies of student life and University operations. Reporters uncover news important to the Penn community by illuminating student stories and holding institutions accountable. Whether it’s breaking news or investigative journalism, your storytelling has the ability to enact real change on campus.",
    "The Real-Time Desk is also housed in the News department, and is for those who want to report on breaking news and write aggregated news posts with a lesser time commitment.",
    "Follow in the footsteps of DP News alumni who work for publications like The New York Times, Politico, Vox, and The Washington Post, to name a few. No journalistic experience required  &mdash; only curiosity and dedication."
  ])
  const [editorialHighlights, setEditorialHighlights] = useState([
    "‘The neighborhood lost its life’: University City businesses suffer from COVID-19",
    "Thousands petition U. to cut ties with Philly PD, reform militarized campus 'police state'",
    "Penn projects $91M budget deficit for FY21 in addition to $47M loss from spring 2020",
    "Here's what six Penn public health experts said about the fall semester",
    "Live updates — Philadelphia protests over George Floyd's murder for eighth straight day"
  ])
  const [editorialHighlightLinks, setEditorialHighlightLinks] = useState([
    "https://www.thedp.com/article/2020/06/west-philadelphia-small-businesses-penn-campus-closed-smokes-allegros",
    "https://www.thedp.com/article/2020/06/petition-anti-police-penn-philadelphia-george-floyd",
    "https://www.thedp.com/article/2020/07/penn-projects-91-budget-deficit-covid-pandemic",
    "https://www.thedp.com/article/2020/07/penn-fall-health-professional-safety-testing-covid",
    "https://www.thedp.com/article/2020/05/black-lives-matter-protest-george-floyd-philadelphia"
  ])
  const [editorialActive, setEditorialActive] = useState("news")

  const [businessImage, setBusinessImage] = useState("linear-gradient(rgba(238, 238, 238, 0.9), rgba(238, 238, 238, 0.9)), url('https://snworksceo.imgix.net/dpn/5803b1e8-72a6-4810-9770-60123f4a066d.sized-1000x1000.jpg')")
  const [businessDescription, setBusinessDescription] = useState([
    "DP Marketing works on developing and enhancing the brand identity of The DP Inc., a $3 million dollar business. Our associates work to create social media campaigns, events and merchandise that showcase the content of the DP, 34th Street Magazine and Under the Button. Associates are also given the resources and opportunities to plan and execute their own marketing projects to promote any section of the publication.",
    "Marketing is the perfect place to develop both your creativity and your business skills because all our projects require a good mix of both. No prior experience is required, just a willingness to learn about branding, promotion and merchandising. We also have a very strong social culture as we host bi-weekly events and love to hang out with each other. Join us to gain some business experience and be a part of the best family at the DP! "
  ])
  const [businessHighlights, setBusinessHighlights] = useState([
    "Battle of the Bands",
    "UTB Comedy Night",
    "Puck Frinceton T-shirt Sale"
  ])
  const [businessHighlightLinks, setBusinessHighlightLinks] = useState([
    "https://www.facebook.com/events/2205915566180909/",
    "https://www.facebook.com/events/2137326212971575/",
    "https://www.facebook.com/events/440490923254900/"
  ])
  const [businessActive, setBusinessActive] = useState("marketing")

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Join The Daily Pennsylvanian, Inc.</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Join The Daily Pennsylvanian, Inc." />
        <meta property="og:image" content="https://snworksceo.imgix.net/dpn/ec790853-4028-4601-b716-108531b8baf7.sized-1000x1000.jpg" />
        <meta property="og:description" content="The Daily Pennsylvanian is looking for new students to join our team! Check out our recruitment website to see all of the opportunities we have to offer!" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://projects.thedp.com/2020/join" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join The Daily Pennsylvanian, Inc." />
        <meta name="twitter:image" content="https://snworksceo.imgix.net/dpn/ec790853-4028-4601-b716-108531b8baf7.sized-1000x1000.jpg" />
        <meta name="twitter:description" content="The Daily Pennsylvanian is looking for new students to join our team! Check out our recruitment website to see all of the opportunities we have to offer!" />
        <meta name="twitter:url" content="https://projects.thedp.com/2020/join" />
        <meta name="twitter:site" content="@dailypenn" />
      </Helmet>

      <Wrapper>
        <header>
          <a href="https://www.thedp.com" target="_blank">
            <img src="https://snworksceo.imgix.net/dpn/d2453b29-fc87-458c-b226-ece3042946bb.sized-1000x1000.png" alt="The Daily Pennsylvanian" width="250" class="logo" />
          </a>
        </header>

        <section class="intro">
          <div class="intro-text">
            <h1>The Daily Pennsylvanian, Inc.</h1>
            <h3>Don't just live the story of a lifetime. Tell it.</h3>
            <a href="#apply"><div class="join-button">Join Now</div></a>
          </div>
        </section>

        <Editorial background={editorialImage}>
        <section class="editorial">
        <h2>Editorial</h2>
          <div class="section">
            <p class="overall">
              The Daily Pennsylvanian editorial departments work together to find and tell the most important stories on campus.
              Whether it's diving deep into an investigative story or capturing snapshots of people at the frontlines of Penn's history, the DP editorial side never stops making a difference.
              We're operating 100% remotely through the pandemic.
            </p>

            <div class="departments">
              {JoinEditorialJSON.map((dpt, idx) => (
              <span>
                <h4 class={(editorialActive == dpt.id) ? 'ed-tab active' : 'ed-tab'} id={dpt.id} onClick={() => {
                  setEditorialImage(dpt.background)
                  setEditorialDescription(dpt.text)
                  setEditorialHighlights(dpt.highlights)
                  setEditorialHighlightLinks(dpt["highlight-links"])
                  setEditorialActive(dpt.id)
                }}>
                  {dpt.department}
                </h4>
              </span>
              ))}
            </div>
            <div className="ed-text active">
                {editorialDescription.map(p => (
                  <p>{p}</p>
                ))}
                <h5>{(editorialHighlights.length == 0) ? '': 'Highlights'}</h5>
                {
                  (editorialHighlights.length == editorialHighlightLinks.length)
                  ? editorialHighlights.map((l, idx) => (
                    <a href={editorialHighlightLinks[idx]} target="_blank" rel="noreferrer">{l} &#8594;</a>
                  ))
                  : editorialHighlights.map((l, idx) => (
                    <p>{l}</p>
                  ))
                }
            </div>
          </div>
        </section>
        </Editorial>
        
        <Business background={businessImage}>
        <section class="business">
        <h2>Business</h2>
          <div class="section">
            <p class="overall">
              The Daily Pennsylvanian is a $3-million, student-run media organization.
              Our incredible teams work together to market our products and sustain our business.
              Through the DP, students experience working for a real company, with real staffers, clients, and revenues.
              Join one of our teams to gain an invaluable, hands-on experience unlike any other.
            </p>

            <div class="departments">
              {JoinBusinessJSON.map((dpt, idx) => (
              <span>
                <h4 class={(businessActive == dpt.id) ? 'biz-tab active' : 'biz-tab'} id={dpt.id} onClick={() => {
                  setBusinessImage(dpt.background)
                  setBusinessDescription(dpt.text)
                  setBusinessHighlights(dpt.highlights)
                  setBusinessHighlightLinks(dpt["highlight-links"])
                  setBusinessActive(dpt.id)
                }}>
                  {dpt.department}
                </h4>
              </span>
              ))}
            </div>
            <div className="biz-text active">
                {businessDescription.map(p => (
                  <p>{p}</p>
                ))}
                <h5>{(businessHighlights.length == 0) ? '': 'Highlights'}</h5>
                {
                  (businessHighlights.length == businessHighlightLinks.length)
                  ? businessHighlights.map((l, idx) => (
                    <a href={businessHighlightLinks[idx]} target="_blank" rel="noreferrer">{l} &#8594;</a>
                  ))
                  : businessHighlights.map((l, idx) => (
                    <p>{l}</p>
                  ))
                }
            </div>
          </div>
        </section>
        </Business>

        <section class="street">
          <h2>34th Street Magazine</h2>
          <div class="section">
            <p>
              34th Street Magazine is your authority on Penn student life. We are a student magazine that empowers student voices, sheds light on student issues, and provides timely commentary on the arts and campus culture. We provide endless opportunities for a creative outlet: you can write cover stories, help envision marketing campaigns, design and lay out issues, attend press movie screenings, review top-rated restaurants, and even pitch your own content ideas.
            </p>
            <p>
              As the hub for Penn voices and narrative, Street staffers cover arts, culture, and feature content. We are looking for writers, photographers, videographers, artists, and social media whizzes to create, package, and promote Street to the Penn audience. Writers can work for our Features, Focus, Style, Arts, Film & TV, Music, or Ego sections. Multimedia staffers work with either the Photo or Video departments. Illustrators and graphic designers create visuals, including our weekly print product, as part of the Design department. Audience Engagement associates manage our social media and our newsletter, The Toast.
            </p>
            <p>
              Street provides writers the opportunity to be creative in their pursuit of journalism, teaches Audience Engagement staff how to build and promote a brand online, and gives photographers, videographers, and illustrators experience in creating engaging editorial visuals. Join Street to be part of a tight–knit community and learn from some of the most interesting and dedicated people at Penn—we promise you won’t regret it.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJQEz55SUFAIETHN-evrZuAEeL-c3A2bVeJ-_HuVU2LUcenA/viewform" target="_blank"> For 34st interest form click here &#8594;</a>
            <h5>Highlights</h5>
            <a href="https://www.34st.com/article/2020/04/covid-coronavirus-healthcare-essential-workers-nurses-ppe-protection-masks-hospitals-penn" target="_blank">‘You Can’t Not Take That Home’: Penn Nurses on the Emotional Toll of Coronavirus &#8594;</a>
            <a href="https://www.34st.com/article/2020/05/penn-10-profiles-2020-university-of-pennsylvania-34th-street-magazine-special-issue" target="_blank">LEADERSHIP, COMMITMENT, AND SCHOLARSHIP: PRESENTING THE CLASS OF 2020 PENN 10 &#8594;</a>
            <a href="https://www.34st.com/article/2020/02/upenn-why-i-left-greek-life-cafsa-wots" target="_blank">Why I Left Greek Life—And Joined CAFSA &#8594;</a>
            <a href="https://www.34st.com/article/2020/07/tiktok-music-streaming-spotify-record-label-penelope-scott-yoza-lizzy-mcalpine" target="_blank">Is TikTok creating a musical meritocracy? &#8594;</a>
            <a href="https://www.34st.com/article/2020/07/rick-krajewski-upenn-alum-west-philadelphia-state-representative" target="_blank">From Houston Hall to the Pennsylvania House of Representatives &#8594;</a>
          </div>
        </section>

        <section class="utb">
          <h2>Under the Button</h2>
          <div class="section">
            <p>
              Under the Button is Penn’s go-to source for daily humor and satire.
            </p>
            <p>
              Our writing staff works around the clock to report on the stories that other media organizations wouldn’t dare touch due to editorial standards. Our video and media staff work to capture the real Penn experience through the lens of a camera we stole from the DP. 
            </p>
            <p>
              We are looking for talented writers, videographers, actors, graphic designers, coders, our dignity, ten gay rats, and your best brisket recipe. If you’re an all-around funny person looking for a way to subject the rest of campus to your sense of humor, we’re the publication for you.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1tL3YCBuj4BMxLQPVGZ6PCvk3fjbsiRNOCZGcwHXJnDr4UA/viewform" target="_blank"> For UTB interest form click here &#8594;</a>
            <h5>Highlights</h5>
            <a href="https://www.underthebutton.com/article/2019/07/wax-trump-shame-penn" target="_blank">Wax and Trump in Heated Competition to Bring Most Shame to Penn &#8594;</a>
            <a href="https://www.underthebutton.com/article/2019/09/if-i-had-a-girlfriend-photo-essay" target="_blank">Photo Essay: These Are All the Places on Campus I Would Kiss My Girlfriend If I Had One &#8594;</a>
            <a href="https://www.underthebutton.com/article/2018/12/choose-your-own-adventure-jeff-writing-sem-intro" target="_blank">Choose Your Own Adventure: Will You Fuck Jeff From Writing Sem? &#8594;</a>
            <a href="https://youtu.be/Or5lGThQTJU" target="_blank"> Pool Party Man on the Street &#8594;</a>
          </div>
        </section>

        <section class="join" id="apply">
          <h2>Join The Daily Pennsylvanian, Inc.</h2>
          <div class="section form">
            <p class="overall">
              Fill out the form below to apply!
            </p>
            <iframe class="join-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeNzxYf1qLmjDTGeBS0xksY2IQPwbWQkBi9guJkji8vgePp1g/viewform" width="100%" height="600" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
          </div>
        </section>
      </Wrapper>
    </>
  )
}

export default Join