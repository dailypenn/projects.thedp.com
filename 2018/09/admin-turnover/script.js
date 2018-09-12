vpulTransitions = [
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
    incImg: "https://snworksceo.imgix.net/dpn/f85b1afb-53ac-42ce-9a19-9a36306590c1.sized-1000x1000.png?h=400"
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
    newRole:"Chief Student Affairs Officer at Amherst College",
    interim: true
  }
]

vpulNewRoles = [
  {
    position: "Faculty Directors for Penn First Plus Office",
    people: ["Camille Charles", "Robert Ghrist"],
  },
  {
    position: "Chief Wellness Officer",
    people: ["Benoit Dubé"]
  }
]

schoolDeanTransitions = [
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

other = [
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

$(document).ready(function() {
  // VPUL new roles
  // vpulNewRoles.forEach(function(item) {
  //   $(".vpul-new-roles").append(`

  //   `
      
  //   )
  // })
  var item = vpulTransitions[1];
  $(".vpul-transitions").append(`
    <div class="position-row row">
      <div class="col">${item.position}</div>
        <div class="bubble">
          <img src="${item.incImg}" class="bubble-image">
        </div>
      <div class="col">${item.outgoing}</div>
      <div class="col">${item.incoming}</div>
    </div>
  `)
  
})
