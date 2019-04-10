var ltbracketData = {
  teams: [
    // SOCIAL
    ['Alphi Phi', 'Chi Omega'],
    ['Apes', 'OAX'],

    ['Penn Appetit', 'The Walk'],
    ['SDT', 'ZBT'],

    ['Tri Delt', 'Phi Delt'],
    ['Delta Sigma Pi', 'ZTA'],

    ['Alpha Iota Gamma', 'ADPi'],
    ['Alpha Kappa Psi', 'Friars'],

    // EDUCATIONAL
    ['GPA', 'SWE'],
    ['MERT', 'GBC'],

    ['Own It', 'Wharton Women'],
    ['MUSE', "Class Boards ('19-'22)"],

    ['Penn Debate Society', 'Quiz Bowl'],
    ['Wharton Europe', 'Wharton Asia Exchange'],

    ["Colege Dean's Adv. Board", 'KDSAP'],
    ['Kite and Key', 'Petey Greene']
  ],
  results: [
    [
      [501, 649],
      [408, 580],
      [595, 486],
      [615, 722],
      [667, 426],
      [382, 668],
      [518, 496],
      [430, 594],
      [504, 464],
      [939, 154],
      [429, 593],
      [467, 572],
      [534, 503],
      [527, 555],
      [765, 193],
      [1018, 185]
    ],[
      [403, 519],
      [498, 251],
      [335, 403],
      [274, 396],
      [196, 525],
      [401, 294],
      [436, 226],
      [240, 449]
    ],[
      [308, 191],
      [174, 211],
      [248, 162],
      [128, 253]
    ],[
      [325, 193],
      [226, 204]
    ], [
      [447, 329 ]
    ]
  ]
};

var rtbracketData = {
  teams: [
    // CULTURAL
    ['Penn Dems', 'WQHS'],
    ['Penn Hillel', 'Penn Dhamaka'],

    ['Onda Latina', 'Pan Asian Dance'],
    ['PIPAC', 'Penn Masala'],

    ['W. Volleyball', 'Club Swimming'],
    ['Humans of Penn', 'M. Basketball'],

    ['TAMID', 'V-Day'],
    ['Penn Period Proj.', 'WPTP'],

    // PERFORMANCE
    ['Penn Hype', 'Strictly Funk'],
    ['Bloomers', 'Penn Dance'],

    ['Dischord', 'Penny Loafers'],
    ['Mask and Wig', 'PenNaach'],

    ['Shabbatones', 'Soundsworks'],
    ['Penn Sirens', 'Simply Chaos'],

    ['West Philly Swingers', 'Counterparts'],
    ['TAC-e', 'Without a Net']
  ],
  results: [
    [
      [633, 367],
      [587, 423],
      [608, 385],
      [248, 702],
      [572, 403],
      [576, 407],
      [317, 661],
      [653, 306],
      [391, 644],
      [786, 230],
      [573, 422],
      [700, 293],
      [489, 455],
      [459, 462],
      [477, 499],
      [369, 566]
    ],[
      [362, 326],
      [387, 284],
      [362, 305],
      [289, 357],
      [357, 430],
      [324, 351],
      [309, 342],
      [430, 235]
    ],[
      [183, 186],
      [205, 163],
      [231, 157],
      [138, 231]
    ],[
      [199, 198],
      [217, 179]
    ], [
      [295,297]
    ]
  ]
};

var finalbracketData = {
  teams: [
    ['OAX', 'Bloomers']
  ],
  results: [
      [1408, 619]
    ]
};

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
  $('#finalbracket').bracket({
    init: finalbracketData,
    skipConsolationRound: true,
  });
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
