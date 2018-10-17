var vpulTransitions = [
  {
    position: "Executive Director of Counseling & Psychological Services",
    outgoing: "Bill Alexander",
    outReason: "Retirement",
    outImg: "https://snworksceo.imgix.net/dpn/8c2488dd-635d-46de-9e7f-11f5d0ea267b.sized-1000x1000.png?h=400",
    outArt: "https://www.thedp.com/article/2018/03/guest-column-bill-alexander-caps-upenn-mental-health-philadelphia"
  },
  {
    position: "Director of Penn Women's Center",
    incoming: "Jessica Mertz",
    outgoing: 'Felicity "Litty" Paxton',
    interim: true,
    outReason: "New Role",
    newRole: "Associate Dean for Undergraduate Studies at Annenberg",
    incImg: "https://snworksceo.imgix.net/dpn/64423ea3-0e8b-42d9-9632-83975b716a0a.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/c9daff99-148b-4b76-b6ff-cb8e63873042.sized-1000x1000.png?h=400"
  },
  {
    position: "Executive Director of Career Services",
    incoming: "Barbara Hewitt",
    outgoing: "Pat Rose",
    outReason: "Retirement",
    incImg: "https://snworksceo.imgix.net/dpn/aa9b57cc-19ab-4ea9-806f-eb21d4bb4178.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/6e0213ba-8974-4688-971c-884df24188d4.sized-1000x1000.png?h=400"
  },
  {
    position: "Director of Office of Fraternity & Sorority Life",
    incoming: "Jazmyn Pulley",
    outgoing: "Eddie Banks-Crosson",
    outReason: "New Role",
    newRole: "Director of Wharton's MBA Office of Student Life",
    incImg: "https://snworksceo.imgix.net/dpn/c24e54de-44c9-4a15-b75a-56735f906a0d.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/34900ccb-59e0-4d2a-8bf6-078530fdb0bf.sized-1000x1000.png?h=400"
  },
  {
    position: "Director of Student Intervention Services",
    incoming: "Lauren Rudick",
    outgoing: "Sharon Smith",
    outReason: "New Role",
    newRole: "Associate Vice Provost for University Life",
    interim: true,
    outImg: "https://snworksceo.imgix.net/dpn/865a68ac-5506-4fb3-bf02-f28d7016c957.sized-1000x1000.png?h=400"
  },
  {
    position: "Associate Vice Provost for Student Affairs",
    incoming: "Sharon Smith",
    outgoing: "Hikaru Kozuma",
    outReason: "New Role",
    newRole: "Chief Student Affairs Officer at Amherst College",
    interim: true,
    incImg: "https://snworksceo.imgix.net/dpn/865a68ac-5506-4fb3-bf02-f28d7016c957.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/4103a528-aee6-442f-b58f-aa0da3725046.sized-1000x1000.png?h=400"
  }
]

var vpulNewRoles = [
  {
    position: "Faculty Directors for Penn First Plus Office",
    people: [
      {
        name: "Camille Charles",
        img: "https://snworksceo.imgix.net/dpn/46889e8d-d3b5-462e-a068-118ea5fa13d4.sized-1000x1000.png?h=400"
      },
      {
        name: "Robert Ghrist",
        img: "https://snworksceo.imgix.net/dpn/de28b291-856a-4308-8833-7bcb0c09d713.sized-1000x1000.png?h=400"
      }
    ],
  },
  {
    position: "Chief Wellness Officer",
    people: [
      {
        name: "Benoit Dubé",
        img: "https://snworksceo.imgix.net/dpn/1fe6b150-6147-4c3f-ada3-6cbb5b3a2de0.sized-1000x1000.png?h=400"
      }
    ]
  }
]

var schoolDeanTransitions = [
  {
    position: "Dean of School of Social Policy & Practice",
    incoming: 'Sara "Sally" Bachman',
    outgoing: "John L. Jackson Jr.",
    outReason: "New Role",
    newRole: "Dean of Annenberg School of Communication",
    incImg: "https://snworksceo.imgix.net/dpn/4a7f599b-2f3e-4d83-899f-f23802dbfb56.sized-1000x1000.png?h=400",
    outImg:"https://snworksceo.imgix.net/dpn/5922e1dd-178d-472c-a03d-366a7803957e.sized-1000x1000.png?h=400"
  },
  {
    position: "Dean of Annenberg School of Communication",
    incoming: "John L. Jackson Jr.",
    outgoing: "Michael Delli Carpini",
    incImg: "https://snworksceo.imgix.net/dpn/5922e1dd-178d-472c-a03d-366a7803957e.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/e75792af-f929-4352-8b7f-5b2e65f76c8b.sized-1000x1000.png?h=400"
  },
  {
    position: "Dean of School of Veterinary Medicine",
    incoming: "Andrew Hoffman",
    outgoing: "Joan Hendricks",
    outReason: "Stepped Down",
    incImg: "https://snworksceo.imgix.net/dpn/0b449ba6-c4f8-4aeb-95fa-8bfc8c7b6274.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/183bf3f1-c68d-445b-90b1-f2a9efe2dd4e.sized-1000x1000.png?h=400"
  },
  {
    position: "Dean of  School of Dental Medicine",
    incoming: "Mark Wolff",
    outgoing: "Denis F. Kinane",
    outReason: "Stepped Down",
    incImg: "https://snworksceo.imgix.net/dpn/3bb760ff-119f-4ce4-9960-007892637cdf.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/59775bed-0131-4ad2-96a2-491aab7b8149.sized-1000x1000.png?h=400"
  }
]

var other = [
  {
    position: "University Architect",
    incoming: "Mark Kocent",
    outgoing: "David Hollenberg",
    incImg: "https://snworksceo.imgix.net/dpn/5f702d26-ec43-4250-9ba4-5d3497e5ca0d.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/0262e25a-4cf5-434d-ae28-3c4cf9315fa7.sized-1000x1000.png?h=400"
  },
  {
    position: "Vice Provost & Director of the Penn Libraries",
    incoming: "Constantia Constantinou",
    outgoing: "Carton Rogers",
    incImg: "https://snworksceo.imgix.net/dpn/46d3044e-52f6-4e40-b475-0def122c50e6.sized-1000x1000.png?h=400",
    outImg: "https://snworksceo.imgix.net/dpn/1b337c70-d772-43ab-8ac5-6d1d372276ab.sized-1000x1000.png?h=400"
  }
]

var tmpImg = "https://s3.amazonaws.com/media.dpn/58163_personf.jpg";
var colorKeyClass = {
  "Retirement": "ret-color",
  "New Role": "new-role-color",
  "Stepped Down": "stepped-down-color",
  "New Position": "new-pos-color",
  interim: "interim-color"
}

$(document).ready(function () {

  function myFunction() {
    console.log("this " + this);
  }
 // VPUL Transitions
  $(".container").append(`
  <div class="vpul-new-pos">
      <div class="divider">
        <div class="title">VPUL New Positions</div>
        <div class="hline"></div>
      </div>
    </div>
    <div class="vpul-transitions">
      <div class="divider">
        <div class="title">VPUL Transitions</div>
        <div class="hline"></div>
      </div>
    </div>
    <div class="school-dean-transitions">
      <div class="divider">
        <div class="title">School Dean Transitions</div>
        <div class="hline"></div>
      </div>
    </div>
    <div class="other">
      <div class="divider">
        <div class="title">Other</div>
        <div class="hline"></div>
      </div>
    </div>
  `);

  // VPUL new roles
  vpulNewRoles.forEach(function (item) {
    $(".vpul-new-pos").append(`
      <div class="position-row row">
        <div class="col-sm">${item.position}</div>
        <div class="col-sm"></div>
        <div class="col-sm" id="${item.position}"></div>
      </div>
    `)
    item.people.forEach(function (person) {
      $("[id='"+item.position+"']").append(`
        <div class="identifier">
          <div class="outer-bubble ${colorKeyClass["New Position"]}">
            <div class="inner-bubble">
              <img src="${person.img}" class="bubble-image">
            </div>
          </div>
          <div class="name">
            <span>${person.name}</span>
            <span class="mobile-header">(Incoming)</span>
          </div>
        </div>
      `)
    })
  })

  vpulTransitions.forEach(function (item) {
    $(".vpul-transitions").append(`
    <div class="position-row row">
      <div class="col-sm">${item.position}</div>
      <div class="col-sm identifier">
        ${item.outArt ? `<a href="${item.outArt}" target="_blank">` : ''}
        <div class="outer-bubble ${item.outReason ? colorKeyClass[item.outReason] : ''}">
          <div class="inner-bubble">
            <img src="${item.outImg ? item.outImg : tmpImg}" class="bubble-image">
          </div>
        </div>
        ${item.outArt ? `</a>` : ''}
        ${item.outArt ? `<a href="${item.outArt}" target="_blank">` : ''}
        <div class="name">
          <span>${item.outgoing}</span>
          <span class="mobile-header">(Outgoing)</span>
        </div>
        ${item.outArt ? `</a>` : ''}
      </div>
      <div class="col-sm identifier">
        <div class="outer-bubble ${item.interim ? colorKeyClass["interim"] : ''}">
          <div class="inner-bubble">
            <img src="${item.incImg ? item.incImg : tmpImg}" class="bubble-image">
          </div>
        </div>
        <div class="name">
          <span>${item.incoming ? item.incoming : '?'}</span>
          ${item.incoming ? `<span class="mobile-header">(Incoming)</span>` : ''}
        </div>
      </div>
    </div>
  `)
  })

  schoolDeanTransitions.forEach(function (item) {
    $(".school-dean-transitions").append(`
    <div class="position-row row">
      <div class="col-sm">${item.position}</div>
      <div class="col-sm identifier">
        <div class="outer-bubble ${item.outReason ? colorKeyClass[item.outReason] : ''}">
          <div class="inner-bubble">
            <img src="${item.outImg ? item.outImg : tmpImg}" class="bubble-image">
          </div>
        </div>
        <div class="name">
          <span>${item.outgoing}</span>
          <span class="mobile-header">(Outgoing)</span>
        </div>
      </div>
      <div class="col-sm identifier">
        <div class="outer-bubble ${item.interim ? colorKeyClass["interim"] : ''}">
          <div class="inner-bubble">
            <img src="${item.incImg ? item.incImg : tmpImg}" class="bubble-image">
          </div>
        </div>
        <div class="name">
          <span>${item.incoming ? item.incoming : '?'}</span>
          ${item.incoming ? `<span class="mobile-header">(Incoming)</span>` : ''}
        </div>
      </div>
    </div>
  `)
  })

  other.forEach(function (item) {
    $(".other").append(`
    <div class="position-row row">
      <div class="col-sm">${item.position}</div>
      <div class="col-sm identifier">
        <div class="outer-bubble ${item.outReason ? colorKeyClass[item.outReason] : ''}">
          <div class="inner-bubble">
            <img src="${item.outImg ? item.outImg : tmpImg}" class="bubble-image">
          </div>
        </div>
        <div class="name">
          <span>${item.outgoing}</span>
          <span class="mobile-header">(Outgoing)</span>
        </div>
      </div>
      <div class="col-sm identifier">
        <div class="outer-bubble ${item.interim ? colorKeyClass["interim"] : ''}">
          <div class="inner-bubble">
            <img src="${item.incImg ? item.incImg : tmpImg}" class="bubble-image">
          </div>
        </div>
        <div class="name">
          <span>${item.incoming ? item.incoming : '?'}</span>
          ${item.incoming ? `<span class="mobile-header">(Incoming)</span>` : ''}
        </div>
      </div>
    </div>
  `)
  })

})
