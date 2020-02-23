import React, { Component, useState } from "react"

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

export default Editorial
