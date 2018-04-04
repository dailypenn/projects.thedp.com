var paCandidates = [
  {
    name: "Matt Cartwright",
    district: "8th",
    party: "Democrat",
    incumbent: "2013",
    school: "Law 1986 (JD)",
  },
  {
    name: "Conor Lamb",
    district: "18th",
    party: "Democrat",
    incumbent: "2018",
    school: "College 2006 (BA), Law 2009 (JD)",
  },
  {
    name: "Mary Jo Daley",
    district: "4th",
    party: "Democrat",
    school: "Wharton 1987 (BBA), SAS 2001 (Master of Government Administration)"
  },
  {
    name: "Dan David",
    district: "4th",
    party: "Republican",
    school: "Wharton (???)",
  },
  {
    name: "Molly Sheehan",
    district: "5th",
    party: "Democrat",
    school: "Medicine 2014 (PhD)",
  },
  {
    name: "Mary Ellen Balchunis",
    district: "5th",
    party: "Democrat",
    school: "College 1979 (BA)",
  },
  {
    name: "George Badey",
    district: "5th",
    party: "Democrat",
    school: "College 1979 (BA)",
  },
  {
    name: "Pearl Kim",
    district: "5th",
    party: "Republican",
    school: "College 2000 (BA)",
  },
  {
    name: "Clare Pozos",
    district: "5th",
    party: "Republican",
    school: "Law 2007 (JD)",
  },
  {
    name: "Gary Wegman",
    district: "9th",
    party: "Democrat",
    school: "Dental 1983 (DMD)",
  },
]

var otherCandidates = [
  {
    name: "Josh Gottheimer",
    state: "N.J.",
    office: "House",
    district: "5th",
    party: "Democrat",
    incumbent: "2017",
    school: "College 1997 (BA)",
  },
  {
    name: "Trey Hollingsworth",
    state: "Ind.",
    office: "House",
    district: "9th",
    party: "Republican",
    incumbent: "2017",
    school: "Wharton 2004 (BS)",
  },
  {
    name: "David Scott",
    state: "Ga.",
    office: "House",
    district: "13th",
    party: "Democrat",
    incumbent: "2003",
    school: "Wharton 1969 (MBA)",
  },
  {
    name: "Reuben D'Silva",
    state: "Nev.",
    office: "House",
    district: "1st",
    party: "Democrat",
    school: "LPS 2011 (Master of Liberal Arts)",
  },
  {
    name: "David Trone",
    state: "Md.",
    office: "House",
    district: "6th",
    party: "Democrat",
    school: "Wharton 1985 (MBA)",
  },
  {
    name: "John Kingston",
    state: "Mass.",
    office: "Senate",
    district: "5th",
    party: "Republican",
    school: "College, Wharton 1988 (BA, BS)",
  },
  {
    name: "John McCann",
    state: "N.J.",
    office: "House",
    district: "5th",
    party: "Republican",
    school: "SAS 1995 (Master of Government Administration)",
  },
  {
    name: "Ricardo Franco",
    state: "Calif.",
    office: "House",
    district: "22nd",
    party: "Democrat",
    school: "Wharton 2006 (BS)",
  },
  {
    name: "Forest Baker",
    state: "Calif.",
    office: "House",
    district: "43rd",
    party: "Republican",
    school: "Wharton 1975 (MBA)",
  },
  {
    name: "David Min",
    state: "Calif.",
    office: "Senate",
    district: "45th",
    party: "Democrat",
    school: "College, Wharton, 1999 (BA, BS)",
  },
  {
    name: "Eric Eliason",
    state: "Utah",
    office: "House",
    district: "1st",
    party: "United Utah Party",
    school: "Wharton 2001 (MBA)",
  },
  {
    name: "Don Elijah Eckhart",
    state: "Ohio",
    office: "Senate",
    district: "?",
    party: "Republican",
    school: "Wharton 1974 (MPA)",
  },
  {
    name: "Chris DePizzo",
    state: "Ohio",
    office: "House",
    district: "13th",
    party: "Republican",
    school: "Law 2012 (JD)",
  },
]

// shuffles arrays
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// reset PA div
function resetPa() {
  $("#pa-div").empty();
  $("#pa-div").append(`
    <div id="all-candidates">
    </div>
  `)
}


$(document).ready(function() {
  // empties out div to repopulate
  resetPa();

  // shuffles arrays so candidates are displayed in random order
  var shuffledPa = shuffle(paCandidates);
  var shuffledOther = shuffle(otherCandidates);

  // fills div with candidate info
  shuffledPa.forEach(function(cand, index) {
    if (index === 0) {
      // featured profile
      $("#pa-div").append(`
        <div class="curr-profile">
          <div class="featured-bubble">
            <img src="" class="featured-img">
          </div>
          <div class="cand-info">
            <div class="basic-info">
              <p class="feat-name">${cand.name}</p>
              <p>${cand.school}</p>
            </div>
            <div class="office-state-info">
              <p class="feat-office">U.S. House, ${cand.district} district</p>
            </div>
          </div>
        </div>
      `)
    } else {
      // append the smaller images bubbles
      // $("#all-candidates").append(`
      //
      // `)
    }
  })

})
