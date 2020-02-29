import React, { useState } from "react"
import styled from 'styled-components'

const BgStyle = styled.div`
  background: ${props => props.bg};
  background-color: #AA1E22;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #FFF;
`;

const news = () => (
  <>
    <p>
      By joining News, you will learn not only how to report and investigate stories relevant to Penn’s campus and students, but also the intricacies of student life and University operations. Reporters uncover news important to the Penn community by illuminating student stories and holding institutions accountable. Whether it’s breaking news or investigative journalism, your storytelling has the ability to enact real change on campus.
    </p>
    <p>
      The Real-Time Desk is also housed in the News department, and is for those who want to report on breaking news and write aggregated news posts with a lesser time commitment.
    </p>
    <p>
      Follow in the footsteps of DP News alumni who work for publications like The New York Times, Politico, Vox, and The Washington Post, to name a few. No journalistic experience required  &mdash; only curiosity and dedication.
    </p>
    <h5>Highlights</h5>
    <a href="https://www.thedp.com/article/2019/11/penn-carey-law-ruger-rename-backlash-student-alumni" target="_blank" rel="noopener noreferrer">'A complete nightmare': Penn Law students and alums reflect on name-change process &#8594;</a>
    <a href="https://www.thedp.com/article/2019/10/amy-wax-tenure-undergraduate-assembly-resolution" target="_blank" rel="noopener noreferrer">Undergraduate Assembly demands that Penn fire Amy Wax for violating University policy &#8594;</a>
    <a href="https://www.thedp.com/article/2019/10/stuart-weitzman-school-of-design-penn-wharton" target="_blank" rel="noopener noreferrer">'We were completely blindsided': PennDesign students frustrated by the school’s renaming &#8594;</a>
    <a href="https://www.thedp.com/article/2019/11/penn-board-of-trustees-meeting-fossil-free-protest" target="_blank" rel="noopener noreferrer">About 100 Fossil Free Penn members shut down Board of Trustees meeting &#8594;</a>
    <a href="https://www.thedp.com/article/2018/01/upenn-connection-slavery-research-slave-trade-trustees-philadelphia" target="_blank" rel="noopener noreferrer">Penn student researchers dig into the University's unaddressed ties to the slave trade &#8594;</a>
  </>
)

const sports = () => (
  <>
    <p>
      Sports are about passion — the ability to risk it all, to become emotionally invested, to be a part of a team, and to test the limits of what you’re capable of. DP Sports provides the structure and guidance you need to explore that passion.
    </p>
    <p>
      Our department is a place where anyone can feel welcome and be a part of the family. We spend really valuable time with each and every person on our team to ensure that they can develop good storytelling and investigative skills. We’re a team, and we have an amazing time going on road trips, throwing watch parties, and getting immersed in the sports we cover and watch.
    </p>
    <p>
      So if you like watching, playing, reading, writing, talking, photographing, or learning about sports, DP Sports is totally the place for you. No experience necessary; absolutely anyone is welcome to join!
    </p>
    <h5>Highlights</h5>
    <a href="https://www.thedp.com/article/2019/11/penn-womens-basketball-senior-leaders-grasela-sterba" target="_blank" rel="noopener noreferrer">Freshman year they cried over cheese fries. Now seniors, Grasela and Sterba are captains &#8594;</a>
    <a href="https://www.thedp.com/article/2019/05/penn-mens-lacrosse-yale-ivy-league-tournament-championship" target="_blank" rel="noopener noreferrer">No. 3 Penn men's lacrosse outlasts No. 2 Yale to capture Ivy League Tournament title &#8594;</a>
    <a href="https://www.thedp.com/article/2019/09/penn-football-preview-nick-robinson-named-starting-quarterback-for-2019-season" target="_blank" rel="noopener noreferrer">Nick Robinson, after two years as backup, finally crowned Penn starting quarterback &#8594;</a>
    <a href="https://www.thedp.com/article/2019/04/penn-volleyball-iain-braddak-athletics-mistreatment-mental-health-upenn-coach" target="_blank" rel="noopener noreferrer">'No one is listening': Under new coach, players lose hope amid alleged mistreatment &#8594;</a>
    <a href="https://www.thedp.com/article/2019/04/penn-relays-track-125-history-owens-bannister-batdorf-haines" target="_blank" rel="noopener noreferrer">125 years strong: A look back at some of the biggest moments in Penn Relays history &#8594;</a>
  </>
)

const opinion = () => (
  <>
    <p>You have the power to decide what the campus conversation ought to be.</p>
    <p>At The Daily Pennsylvanian, we are looking for creative, passionate, and hard-working writers to pen columns for Penn's independent student-led news organization. We are also looking for talented artists to create funny, insightful, and poignant cartoons.</p>
    <p>Your writing and reporting skills will improve tremendously, you will have the rare opportunity to reach thousands of people with every column you write, and you will learn to make this award-winning media organization your home. Opinion columns often garner the most page views and comments among all the sections of the DP. Being an opinion artist requires time and dedication, as well as the ability to make a point using few words.</p>
    <p>Stimulate change, hold organizations and people accountable, and make conversation: Join us.</p>
    <h5>Highlights</h5>
    <a href="https://www.thedp.com/article/2019/11/tokenism-racism-clubs-ivy-league-upenn-philadelphia" target="_blank" rel="noopener noreferrer">Surayya Walters | Stop ignoring tokenism at Penn &#8594;</a>
    <a href="https://www.thedp.com/article/2019/10/philadelphia-gentrification-penn-bubble-ivy-league-upenn-philadelphia" target="_blank" rel="noopener noreferrer">Alfredo Praticò | Our relationship with Philadelphia is broken. Here’s how we fix it &#8594;</a>
    <a href="https://www.thedp.com/article/2019/09/thrive-at-penn-mental-health-ivy-league-wharton-upenn-philadelphia" target="_blank" rel="noopener noreferrer">Julia Mitchell | ‘Thriving at Penn’ is more meme than reality &#8594;</a>
    <a href="https://www.thedp.com/article/2019/04/mental-health-ivy-league-ariana-grande-jordan-peele-kaliyah-dorsey-upenn-philadelphia" target="_blank" rel="noopener noreferrer">Kaliyah Dorsey | At Penn, fake smiles hurt more than they help &#8594;</a>
    <a href="https://www.thedp.com/article/2019/03/lgbtq-christianity-evangelical-church-homophobia-upenn-philadelphia" target="_blank" rel="noopener noreferrer">Ana West | Christians at Penn have a responsibility to stand by the LGBTQ community &#8594;</a>
  </>
)

const copy = () => (
  <>
    <p>
      The Daily Pennsylvanian's Copy Department is now editing 34th Street, Under the Button, and DP Sports content! Join our super fun team in reviewing and fact-checking everything from breaking news to satirical videos. Come help us keep our content concise, consistent, and considerate.
          </p>
    <p>From the people who brought the DP the Oxford comma.</p>
    <h5>Highlights</h5>
    <a href="https://docs.google.com/document/pub?id=14HoU_sCiPxD8SOSH8HvWKsvz1Elv89yzcje-sZGGahs&pli=1" target="_blank" rel="noopener noreferrer">The DP's Official Style Guide &#8594;</a>

  </>
)

const design = () => (
  <>
    <p>
      The Design Department is looking for designers, artists, and illustrators with all ranges of experience to join us in producing The Daily Pennsylvanian and 34th Street Magazine’s print and online visual content.
          </p>
    <p>
      We use the full Adobe Creative Suite &mdash; mainly Photoshop, Illustrator, and InDesign &mdash; along with various online platforms for data visualization.
          </p>
    <p>
      If you are interested in creating aesthetic content, whether it be front-page print centerpieces, online graphics, or layouts for websites, then the Design department is for you!
          </p>
    <h5>Highlights</h5>
    <a href="https://www.thedp.com/article/2019/10/quad-single-sink-housing-room-penn" target="_blank" rel="noopener noreferrer">Here's why your freshman-year hallmate has a sink and you don't &#8594;</a>
    <a href="https://projects.thedp.com/2019/11/basketball-preview/" target="_blank" rel="noopener noreferrer">Basketball Preview 2019 &#8594;</a>

  </>
)

const multimedia = () => (
  <>
    <p>
      The Multimedia Department is looking for people with a love for photography and videography to join us in creating modern content for The Daily Pennsylvanian.
          </p>
    <p>
      We use the Adobe Suite as well as the latest DSLR cameras, lenses, and audio and video equipment to cover major events on campus and across the country. Our staff has covered famous figures including the likes of Joe Biden and Usain Bolt, stood front row at Made in America, and traveled for special events including presidential campaign rallies and NCAA tournaments.
          </p>
    <p>
      As a member of the multimedia department, you will have many opportunities to learn and improve your photography and videography skills. You will also have the ability to take part in the editing and post-production process, having an impact on our content from creation to publishing. A time commitment of 1-2 hours per week is expected.
          </p>
    <p>
      No experience or personal equipment is required, but is always appreciated. Join us in making transformative content for an award-winning media company!
          </p>
    <h5>Highlights</h5>
    <a href="https://youtu.be/5oKNE8fQJik" target="_blank" rel="noopener noreferrer">Holi 2019: A Burst of Color &#8594;</a>
    <a href="https://www.thedp.com/article/2019/04/photo-gallery-penn-relays-125-upenn-harvard-olympians-usa-jamaica-yale" target="_blank" rel="noopener noreferrer">Photo Gallery | The 125th Running of the Penn Relays &#8594;</a>
    <a href="https://youtu.be/uE-f-vQvsck" target="_blank" rel="noopener noreferrer">Fighting for a sustainable future (part 1): Student climate activism &#8594;</a>
    <a href="https://www.thedp.com/article/2019/11/photo-essay-fossil-free-penn-board-of-trustees-meeting" target="_blank" rel="noopener noreferrer">Photo Essay | The Fossil Free Penn protest that shut down Board of Trustees meeting &#8594;</a>
    <a href="https://youtu.be/RAbz4ABWgJk" target="_blank" rel="noopener noreferrer">DP Multimedia Staffer vs Senior Captain Gymnast Caroline Moore &#8594;</a>
    <a href="https://www.thedp.com/article/2019/05/mens-lacrosse-season-review-ivy-league-champions-photo-essay" target="_blank" rel="noopener noreferrer">Photo Essay | Men's Lacrosse Historic 2019 Season &#8594;</a>
    <a href="https://youtu.be/f4xwUTB_REU" target="_blank" rel="noopener noreferrer">Hi Penn: News Flash &#8594;</a>
    <a href="https://www.thedp.com/article/2019/05/tour-best-outdoor-study-spots-penn-campus" target="_blank" rel="noopener noreferrer">Photo Essay | A tour of the 20 best outdoor study spots on campus &#8594;</a>
  </>
)

const social = () => (
  <>
    <p>
      Joining Audience Enagement will put you on the frontline of The DP’s interaction with tens of thousands of readers and develop skills increasingly relevant in the world’s growing digital landscape. </p>
    <p>
      As a rapidly growing department, we are looking for people excited to curate, manage and grow the DP’s social media presence and interaction through Facebook, Twitter and (especially!) Instagram. We are also seeking writers interested in writing and editing our daily newsletter.
          </p>
    <p>
      AE is the right department for anyone looking to work with other departments across the DP on exciting projects such as promotion strategies for special issues and events online.
          </p>
    <p>
      No prior experience required, only a fire emoji game and willingness to be part of our close knit family.
          </p>
    <h5>Highlights</h5>
    <a href="https://www.facebook.com/dailypenn" target="_blank" rel="noopener noreferrer">The Daily Pennsylvanian Facebook &#8594;</a>
    <a href="https://twitter.com/dailypenn" target="_blank" rel="noopener noreferrer">The Daily Pennsylvanian Twitter &#8594;</a>
    <a href="https://twitter.com/dailypennsports" target="_blank" rel="noopener noreferrer">DP Sports Twitter &#8594;</a>
    <a href="https://www.instagram.com/dailypenn/" target="_blank" rel="noopener noreferrer">The Daily Pennsylvanian Instagram &#8594;</a>
  </>
)

const web = () => (
  <>
    <p>
      Web developers at the DP have the opportunity to work on a number of diverse and complex projects.
      The DP runs multiple full-stack apps, regularly creates standalone pages for special issues or interactive projects, and builds internal tools for both the editorial and business sides.
</p>
    <p>
      As a web developer, you'll get experience working with GitHub, as well as a wide array of programming languages.
      We maintain apps built with Ruby on Rails, use HTML, CSS, and JavaScript for our project pages, and regularly build tools with JavaScript, Python, and Ruby.
</p>
    <p>
      Developers at all skill levels are encouraged to join!
</p>
    <h5>Highlights</h5>
    <a href="https://projects.thedp.com/" target="_blank" rel="noopener noreferrer">DP Projects, a full list of all project pages we've developed &#8594;</a>
    <a href="https://dailypenn.github.io/outquote/" target="_blank" rel="noopener noreferrer">Outquote, a JavaScript tool to make branded quote cards &#8594;</a>
    <a href="https://github.com/dailypenn/data" target="_blank" rel="noopener noreferrer">Explore the data, code, and methodology behind our data projects &#8594;</a>
    <a href="https://github.com/dailypenn" target="_blank" rel="noopener noreferrer">Check out all of our open source work on our GitHub &#8594;</a>
  </>
)

const podcasts = () => (
  <>
    <p>
      Calling all podcast enthusiasts! DP Podcasts is looking for new hosts, writers, and editors.
      Join this burgeoning department as we attempt to expand the breadth and depth of our current podcast offerings.
      We are looking for storytellers and commentators from diverse backgrounds.
          </p>
    <p>
      Are you weirdly passionate about something on campus? Do you have interesting opinions?
      If you join our department, we can turn that into a podcast!
          </p>
    <h5>Highlights</h5>
    <a href="https://www.thedp.com/multimedia/63464" target="_blank" rel="noopener noreferrer">A Legacy of Privilege, Quite Frankly &#8594;</a>
    <a href="https://www.thedp.com/multimedia/62044" target="_blank" rel="noopener noreferrer">ivyQueens, Bottoms on Top &#8594;</a>
    <a href="https://www.thedp.com/multimedia/61202" target="_blank" rel="noopener noreferrer">Gay Christmas, Bottoms on Top &#8594;</a>
    <a href="https://www.thedp.com/multimedia/60649" target="_blank" rel="noopener noreferrer">Disoriented at Penn, 1600 Penn &#8594;</a>
  </>
)

const Editorial = () => {
  const [tab, setTab] = useState(news)

  const newsBG = "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/917417c6-2a39-487a-bd75-8913f3427445.sized-1000x1000.jpg')"
  const sportsBG = "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/01fd6964-dab3-4ec3-95e5-871ab1932e34.sized-1000x1000.jpg')";
  const opinionBG = "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/63f97845-7cb5-49eb-8322-bca5667583bc.sized-1000x1000.jpg')";
  const designBG = "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/90337c0f-5064-4457-917f-c728ffcf8e58.sized-1000x1000.jpg')";
  const multimediaBG = "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://media.giphy.com/media/KHKlf5Cnvzm1HDkVrL/giphy.gif')";
  const socialBG = "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/4c31d16d-8363-41df-80a0-a5564b011215.sized-1000x1000.jpg')";
  const webBG = "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/85611786-a619-4496-9c5c-59ece6432fa5.sized-1000x1000.jpg')";
  const podcastsBG = "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/51d7e036-6b77-402a-9d6d-b1f7b8c3ab8c.sized-1000x1000.jpg')";
  const copyBG = "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/9a678efe-73b0-4fed-9f63-2278da389db8.sized-1000x1000.jpg')";

  const [background, setBackground] = useState(newsBG)
  const [active, setActive] = useState('news')

  const changeTab = (tabName) => {
    switch (tabName) {
      case 'news':
        setTab(news)
        setActive('news')
        setBackground(newsBG)
        break;
      case 'sports':
        setTab(sports)
        setActive('sports')
        setBackground(sportsBG)
        break;
      case 'opinion':
        setTab(opinion)
        setActive('opinion')
        setBackground(opinionBG)
        break;
      case 'design':
        setTab(design)
        setActive('design')
        setBackground(designBG)
        break;
      case 'multimedia':
        setTab(multimedia)
        setActive('multimedia')
        setBackground(multimediaBG)
        break;
      case 'social':
        setTab(social)
        setActive('social')
        setBackground(socialBG)
        break;
      case 'web':
        setTab(web)
        setActive('web')
        setBackground(webBG)
        break;
      case 'podcasts':
        setTab(podcasts)
        setActive('podcasts')
        setBackground(podcastsBG)
        break;
      case 'copy':
        setTab(copy)
        setActive('copy')
        setBackground(copyBG)
        break;
      default:
    }
  }

  return (
    <BgStyle bg = {background}>
    <section className="editorial">
      <h2>Editorial</h2>
      <div className="section">
        <p className="overall">
          The Daily Pennsylvanian editorial departments work together to find and tell the most important stories on campus.
          Whether it's diving deep into an investigative story or capturing snapshots of people at the frontlines of Penn's history, the DP editorial side never stops making a difference.
          </p>
        <div className="departments">
          <span><h4 className={active === "news" ? "ed-tab active" : "ed-tab"} id="news" onClick={() => changeTab('news')}>News</h4></span>
          <span><h4 className={active === "sports" ? "ed-tab active" : "ed-tab"} id="sports" onClick={() => changeTab('sports')}>Sports</h4></span>
          <span><h4 className={active === "opinion" ? "ed-tab active" : "ed-tab"} id="opinion" onClick={() => changeTab('opinion')}>Opinion</h4></span>
          <span><h4 className={active === "copy" ? "ed-tab active" : "ed-tab"} id="copy" onClick={() => changeTab('copy')}>Copy</h4></span>
          <span><h4 className={active === "design" ? "ed-tab active" : "ed-tab"} id="design" onClick={() => changeTab('design')}>Design</h4></span>
          <span><h4 className={active === "multimedia" ? "ed-tab active" : "ed-tab"} id="multimedia" onClick={() => changeTab('multimedia')}>Multimedia</h4></span>
          <span><h4 className={active === "social" ? "ed-tab active" : "ed-tab"} id="social" onClick={() => changeTab('social')}>Audience Engagement</h4></span>
          <span><h4 className={active === "web" ? "ed-tab active" : "ed-tab"} id="web" onClick={() => changeTab('web')}>Web Dev</h4></span>
          <span><h4 className={active === "podcasts" ? "ed-tab active" : "ed-tab"} id="podcasts" onClick={() => changeTab('podcasts')}>Podcasts</h4></span>
        </div>
        {tab}
      </div>
    </section>
    </BgStyle>
  )
}

export default Editorial