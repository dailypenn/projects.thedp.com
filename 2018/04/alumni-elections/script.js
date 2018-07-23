var paCandidates = [
  {
    name: "Matt Cartwright",
    district: "8th",
    party: "Democrat",
    incumbent: "2013",
    school: "Law 1986 (JD)",
    img: "https://snworksceo.imgix.net/dpn/0525ddc4-7856-4cae-ad60-4938f9e6e73b.sized-1000x1000.png?h=400"
  },
  {
    name: "Conor Lamb",
    district: "18th",
    party: "Democrat",
    incumbent: "2018",
    school: "College 2006 (BA), Law 2009 (JD)",
    img: "https://snworksceo.imgix.net/dpn/475f2eb2-1149-4874-bcad-fe386723eb19.sized-1000x1000.png?h=400"
  },
  {
    name: "Molly Sheehan",
    district: "5th",
    party: "Democrat",
    school: "Medicine 2014 (PhD)",
    img: "https://snworksceo.imgix.net/dpn/f85b1afb-53ac-42ce-9a19-9a36306590c1.sized-1000x1000.png?h=400"
  },
  {
    name: "Mary Ellen Balchunis",
    district: "5th",
    party: "Democrat",
    school: "College 1979 (BA)",
    img: "https://snworksceo.imgix.net/dpn/4c02f9b4-2f70-46be-a548-7d2dc7c98028.sized-1000x1000.png?h=400"
  },
  {
    name: "Pearl Kim",
    district: "5th",
    party: "Republican",
    school: "College 2000 (BA)",
    img: "https://snworksceo.imgix.net/dpn/30216461-155c-4032-be81-c21b95c007b7.sized-1000x1000.png?h=400"
  },
  {
    name: "Clare Pozos",
    district: "5th",
    party: "Republican",
    school: "Law 2007 (JD)",
    img: "https://snworksceo.imgix.net/dpn/d5f897d0-4463-4aeb-8912-654daec02972.sized-1000x1000.png?h=400"
  },
  {
    name: "Gary Wegman",
    district: "9th",
    party: "Democrat",
    school: "Dental 1983 (DMD)",
    img: "https://snworksceo.imgix.net/dpn/abb6a0bd-0b18-40ce-a157-621692994967.sized-1000x1000.png?h=400"
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
    img: "https://snworksceo.imgix.net/dpn/31528669-e6e6-4f61-b783-562e0211e722.sized-1000x1000.png?h=400"
  },
  {
    name: "Trey Hollingsworth",
    state: "Ind.",
    office: "House",
    district: "9th",
    party: "Republican",
    incumbent: "2017",
    school: "Wharton 2004 (BS)",
    img: "https://snworksceo.imgix.net/dpn/75dba528-cc7c-4829-8b67-efb9fb68f405.sized-1000x1000.png?h=400"
  },
  {
    name: "David Scott",
    state: "Ga.",
    office: "House",
    district: "13th",
    party: "Democrat",
    incumbent: "2003",
    school: "Wharton 1969 (MBA)",
    img: "https://snworksceo.imgix.net/dpn/72303cd7-3146-42b0-a16d-61e43353a2b9.sized-1000x1000.png?h=400"
  },
  {
    name: "Reuben D'Silva",
    state: "Nev.",
    office: "House",
    district: "1st",
    party: "Democrat",
    school: "LPS 2011 (Master of Liberal Arts)",
    img: "https://snworksceo.imgix.net/dpn/fc8686c3-87bd-4a2d-a805-7ce149ff003f.sized-1000x1000.png?h=400"
  },
  {
    name: "David Trone",
    state: "Md.",
    office: "House",
    district: "6th",
    party: "Democrat",
    school: "Wharton 1985 (MBA)",
    img: "https://snworksceo.imgix.net/dpn/15744f2f-8042-4b7d-8baa-98a4657632a8.sized-1000x1000.png?h=400"
  },
  {
    name: "John Kingston",
    state: "Mass.",
    office: "Senate",
    party: "Republican",
    school: "College, Wharton, 1988 (BA, BS)",
    img: "https://snworksceo.imgix.net/dpn/7063d327-45df-4301-ae38-b9c95672e870.sized-1000x1000.png?h=400"
  },
  {
    name: "John McCann",
    state: "N.J.",
    office: "House",
    district: "5th",
    party: "Republican",
    school: "SAS 1995 (Master of Government Administration)",
    img: "https://snworksceo.imgix.net/dpn/ac0dfc08-b121-4f15-9f3e-fa0747816953.sized-1000x1000.png?h=400"
  },
  {
    name: "Ricardo Franco",
    state: "Calif.",
    office: "House",
    district: "22nd",
    party: "Democrat",
    school: "Wharton 2006 (BS)",
    img: "https://snworksceo.imgix.net/dpn/07a707d8-7afc-4f0c-8ba7-0a843270566c.sized-1000x1000.png?h=400"
  },
  {
    name: "David Min",
    state: "Calif.",
    office: "House",
    district: "45th",
    party: "Democrat",
    school: "College, Wharton, 1999 (BA, BS)",
    img: "https://snworksceo.imgix.net/dpn/082320ef-3727-41bb-8465-073ec475ba06.sized-1000x1000.png?h=400"
  },
  {
    name: "Eric Eliason",
    state: "Utah",
    office: "House",
    district: "1st",
    party: "United Utah Party",
    school: "Wharton 2001 (MBA)",
    img: "https://snworksceo.imgix.net/dpn/da8bef67-710e-4e6a-8322-b95a1ec07951.sized-1000x1000.png?h=400"
  },
  {
    name: "Don Elijah Eckhart",
    state: "Ohio",
    office: "Senate",
    party: "Republican",
    school: "Wharton 1974 (MPA)",
    img: "https://snworksceo.imgix.net/dpn/3c6461e8-a57e-4d25-b778-d3c18eaf8956.sized-1000x1000.png?h=400"
  },
  {
    name: "Chris DePizzo",
    state: "Ohio",
    office: "House",
    district: "13th",
    party: "Republican",
    school: "Law 2012 (JD)",
    img: "https://snworksceo.imgix.net/dpn/ca7f5adf-2817-40d8-833f-4d050c701d19.sized-1000x1000.png?h=400"
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

// initializes slick carousel
function slickItems() {
  // slick PA featured slide
  $('#pa-curr-profile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#pa-all-candidates'
  });

  // PA carousel
  $("#pa-all-candidates").slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    asNavFor: '#pa-curr-profile',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      }
    ]
  });

  // slick other candidate featured slide
  $('#curr-profile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#all-candidates'
  });

  // carousel
  $("#all-candidates").slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    asNavFor: '#curr-profile',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      }
    ]
  });
}

$(document).ready(function() {
  // shuffles arrays so candidates are displayed in random order
  var shuffledPa = shuffle(paCandidates);
  var shuffledOther = shuffle(otherCandidates);

  // fills div with candidate info
  // PA section
  shuffledPa.forEach(function(cand, index) {
    $("#pa-curr-profile").append(`
      <div class="featured-slide">
          <div class="featured-bubble ${(cand.party === "Republican" ? "republican" : (cand.party === "Democrat" ? "democrat" : "uup"))}">
            <img src="${cand.img}" class="featured-img"></img>
          </div>
        <div class="cand-info">
          <div class="name">
            <div class="text">${cand.name}</div>
          </div>
          <div class="aff-off">
            <div class="aff">
              <div class="label">Penn Affiliation</div>
              <div class="text">${cand.school}</div>
            </div>
            <div class="office">
              <div class="label">Office</div>
              <div class="text">U.S. House, Pa. <br> ${cand.district} District</div>
            </div>
          </div>
        </div>
      </div>
      `);

      // append the smaller images bubbles
      $("#pa-all-candidates").append(`
        <div class="slide">
          <div class="outer-bubble ${(cand.party === "Republican" ? "rep-border" : (cand.party === "Democrat" ? "dem-border" : "uup-border"))}">
            <div class="bubble ${(cand.party === "Republican" ? "republican" : (cand.party === "Democrat" ? "democrat" : "uup"))}">
              <img src="${cand.img}" class="bubble-img"></img>
            </div>
          </div>
        </div>
        `);
      });

      // other candidate section
      shuffledOther.forEach(function(cand, index) {
        $("#curr-profile").append(`
          <div class="featured-slide">
            <div class="featured-bubble ${(cand.party === "Republican" ? "republican" : (cand.party === "Democrat" ? "democrat" : "uup"))}">
              <img src="${cand.img}" class="featured-img"></img>
            </div>
            <div class="cand-info">
              <div class="name">
                <div class="text">${cand.name}</div>
              </div>
              <div class="aff-off">
                <div class="aff">
                  <div class="label">Penn Affiliation</div>
                  <div class="text">${cand.school}</div>
                </div>
                <div class="office">
                  <div class="label">Office</div>
                  <div class="text">U.S. ${cand.office}, ${cand.state} ${(cand.district ? "<br>" + cand.district + " District" : "")}</div>
                </div>
              </div>
            </div>
          </div>
          `);

          // append the smaller images bubbles
          $("#all-candidates").append(`
            <div class="slide">
              <div class="outer-bubble ${(cand.party === "Republican" ? "rep-border" : (cand.party === "Democrat" ? "dem-border" : "uup-border"))}">
                <div class="bubble ${(cand.party === "Republican" ? "republican" : (cand.party === "Democrat" ? "democrat" : "uup"))}">
                  <img src="${cand.img}" class="bubble-img"></img>
                </div>
              </div>
            </div>
            `);
          });

          slickItems();
        });
