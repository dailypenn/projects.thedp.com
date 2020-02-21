import React, { Component, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Header = () => (
  <header>
    <a href="https://www.thedp.com" target="_blank">
      <img src="https://snworksceo.imgix.net/dpn/d2453b29-fc87-458c-b226-ece3042946bb.sized-1000x1000.png" 
        alt="The Daily Pennsylvanian" width="250" className="logo">
      </img>
    </a>
  </header>
);

const Intro = () => (
  <section className="intro">
    <div className="intro-text">
      <h1>The Daily Pennsylvanian, Inc.</h1>
      <h3>Your campus compass. Join us and find your direction.</h3>
      <a href="#apply"><div className="join-button">Join Now</div></a>
    </div>
  </section>
)

const Editorial = () => {
  const [tab, setTab] = useState('news')
  const update = (props) => {
    document.getElementById(tab).classList.remove('active');
    document.getElementById(tab + '-text').classList.remove('active');
    document.getElementById(props.id).classList.add('active');
    document.getElementById(props.id + '-text').classList.add('active');
    setTab(props.id);

    switch (props.id) {
      case 'news':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/917417c6-2a39-487a-bd75-8913f3427445.sized-1000x1000.jpg')";
        break;
      case 'sports':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/01fd6964-dab3-4ec3-95e5-871ab1932e34.sized-1000x1000.jpg')";
        break;
      case 'opinion':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/63f97845-7cb5-49eb-8322-bca5667583bc.sized-1000x1000.jpg')";
        break;
      case 'design':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/90337c0f-5064-4457-917f-c728ffcf8e58.sized-1000x1000.jpg')";
        break;
      case 'photo':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/36723a03-7de6-446a-8289-34dbc15221e7.sized-1000x1000.jpg')";
        break;
      case 'multimedia':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://media.giphy.com/media/KHKlf5Cnvzm1HDkVrL/giphy.gif')";
        break;
      case 'social':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/4c31d16d-8363-41df-80a0-a5564b011215.sized-1000x1000.jpg')";
        break;
      case 'web':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/85611786-a619-4496-9c5c-59ece6432fa5.sized-1000x1000.jpg')";
        break;
      case 'podcasts':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/51d7e036-6b77-402a-9d6d-b1f7b8c3ab8c.sized-1000x1000.jpg')";
        break;
      case 'copy':
        document.querySelector('section.editorial').style.backgroundImage =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/9a678efe-73b0-4fed-9f63-2278da389db8.sized-1000x1000.jpg')";
        break;
      default:
        document.querySelector('section.editorial').style.backgroundColor = '#AA1E22';
    }
  }

  return (
    <section className="editorial">
      <h2>Editorial</h2>
      <div className="section">
        <p className="overall">
          The Daily Pennsylvanian editorial departments work together to find and tell the most important stories on campus.
          Whether it's diving deep into an investigative story or capturing snapshots of people at the frontlines of Penn's history, the DP editorial side never stops making a difference.
        </p>
        <div className="departments">
          <span onClick={() => update({id: 'news'})}>
            <h4 className="ed-tab active" id="news">News</h4>
          </span>
          <span onClick={() => update({id: 'sports'})}>
            <h4 className="ed-tab" id="sports">Sports</h4>
          </span>
          <span onClick={() => update({id: 'opinion'})}>
            <h4 className="ed-tab" id="opinion">Opinion</h4>
          </span>
          <span onClick={() => update({id: 'copy'})}>
            <h4 className="ed-tab" id="copy">Copy</h4>
          </span>
          <span onClick={() => update({id: 'design'})}>
            <h4 className="ed-tab" id="design">Design</h4>
          </span>
          <span onClick={() => update({id: 'multimedia'})}>
            <h4 className="ed-tab" id="multimedia">Multimedia</h4>
          </span>
          <span onClick={() => update({id: 'social'})}>
            <h4 className="ed-tab" id="social">Audience Engagement</h4>
          </span>
          <span onClick={() => update({id: 'web'})}>
            <h4 className="ed-tab" id="web">Web Dev</h4>
          </span>
          <span onClick={() => update({id: 'podcasts'})}>
            <h4 className="ed-tab" id="podcasts">Podcasts</h4>
          </span>
        </div>
        <div className="ed-text active" id="news-text">
          <p>
            By joining News, you will learn not only how to report and investigate stories relevant to Penn’s campus and students, but also the intricacies of student life and University operations. Reporters uncover news important to the Penn community by illuminating student stories and holding institutions accountable. Whether it’s breaking news or investigative journalism, your storytelling has the ability to enact real change on campus.
          </p>
          <p>
            The Real-Time Desk is also housed in the News department, and is for those who want to report on breaking news and write aggregated news posts with a lesser time commitment.
          </p>
          <p>
            Follow in the footsteps of DP News alumni who work for publications like The New York Times, Politico, Vox, and The Washington Post, to name a few. No journalistic experience required  — only curiosity and dedication.
          </p>
          <h5>Highlights</h5>
          <a href="https://www.thedp.com/article/2019/11/penn-carey-law-ruger-rename-backlash-student-alumni" target="_blank">'A complete nightmare': Penn Law students and alums reflect on name-change process →</a>
          <a href="https://www.thedp.com/article/2019/10/amy-wax-tenure-undergraduate-assembly-resolution" target="_blank">Undergraduate Assembly demands that Penn fire Amy Wax for violating University policy →</a>
          <a href="https://www.thedp.com/article/2019/10/stuart-weitzman-school-of-design-penn-wharton" target="_blank">'We were completely blindsided': PennDesign students frustrated by the school’s renaming →</a>
          <a href="https://www.thedp.com/article/2019/11/penn-board-of-trustees-meeting-fossil-free-protest" target="_blank">About 100 Fossil Free Penn members shut down Board of Trustees meeting →</a>
          <a href="https://www.thedp.com/article/2018/01/upenn-connection-slavery-research-slave-trade-trustees-philadelphia" target="_blank">Penn student researchers dig into the University's unaddressed ties to the slave trade →</a>
        </div>
        <div className="ed-text" id="sports-text">
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
          <a href="https://www.thedp.com/article/2019/11/penn-womens-basketball-senior-leaders-grasela-sterba" target="_blank">Freshman year they cried over cheese fries. Now seniors, Grasela and Sterba are captains →</a>
          <a href="https://www.thedp.com/article/2019/05/penn-mens-lacrosse-yale-ivy-league-tournament-championship" target="_blank">No. 3 Penn men's lacrosse outlasts No. 2 Yale to capture Ivy League Tournament title →</a>
          <a href="https://www.thedp.com/article/2019/09/penn-football-preview-nick-robinson-named-starting-quarterback-for-2019-season" target="_blank">Nick Robinson, after two years as backup, finally crowned Penn starting quarterback →</a>
          <a href="https://www.thedp.com/article/2019/04/penn-volleyball-iain-braddak-athletics-mistreatment-mental-health-upenn-coach" target="_blank">'No one is listening': Under new coach, players lose hope amid alleged mistreatment →</a>
          <a href="https://www.thedp.com/article/2019/04/penn-relays-track-125-history-owens-bannister-batdorf-haines" target="_blank">125 years strong: A look back at some of the biggest moments in Penn Relays history →</a>
        </div>
        <div className="ed-text" id="opinion-text">
          <p>You have the power to decide what the campus conversation ought to be.</p>
          <p>At The Daily Pennsylvanian, we are looking for creative, passionate, and hard-working writers to pen columns for Penn's independent student-led news organization. We are also looking for talented artists to create funny, insightful, and poignant cartoons.</p>
          <p>Your writing and reporting skills will improve tremendously, you will have the rare opportunity to reach thousands of people with every column you write, and you will learn to make this award-winning media organization your home. Opinion columns often garner the most page views and comments among all the sections of the DP. Being an opinion artist requires time and dedication, as well as the ability to make a point using few words.</p>
          <p>Stimulate change, hold organizations and people accountable, and make conversation: Join us.</p>
          <h5>Highlights</h5>
          <a href="https://www.thedp.com/article/2019/11/tokenism-racism-clubs-ivy-league-upenn-philadelphia" target="_blank">Surayya Walters | Stop ignoring tokenism at Penn →</a>
          <a href="https://www.thedp.com/article/2019/10/philadelphia-gentrification-penn-bubble-ivy-league-upenn-philadelphia" target="_blank">Alfredo Praticò | Our relationship with Philadelphia is broken. Here’s how we fix it →</a>
          <a href="https://www.thedp.com/article/2019/09/thrive-at-penn-mental-health-ivy-league-wharton-upenn-philadelphia" target="_blank">Julia Mitchell | ‘Thriving at Penn’ is more meme than reality →</a>
          <a href="https://www.thedp.com/article/2019/04/mental-health-ivy-league-ariana-grande-jordan-peele-kaliyah-dorsey-upenn-philadelphia" target="_blank">Kaliyah Dorsey | At Penn, fake smiles hurt more than they help →</a>
          <a href="https://www.thedp.com/article/2019/03/lgbtq-christianity-evangelical-church-homophobia-upenn-philadelphia" target="_blank">Ana West | Christians at Penn have a responsibility to stand by the LGBTQ community →</a>
        </div>
        <div className="ed-text" id="copy-text">
          <p>
            The Daily Pennsylvanian's Copy Department is now editing 34th Street, Under the Button, and DP Sports content! Join our super fun team in reviewing and fact-checking everything from breaking news to satirical videos. Come help us keep our content concise, consistent, and considerate.
          </p>
          <p>From the people who brought the DP the Oxford comma.</p>
          <h5>Highlights</h5>
          <a href="https://docs.google.com/document/pub?id=14HoU_sCiPxD8SOSH8HvWKsvz1Elv89yzcje-sZGGahs&amp;pli=1" target="_blank">The DP's Official Style Guide →</a>
        </div>
        <div className="ed-text" id="design-text">
          <p>
            The Design Department is looking for designers, artists, and illustrators with all ranges of experience to join us in producing The Daily Pennsylvanian and 34th Street Magazine’s print and online visual content.
          </p>
          <p>
            We use the full Adobe Creative Suite — mainly Photoshop, Illustrator, and InDesign — along with various online platforms for data visualization.
          </p>
          <p>
            If you are interested in creating aesthetic content, whether it be front-page print centerpieces, online graphics, or layouts for websites, then the Design department is for you!
          </p>
          <h5>Highlights</h5>
          <a href="https://www.thedp.com/article/2019/10/quad-single-sink-housing-room-penn" target="_blank">Here's why your freshman-year hallmate has a sink and you don't →</a>
          <a href="https://projects.thedp.com/2019/11/basketball-preview/" target="_blank">Basketball Preview 2019 →</a>
        </div>
        <div className="ed-text" id="multimedia-text">
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
          <a href="https://youtu.be/5oKNE8fQJik" target="_blank">Holi 2019: A Burst of Color →</a>
          <a href="https://www.thedp.com/article/2019/04/photo-gallery-penn-relays-125-upenn-harvard-olympians-usa-jamaica-yale" target="_blank">Photo Gallery | The 125th Running of the Penn Relays →</a>
          <a href="https://youtu.be/uE-f-vQvsck" target="_blank">Fighting for a sustainable future (part 1): Student climate activism →</a>
          <a href="https://www.thedp.com/article/2019/11/photo-essay-fossil-free-penn-board-of-trustees-meeting" target="_blank">Photo Essay | The Fossil Free Penn protest that shut down Board of Trustees meeting →</a>
          <a href="https://youtu.be/RAbz4ABWgJk" target="_blank">DP Multimedia Staffer vs Senior Captain Gymnast Caroline Moore →</a>
          <a href="https://www.thedp.com/article/2019/05/mens-lacrosse-season-review-ivy-league-champions-photo-essay" target="_blank">Photo Essay | Men's Lacrosse Historic 2019 Season →</a>
          <a href="https://youtu.be/f4xwUTB_REU" target="_blank">Hi Penn: News Flash →</a>
          <a href="https://www.thedp.com/article/2019/05/tour-best-outdoor-study-spots-penn-campus" target="_blank">Photo Essay | A tour of the 20 best outdoor study spots on campus →</a>
        </div>
        <div className="ed-text" id="social-text">
          <p>
            Joining Audience Enagement will put you on the frontline of The DP’s interaction with tens of thousands of readers and develop skills increasingly relevant in the world’s growing digital landscape.
          </p>
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
          <a href="https://www.facebook.com/dailypenn" target="_blank">The Daily Pennsylvanian Facebook →</a>
          <a href="https://twitter.com/dailypenn" target="_blank">The Daily Pennsylvanian Twitter →</a>
          <a href="https://twitter.com/dailypennsports" target="_blank">DP Sports Twitter →</a>
          <a href="https://www.instagram.com/dailypenn/" target="_blank">The Daily Pennsylvanian Instagram →</a>
        </div>
        <div className="ed-text" id="web-text">
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
          <a href="https://projects.thedp.com/" target="_blank">DP Projects, a full list of all project pages we've developed →</a>
          <a href="https://dailypenn.github.io/outquote/" target="_blank">Outquote, a JavaScript tool to make branded quote cards →</a>
          <a href="https://github.com/dailypenn/data" target="_blank">Explore the data, code, and methodology behind our data projects →</a>
          <a href="https://github.com/dailypenn" target="_blank">Check out all of our open source work on our GitHub →</a>
        </div>
        <div className="ed-text" id="podcasts-text">
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
          <a href="https://www.thedp.com/multimedia/63464" target="_blank">A Legacy of Privilege, Quite Frankly →</a>
          <a href="https://www.thedp.com/multimedia/62044" target="_blank">ivyQueens, Bottoms on Top →</a>
          <a href="https://www.thedp.com/multimedia/61202" target="_blank">Gay Christmas, Bottoms on Top →</a>
          <a href="https://www.thedp.com/multimedia/60649" target="_blank">Disoriented at Penn, 1600 Penn →</a>
        </div>
      </div>
    </section>
  )
}

const Business = () => {
  const [tab, setTab] = useState('marketing')
  const update = (props) => {
    document.getElementById(tab).classList.remove('active');
    document.getElementById(tab + '-text').classList.remove('active');
    document.getElementById(props.id).classList.add('active');
    document.getElementById(props.id + '-text').classList.add('active');
    setTab(props.id);

    switch (props.id) {
      case 'marketing':
        document.querySelector('section.business').style.backgroundImage =
          "linear-gradient(rgba(238, 238, 238, 0.9), rgba(238, 238, 238, 0.9)), url('https://snworksceo.imgix.net/dpn/5803b1e8-72a6-4810-9770-60123f4a066d.sized-1000x1000.jpg')";
        break;
      case 'consulting':
        document.querySelector('section.business').style.backgroundImage =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/7f265244-68c1-4483-b138-8fc49c343444.sized-1000x1000.jpg')";
        break;
      case 'analytics':
        document.querySelector('section.business').style.backgroundImage =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/68726eb4-7df0-4e26-9d83-3ad542d33846.sized-1000x1000.jpg')";
        break;
      case 'product-lab':
        document.querySelector('section.business').style.backgroundImage =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/af307706-8ed7-4389-bb37-283cdb2af2d0.sized-1000x1000.jpg')";
        break;
      case 'circulation':
        document.querySelector('section.business').style.backgroundImage =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/06837fc5-f166-414c-8785-9234e35205b0.sized-1000x1000.jpg')";
        break;
      default:
        document.querySelector('section.business').style.backgroundColor = '#EEE';
    }
  }

  return (
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
          <span onClick={() => update({id: 'marketing'})}>
            <h4 class="biz-tab active" id="marketing">Marketing</h4>
          </span>
          <span onClick={() => update({id: 'consulting'})}>
            <h4 class="biz-tab" id="consulting">Consulting</h4>
          </span>
          <span onClick={() => update({id: 'analytics'})}>
            <h4 class="biz-tab" id="analytics">Analytics</h4>
          </span>
          <span onClick={() => update({id: 'product-lab'})}> 
            <h4 class="biz-tab" id="product-lab">Product Lab</h4>
          </span>
          <span onClick={() => update({id: 'circulation'})}>
            <h4 class="biz-tab" id="circulation">Circulation</h4>
          </span>
        </div>
        <div class="biz-text active" id="marketing-text">
          <p>
            DP Marketing works on developing and enhancing the brand identity of The DP Inc., a $3 million dollar business. Our associates work to create social media campaigns, events and merchandise that showcase the content of the DP, 34th Street Magazine and Under the Button. Associates are also given the resources and opportunities to plan and execute their own marketing projects to promote any section of the publication.
          </p>
          <p>
            Marketing is the perfect place to develop both your creativity and your business skills because all our projects require a good mix of both. No prior experience is required, just a willingness to learn about branding, promotion and merchandising. We also have a very strong social culture as we host bi-weekly events and love to hang out with each other. Join us to gain some business experience and be a part of the best family at the DP! 
          </p>
          <h5>Highlights</h5>
          <a href="https://www.facebook.com/events/2205915566180909/" target="_blank">Battle of the Bands →</a>
          <a href="https://www.facebook.com/events/2137326212971575/" target="_blank">UTB Comedy Night →</a>
          <a href="https://www.facebook.com/events/440490923254900/" target="_blank">Puck Frinceton T-shirt Sale →</a>
        </div>
        <div class="biz-text" id="consulting-text">
          <p>
            Consulting Analysts source potential clients, develop strategic advertising campaigns and produce pitch materials for our Director of Sales and Marketing. By working with our outstanding analytics, marketing, and product lab teams DP Consultants will learn to use creative problem solving and analytical skills to help our clients successfully reach the Penn community.
          </p>
          <h5>Highlights</h5>
          <p>Fiscal year 2017 and 2018 Advertising Representatives have sold a combined total of over $190,000 from over 100+ local businesses.</p>
        </div>
        <div class="biz-text" id="analytics-text">
          <p>
            DP Analytics is the data science hub of the Daily Pennsylvanian. At Analytics, we seek to use data to help propel DP into the digital first age.
          </p>
          <p>
            In particular, this department taps into three main areas: Core Data Science(Machine Learning), Product Analytics(Data Manipulation and Analysis), and Data Infrastructure(Web development and data visualization). All these areas cohesively work together to improve the overall DP experience on and offline.
          </p>
          <p>
            Being an independent company, DP provides not only a chance to create something but also project opportunities that actually reaches a huge audience on a regular basis (~200k/month).
          </p>
          <h5>Highlights</h5>
          <p>ML Driven Content Based Recommendation Engine</p>
          <p>Advertisement Optimization Through Ad Network Redesign</p>
          <p>Geo-based Interactive Dashboard To Facilitate Circulation Path Diagnosis and Analy</p>
        </div>
        <div class="biz-text" id="product-lab-text">
          <p>
            The DP Product Lab Department creates marketing content and brands what The DP can provide to external clients. Also, as the company develops, we explore new fields and build new services. We hold responsibility for working on innovation products and coming up with revenue-generating initiatives.
          </p>
          <p>
            With a large amount of creative freedom, this is the place to make your idea a reality. Our weekly commitment is approximately 6 hours.
          </p>
          <h5>Highlights</h5>
          <a href="https://pennlets.com" target="_blank">Pennlets →</a>
          <a href="https://www.facebook.com/dailypenn/videos/vb.6356558804/10155858850708805/" target="_blank">Verb Energy Bars Sponsored Video →</a>
          <a href="https://www.thedp.com/article/2018/04/sponsored-woven-treasures-video" target="_blank">Meet Parvis and his micro-world at Woven Treasures →</a>
          <a href="https://www.thedp.com/article/2017/11/sponsored-gia-pronto-quiz" target="_blank">Which Gia Pronto Kitchen salad are you? →</a>
          <a href="https://www.thedp.com/article/2017/11/sponsored-dim-sum-house-article" target="_blank">Jane G’s Dim Sum House: fresh made-to-order dim sum →</a>
        </div>
        <div class="biz-text" id="circulation-text">
          <p>
            Circulation staffers are the DP's street team, and they are the ones you see handing out papers on Locust Walk and across campus every day.
          </p>
          <p>
            If you're friendly, dependable, and loud — and want to earn $10 an hour — this is the department for you.
            Join an incredible team with a great culture filled with good times and social activities.
          </p>
        </div>
      </div>
    </section>
  )
}

const Street = () => (
  <section className="street">
    <h2>34th Street Magazine</h2>
    <div className="section">
      <p>
        34th Street Magazine is your authority on Penn student life. We are a student magazine that empowers student voices, sheds light on student issues, and provides timely commentary on the arts and campus culture. We provide endless opportunities for a creative outlet: you can write cover stories, help envision marketing campaigns, design and lay out issues, attend press movie screenings, review top-rated restaurants, and even pitch your own content ideas.
      </p>
      <p>
        As the hub for Penn voices and narrative, Street staffers cover arts, culture, and feature content. We are looking for writers, photographers, videographers, artists, and social media whizzes to create, package, and promote Street to the Penn audience. Writers can work for our Features, Style, Arts, Film &amp; TV, Music, or Ego sections. Multimedia staffers work with either the Photo or Video departments. Illustrators and graphic designers create visuals, including our weekly print product, as part of the Design department. Audience Engagement associates manage our social media and our newsletter, The Toast.
      </p>
      <p>
        Street provides writers the opportunity to be creative in their pursuit of journalism, teaches Audience Engagement staff how to build and promote a brand online, and gives photographers, videographers, and Design associates experience in creating engaging editorial visuals. Join Street to be part of a tight–knit community and learn from some of the most interesting and dedicated people at Penn—we promise you won’t regret it.
      </p>
      <h5>Highlights</h5>
      <a href="https://www.34st.com/article/2019/11/hong-kong-protests-protestors-penn-ivy-league-extradition-bill-students-government-china-beijing-revolution-police-activists-politics" target="_blank">
        ‘Revolution of Our Times’: Penn Students from Hong Kong Reflect on the Protests →
      </a>
      <a href="https://www.34st.com/article/2019/11/climate-change-global-warming-college-upenn-fossil-free-penn" target="_blank">
        The 2019 Climate Change Issue →
      </a>
      <a href="https://www.34st.com/article/2019/12/best-movies-decade-2010s-moonlight-carol-mad-max-get-out-grand-budapest-hotel-inside-llewyn-davis-lady-bird" target="_blank">
        Street’s Favorite Movies of the Decade →
      </a>
      <a href="https://www.34st.com/article/2019/10/therapy-mental-health-emotions-feelings-anxiety-trauma" target="_blank">
        Why I’m Going Back to Therapy →
      </a>
      <a href="https://www.34st.com/article/2019/12/dizengoff-frozen-labneh-solomonov-zahav-philadelphia-food-foodie-restaurants-israeli-cuisine-middle-eastern-kfar-dizengoff-goldie-university-city" target="_blank">
        Dizengoff Just Opened on Campus—and Yes, We Tried the Frozen Labneh →
      </a>
    </div>
  </section>
)

const UTB = () => (
  <section className="utb">
    <h2>Under the Button</h2>
    <div className="section">
      <p>
        Under the Button is Penn’s go-to source for daily humor and satire.
      </p>
      <p>
        Our writing staff works around the clock to report on the stories that other media organizations wouldn’t dare touch due to editorial standards. Our video and media staff work to capture the real Penn experience through the lens of a camera we stole from the DP. 
      </p>
      <p>
        We are looking for talented writers, videographers, actors, graphic designers, coders, social media specialists, our dignity, ten gay rats, and your best brisket recipe. If you’re an all-around funny person looking for a way to subject the rest of campus to your sense of humor, we’re the publication for you.
      </p>
      <h5>Highlights</h5>
      <a href="https://www.underthebutton.com/article/2019/07/wax-trump-shame-penn" target="_blank">Wax and Trump in Heated Competition to Bring Most Shame to Penn →</a>
      <a href="https://www.underthebutton.com/article/2019/09/if-i-had-a-girlfriend-photo-essay" target="_blank">Photo Essay: These Are All the Places on Campus I Would Kiss My Girlfriend If I Had One →</a>
      <a href="https://www.underthebutton.com/article/2018/12/choose-your-own-adventure-jeff-writing-sem-intro" target="_blank">Choose Your Own Adventure: Will You Fuck Jeff From Writing Sem? →</a>
      <a href="https://youtu.be/Or5lGThQTJU" target="_blank"> Pool Party Man on the Street →</a>
    </div>
  </section>
)

const Join = () => (
  <section className="join" id="apply">
    <h2>Join The Daily Pennsylvanian, Inc.</h2>
    <div className="section form">
      <p className="overall">
        Fill out the form below to apply!
      </p>
      <iframe className="join-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfXatYm_DWJOMUTtFgs45uQar2g1ycqXuX-YeUGb5q0McueMg/viewform" width="100%" height="600" frameBorder="0" marginHeight="0" marginWidth="0">
        Loading...
      </iframe>
    </div>
  </section>
)

const IndexPage = () => (
  <>
    <Header/>
    <Intro/>
    <Editorial/>
    <Business/>
    <Street/>
    <UTB/>
    <Join/>
  </>
)

export default IndexPage
