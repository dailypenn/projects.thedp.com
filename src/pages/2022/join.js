import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import s from 'styled-components'
import { Link } from 'gatsby'

import JoinEditorialJSON from '../../content/json/2022/join/joinEditorial.json'
import JoinBusinessJSON from '../../content/json/2022/join/joinBusiness.json'
import Join34thJSON from '../../content/json/2022/join/join34th.json'
import JoinUTBJSON from '../../content/json/2022/join/joinUTB.json'
import JoinIAJSON from '../../content/json/2022/join/joinIA.json'
import JoinEngineeringJSON from '../../content/json/2022/join/joinEngineering.json'

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

  .header-responsive-logo {
    opacity: 1;
    display: block;
    margin: 0 20px 0 20px;
    width: 200px;
    margin-top: -6px;
    transition: opacity 0.4s;
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

  section.institutional-advancement {
    background-color: #446CB3;
    background: linear-gradient(rgba(50, 50, 50, 0.8), rgba(50, 50, 50, 0.8)), url('https://snworksceo.imgix.net/dpn/cf166941-4632-4e79-9425-bb6b357c2b95.sized-1000x1000.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFF;
  }

  section.institutional-advancement a {
    color: #CCC;
  }

  section.institutional-advancement a:hover {
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

  .ed-tab, .biz-tab, .eng-tab {
    cursor: pointer;
  }

  .ed-text, .biz-text, .eng-text {
    visibility: hidden;
    margin: auto;
    height: 0;
    width: 90%;
  }

  .ed-text p, .biz-text p, .eng-text p {
    margin: 0;
    height: 0;
  }

  .ed-text.active, .biz-text.active, .eng-text.active {
    visibility: visible;
    height: auto;
  }

  .ed-text.active p, .biz-text.active p, .eng-text.active p {
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

  .eng-tab.active {
    font-weight: 700;
    border-bottom: 3px solid #FFF;
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

    .ed-text, .biz-text, .eng-text {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .section {
      width: 100%;
    }
  }

  @media screen and (max-width: 710px) {
    .header-responsive-logo {
      opacity: 0;
    }
  }

  @media screen and (max-width: 650px) {
    .header-responsive-logo {
      display: none;
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

const Engineering = s.div`
  font-size: 1em;
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #000;
  background-color: #EEE;
  section.engineering {
    background-color: #AA1E22;
    background: ${({ background }) => background};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFF;
  }

  section.engineering a {
    color: #FFF;
  }

  section.engineering a:hover {
    color: #777;
  }

  applylink {
    color: #F00;
  }

  applylink:hover {
    color: #F0F;
  }
`

const Join = () => {
  const [editorialImage, setEditorialImage] = useState(
    JoinEditorialJSON[0].background
  )
  const [editorialDescription, setEditorialDescription] = useState(
    JoinEditorialJSON[0].text
  )
  const [editorialHighlights, setEditorialHighlights] = useState(
    JoinEditorialJSON[0].highlights
  )
  const [editorialHighlightLinks, setEditorialHighlightLinks] = useState(
    JoinEditorialJSON[0]['highlight-links']
  )
  const [editorialActive, setEditorialActive] = useState(
    JoinEditorialJSON[0].id
  )

  const [businessImage, setBusinessImage] = useState(
    JoinBusinessJSON[0].background
  )
  const [businessDescription, setBusinessDescription] = useState(
    JoinBusinessJSON[0].text
  )
  const [businessHighlights, setBusinessHighlights] = useState(
    JoinBusinessJSON[0].highlights
  )
  const [businessHighlightLinks, setBusinessHighlightLinks] = useState(
    JoinBusinessJSON[0]['highlight-links']
  )
  const [businessActive, setBusinessActive] = useState(JoinBusinessJSON[0].id)


  const [engineeringImage, setEngineeringImage] = useState(
    JoinEngineeringJSON[0].background
  )
  const [engineeringDescription, setEngineeringDescription] = useState(
    JoinEngineeringJSON[0].text
  )
  const [engineeringHighlights, setEngineeringHighlights] = useState(
    JoinEngineeringJSON[0].highlights
  )
  const [engineeringHighlightLinks, setEngineeringHighlightLinks] = useState(
    JoinEngineeringJSON[0]['highlight-links']
  )
  const [engineeringActive, setEngineeringActive] = useState(JoinEngineeringJSON[0].id)

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Join The Daily Pennsylvanian, Inc.</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Join The Daily Pennsylvanian, Inc."
        />
        <meta
          property="og:image"
          content="https://snworksceo.imgix.net/dpn/ec790853-4028-4601-b716-108531b8baf7.sized-1000x1000.jpg"
        />
        <meta
          property="og:description"
          content="The Daily Pennsylvanian is looking for new students to join our team! Check out our recruitment website to see all of the opportunities we have to offer!"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://projects.thedp.com/2020/join"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Join The Daily Pennsylvanian, Inc."
        />
        <meta
          name="twitter:image"
          content="https://snworksceo.imgix.net/dpn/ec790853-4028-4601-b716-108531b8baf7.sized-1000x1000.jpg"
        />
        <meta
          name="twitter:description"
          content="The Daily Pennsylvanian is looking for new students to join our team! Check out our recruitment website to see all of the opportunities we have to offer!"
        />
        <meta
          name="twitter:url"
          content="https://projects.thedp.com/2020/join"
        />
        <meta name="twitter:site" content="@dailypenn" />
      </Helmet>

      <Wrapper>
        <header>
          <a class="header-responsive-logo" href="https://www.34st.com" target="_blank" rel="noreferrer">
            <img
              src={require("../../content/images/2022/join/street-logo-updated.png")}
              alt="34th Street"
              // width="100"
              height="16"
              class="logo"
              style={{ float: 'right' }}
            />
          </a>
          <a href="https://www.thedp.com" target="_blank" rel="noreferrer" style={{ margin: '0 12px 0 12px'}}>
            <img
              src="https://snworksceo.imgix.net/dpn/d2453b29-fc87-458c-b226-ece3042946bb.sized-1000x1000.png"
              alt="The Daily Pennsylvanian"
              width="225"
              class="logo"
            />
          </a>
          <a class="header-responsive-logo" href="https://www.underthebutton.com" target="_blank" rel="noreferrer">
            <img
              src={require("../../content/images/2022/join/utb-logo-large-blue.png")}
              alt="Under The Button"
              // width="150"
              height="16"
              class="logo"
            />
          </a>
        </header>

        <section class="intro">
          <div class="intro-text">
            <h1>The Daily Pennsylvanian, Inc.</h1>
            <h3>Don't just live the story of a lifetime. Tell it.</h3>
            <Link to="#apply">
              <div class="join-button">Join Now</div>
            </Link>
          </div>
        </section>

        <Editorial background={editorialImage}>
          <section class="editorial">
            <h2>Editorial</h2>
            <div class="section">
              <p class="overall">
                The Daily Pennsylvanian editorial departments work together to
                find and tell the most important stories on campus. Whether it's
                diving deep into an investigative story or capturing snapshots
                of people at the frontlines of Penn's history, the DP editorial
                side never stops making a difference.
              </p>

              <div class="departments">
                {JoinEditorialJSON.map((dpt, idx) => (
                  <span>
                    <h4
                      class={
                        editorialActive == dpt.id ? 'ed-tab active' : 'ed-tab'
                      }
                      id={dpt.id}
                      onClick={() => {
                        setEditorialImage(dpt.background)
                        setEditorialDescription(dpt.text)
                        setEditorialHighlights(dpt.highlights)
                        setEditorialHighlightLinks(dpt['highlight-links'])
                        setEditorialActive(dpt.id)
                      }}
                    >
                      {dpt.department}
                    </h4>
                  </span>
                ))}
              </div>
              <div className="ed-text active">
                {editorialDescription.map(p => (
                  <p>{p}</p>
                ))}
                <h5>{editorialHighlights.length === 0 ? '' : 'Highlights'}</h5>
                {editorialHighlights.length === editorialHighlightLinks.length
                  ? editorialHighlights.map((l, idx) => (
                      <a
                        href={editorialHighlightLinks[idx]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l} &#8594;
                      </a>
                    ))
                  : editorialHighlights.map((l, idx) => <p>{l}</p>)}
              </div>
            </div>
          </section>
        </Editorial>

        <Business background={businessImage}>
          <section class="business">
            <h2>Business</h2>
            <div class="section">
              <p class="overall">
                The Daily Pennsylvanian is a $3-million, student-run media
                organization. Our incredible teams work together to market our
                products and sustain our business. Through the DP, students
                experience working for a real company, with real staffers,
                clients, and revenues. Join one of our teams to gain an
                invaluable, hands-on experience unlike any other.
              </p>

              <div class="departments">
                {JoinBusinessJSON.map((dpt, idx) => (
                  <span>
                    <h4
                      class={
                        businessActive === dpt.id ? 'biz-tab active' : 'biz-tab'
                      }
                      id={dpt.id}
                      onClick={() => {
                        setBusinessImage(dpt.background)
                        setBusinessDescription(dpt.text)
                        setBusinessHighlights(dpt.highlights)
                        setBusinessHighlightLinks(dpt['highlight-links'])
                        setBusinessActive(dpt.id)
                      }}
                    >
                      {dpt.department}
                    </h4>
                  </span>
                ))}
              </div>
              <div className="biz-text active">
                {businessDescription.map(p => (
                  <p>{p}</p>
                ))}
                <h5>{businessHighlights.length === 0 ? '' : 'Highlights'}</h5>
                {businessHighlights.length === businessHighlightLinks.length
                  ? businessHighlights.map((l, idx) => (
                      <a
                        href={businessHighlightLinks[idx]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l} &#8594;
                      </a>
                    ))
                  : businessHighlights.map((l, idx) => <p>{l}</p>)}
              </div>
            </div>
          </section>
        </Business>

        <Engineering background={engineeringImage}>
          <section class="engineering">
            <h2>Engineering</h2>
            <div class="section">
              <p class="overall">
                We are a group of student engineers dedicated to positively 
                expanding the digital influence of The Daily Pennsylvanian around campus. 
                Building useful and elegant products is the mission that unites
                our team. Our members include web and mobile developers, 
                UI/UX designers, and data analysts.
              </p>

              <div class="departments">
                {JoinEngineeringJSON.map((dpt, idx) => (
                  <span>
                    <h4
                      class={
                        engineeringActive === dpt.id ? 'eng-tab active' : 'eng-tab'
                      }
                      id={dpt.id}
                      onClick={() => {
                        setEngineeringImage(dpt.background)
                        setEngineeringDescription(dpt.text)
                        setEngineeringHighlights(dpt.highlights)
                        setEngineeringHighlightLinks(dpt['highlight-links'])
                        setEngineeringActive(dpt.id)
                      }}
                    >
                      {dpt.department}
                    </h4>
                  </span>
                ))}
              </div>
              <div className="eng-text active">
                {engineeringDescription.map(p => (
                  <p>{p}</p>
                ))}
                <a href={"https://developers.thedp.com/apply"} target="_blank" rel="noreferrer"
                   style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "bold" }}
                >
                  {' '}
                  Apply here! &#8594;
                </a>
                <h5>{engineeringHighlights.length === 0 ? '' : 'Highlights'}</h5>
                {engineeringHighlights.length === engineeringHighlightLinks.length
                  ? engineeringHighlights.map((l, idx) => (
                      <a
                        href={engineeringHighlightLinks[idx]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l} &#8594;
                      </a>
                    ))
                  : engineeringHighlights.map((l, idx) => <p>{l}</p>)}
              </div>
            </div>
          </section>
        </Engineering>

        <section class="institutional-advancement">
          <h2>{JoinIAJSON.department}</h2>
          <div class="section">
            {JoinIAJSON.text.map(p => (
              <p>{p}</p>
            ))}
            <h5>Highlights</h5>
            {JoinIAJSON.highlights.map((h, idx) => (
              <a
                href={JoinIAJSON['highlight-links'][idx]}
                target="_blank"
                rel="noreferrer"
              >
                {h} &#8594;
              </a>
            ))}
          </div>
        </section>

        <section class="street">
          <h2>{Join34thJSON.department}</h2>
          <div class="section">
            {Join34thJSON.text.map(p => (
              <p>{p}</p>
            ))}
            <a href={Join34thJSON.signup} target="_blank" rel="noreferrer">
              {' '}
              For 34st interest form click here &#8594;
            </a>
            <h5>Highlights</h5>
            {Join34thJSON.highlights.map((h, idx) => (
              <a
                href={Join34thJSON['highlight-links'][idx]}
                target="_blank"
                rel="noreferrer"
              >
                {h} &#8594;
              </a>
            ))}
          </div>
        </section>

        <section class="utb">
          <h2>{JoinUTBJSON.department}</h2>
          <div class="section">
            {JoinUTBJSON.text.map(p => (
              <p>{p}</p>
            ))}
            <a href={JoinUTBJSON.signup} target="_blank" rel="noreferrer">
              {' '}
              For UTB interest form click here &#8594;
            </a>
            <h5>Highlights</h5>
            {JoinUTBJSON.highlights.map((h, idx) => (
              <a
                href={JoinUTBJSON['highlight-links'][idx]}
                target="_blank"
                rel="noreferrer"
              >
                {h} &#8594;
              </a>
            ))}
          </div>
        </section>

        <section class="join" id="apply">
          <h2>Join The Daily Pennsylvanian, Inc.</h2>
          <div class="section form">
            <p class="overall">Fill out the form below to apply!</p>
            <iframe
              class="join-form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc-_OY3DJhpa6yTIZcg4x-iuFxVqCcHWjsl1DdkJg3UC7Pn7w/viewform"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading...
            </iframe>
          </div>
        </section>
      </Wrapper>
    </>
  )
}

export default Join
