import React, { Component, useState } from "react"

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
    <section className="business">
      <h2>Business</h2>
      <div className="section">
        <p className="overall">
          The Daily Pennsylvanian is a $3-million, student-run media organization.
          Our incredible teams work together to market our products and sustain our business.
          Through the DP, students experience working for a real company, with real staffers, clients, and revenues.
          Join one of our teams to gain an invaluable, hands-on experience unlike any other.
        </p>
        <div className="departments">
          <span onClick={() => update({id: 'marketing'})}>
            <h4 className="biz-tab active" id="marketing">Marketing</h4>
          </span>
          <span onClick={() => update({id: 'consulting'})}>
            <h4 className="biz-tab" id="consulting">Consulting</h4>
          </span>
          <span onClick={() => update({id: 'analytics'})}>
            <h4 className="biz-tab" id="analytics">Analytics</h4>
          </span>
          <span onClick={() => update({id: 'product-lab'})}> 
            <h4 className="biz-tab" id="product-lab">Product Lab</h4>
          </span>
          <span onClick={() => update({id: 'circulation'})}>
            <h4 className="biz-tab" id="circulation">Circulation</h4>
          </span>
        </div>
        <div className="biz-text active" id="marketing-text">
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
        <div className="biz-text" id="consulting-text">
          <p>
            Consulting Analysts source potential clients, develop strategic advertising campaigns and produce pitch materials for our Director of Sales and Marketing. By working with our outstanding analytics, marketing, and product lab teams DP Consultants will learn to use creative problem solving and analytical skills to help our clients successfully reach the Penn community.
          </p>
          <h5>Highlights</h5>
          <p>Fiscal year 2017 and 2018 Advertising Representatives have sold a combined total of over $190,000 from over 100+ local businesses.</p>
        </div>
        <div className="biz-text" id="analytics-text">
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
        <div className="biz-text" id="product-lab-text">
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
        <div className="biz-text" id="circulation-text">
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

export default Business