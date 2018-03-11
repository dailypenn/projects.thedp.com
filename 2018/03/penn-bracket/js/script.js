var ltbracketData = {
  teams: [
    // SOCIAL
    ['Chi Omega', 'Alpha Sig'],
    ['Alpha Phi', 'Delta Sigma Pi'],

    ['Phi Gamma Nu', 'Delta Delta Delta'],
    ['Zeta Tau Alpha', 'The Pennsylvania Punch Bowl'],

    ['Penn Records', 'Penn Appetit'],
    ['Kappa Alpha Theta', 'Phi Gamma Nu'],

    ['Sigma Nu', 'Alpha Iota Gamma'],
    ['Sigma Kappa', 'Alpha Kappa Psi'],

    // EDUCATIONAL
    ['Penn Debate Society', 'Kite and Key'],
    ['Government and Politics Association', 'Penn for Youth Debate'],

    ['West Philadelphia Tutoring Project', 'Wharton Europe'],
    ['MUSE', 'WQHS'],

    ['The Undergraduate Assembly', 'Active Minds'],
    ['Undergrad Sports Business Club', 'College Dean\'s Advisory Board'],

    ['Wharton Undergrad Energy Group', 'Penn Aerospace Club'],
    ['Wharton Undergrad Data Analytics Club', 'MERT']
  ],
  results: [
    [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],[
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],[
      [],
      [],
      [],
      []
    ],[
      [],
      []
    ], [
      []
    ]
  ]
};

var rtbracketData = {
  teams: [
    // CULTURAL
    ['Penn Hillel', 'Globemed'],
    ['Vietnamese Students Assoc.', 'Onda Latina'],

    ['PIPAC', 'Humans of UPenn'],
    ['Penn Dems', 'Penn Fashion Collective'],

    ['Women\'s Rowing', 'Women\'s Basketball'],
    ['Club Swimming', 'Ski Club'],

    ['Men\'s Club Basketball', 'Women\'s Volleyball'],
    ['Men\'s Basketball', 'United Minorities Council'],

    // PERFORMANCE
    ['Shabbatones', 'Bloomers'],
    ['West Philly Swingers', 'Mask and Wig'],

    ['Penny Loafers', 'Soundworks Tap Factory'],
    ['Penn Sirens', 'Theater Arts Committee'],

    ['Keynotes A Cappella', 'Penn Dance Company'],
    ['Penn Masala', 'Penn Hype'],

    ['Strictly Funk', 'Penn Dhamaka'],
    ['V-Day', 'Pennaach']
  ],
  results: [
    [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],[
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],[
      [],
      [],
      [],
      []
    ],[
      [],
      []
    ], [
      []
    ]
  ]
};

// var finalbracketData = {
//   teams: [
//     []
//   ],
//   results: [
//       []
//     ]
// };

$(function() {
  $('#ltbracket').bracket({
    init: ltbracketData,
    skipConsolationRound: true
  });
  $('#rtbracket').bracket({
    init: rtbracketData,
    skipConsolationRound: true,
    dir: 'rl'
  });
  // $('#finalbracket').bracket({
  //   init: finalbracketData,
  //   skipConsolationRound: true,
  // });
});

$(document).ready(function() {
  $('.label').each(function(index) {
    if ($(this).text().length > 38) {
      $(this).addClass('threeLine')
    } else if ($(this).text().length > 17) {
      $(this).addClass('twoLine')
    } else if ($(this).text().length > 13) {
      $(this).addClass('smaller')
    }
  });
});
