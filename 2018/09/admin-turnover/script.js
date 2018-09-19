var vpulTransitions = [
  {
    position: "Executive Director of Counseling & Psychological Services",
    outgoing: "Bill Alexander",
    outReason: "Retirement"
  },
  {
    position: "Director of Penn Women's Center",
    incoming: "Jessica Mertz",
    outgoing: 'Felicity "Litty" Paxton',
    interim: true,
    outReason: "New Role",
    newRole: "Associate Dean for Undergraduate Studies at Annenberg",
  },
  {
    position: "Executive Director of Career Services",
    incoming: "Barbara Hewitt",
    outgoing: "Pat Rose",
    outReason: "Retirement"
  },
  {
    position: "Director of Office of Fraternity & Sorority Life",
    incoming: "Jazmyn Pulley",
    outgoing: "Eddie Banks-Crosson",
    outReason: "New Role",
    newRole: "Director of Wharton's MBA Office of Student Life"
  },
  {
    position: "Director of Student Intervention Services",
    incoming: "Lauren Rudick",
    outgoing: "Sharon Smith",
    outReason: "New Role",
    newRole: "Associate Vice Provost for University Life",
    interim: true
  },
  {
    position: "Associate Vice Provost for Student Affairs",
    incoming: "Sharon Smith",
    outgoing: "Hikaru Kozuma",
    outReason: "New Role",
    newRole: "Chief Student Affairs Officer at Amherst College",
    interim: true
  }
]

var vpulNewRoles = [
  {
    position: "Faculty Directors for Penn First Plus Office",
    people: [
      {
        name: "Camille Charles"
      },
      {
        name: "Robert Ghrist"
      }
    ],
  },
  {
    position: "Chief Wellness Officer",
    people: [
      {
        name: "Benoit Dubé"
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
    newRole: "Dean of Annenberg School of Communication"
  },
  {
    position: "Dean of Annenberg School of Communication",
    incoming: "John L. Jackson Jr.",
    outgoing: "Michael Delli Carpini",
  },
  {
    position: "Dean of School of Veterinary Medicine",
    incoming: "Andrew Hoffman",
    outgoing: "Joan Hendricks",
    outReason: "Stepped down August 2018"
  },
  {
    position: "Dean of  School of Dental Medicine",
    incoming: "Mark Wolff",
    outgoing: "Denis F. Kinane",
    outReason: "Stepped down January 2017"
  }
]

var other = [
  {
    position: "University Architect",
    incoming: "Mark Kocent",
    outgoing: "David Hollenberg"
  },
  {
    position: "Vice Provost & Director of the Penn Libraries",
    incoming: "Constantia Constantinou",
    outgoing: "Carton Rogers"
  }
]

var tmpImg = "https://snworksceo.imgix.net/dpn/f85b1afb-53ac-42ce-9a19-9a36306590c1.sized-1000x1000.png?h=400";

$(document).ready(function () {
//   // VPUL new roles
//   $(".container").append(`
//   <div class="vpul-new-roles">
//     <div class="divider">
//       <div class="title">VPUL New Roles</div>
//       <div class="hline"></div>
//     </div>
//   </div>
// `);
//   vpulNewRoles.forEach(function (item) {
//     $(".vpul-new-roles").append(`
//       <div class="position-row row">
//         <div class="col" id="${item.position}">${item.position}</div>
//       </div>
//     `)
//     item.people.forEach(function (person) {
//       console.log("#"+item.position);
//       $("[id='"+item.position+"']").after(`
//         <div class="col identifier">
//           <div class="outer-bubble">
//             <div class="inner-bubble">
//               <img src="${tmpImg}" class="bubble-image">
//             </div>
//           </div>
//           <p>${person.name}</p>
//         </div>
//       `)
//     })
//   })

  // // VPUL Transitions
  $(".container").append(`
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

  vpulTransitions.forEach(function (item) {
    $(".vpul-transitions").append(`
    <div class="position-row row">
      <div class="col">${item.position}</div>
      <div class="col identifier">
        <div class="outer-bubble">
          <div class="inner-bubble">
            <img src="${tmpImg}" class="bubble-image">
          </div>
        </div>
        <p>${item.outgoing}</p>
      </div>
      <div class="col identifier">
        <div class="outer-bubble">
          <div class="inner-bubble">
            <img src="${tmpImg}" class="bubble-image">
          </div>
        </div>
        <p>${item.incoming ? item.incoming : '?'}</p>
      </div>
    </div>
  `)
  })

  schoolDeanTransitions.forEach(function (item) {
    $(".school-dean-transitions").append(`
    <div class="position-row row">
      <div class="col">${item.position}</div>
      <div class="col identifier">
        <div class="outer-bubble">
          <div class="inner-bubble">
            <img src="${tmpImg}" class="bubble-image">
          </div>
        </div>
        <p>${item.outgoing}</p>
      </div>
      <div class="col identifier">
        <div class="outer-bubble">
          <div class="inner-bubble">
            <img src="${tmpImg}" class="bubble-image">
          </div>
        </div>
        <p>${item.incoming ? item.incoming : '?'}</p>
      </div>
    </div>
  `)
  })

  other.forEach(function (item) {
    $(".other").append(`
    <div class="position-row row">
      <div class="col">${item.position}</div>
      <div class="col identifier">
        <div class="outer-bubble">
          <div class="inner-bubble">
            <img src="${tmpImg}" class="bubble-image">
          </div>
        </div>
        <p>${item.outgoing}</p>
      </div>
      <div class="col identifier">
        <div class="outer-bubble">
          <div class="inner-bubble">
            <img src="${tmpImg}" class="bubble-image">
          </div>
        </div>
        <p>${item.incoming ? item.incoming : '?'}</p>
      </div>
    </div>
  `)
  })


})
