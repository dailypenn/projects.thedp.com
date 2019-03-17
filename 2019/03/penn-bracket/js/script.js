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
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ]
    ],[
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ]
    ],[
      [, ],
      [, ],
      [, ],
      [, ]
    ],[
      [, ],
      [, ]
    ], [
      [, ]
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

    ['West Philly Singers', 'Counterparts'],
    ['TAC-e', 'Without a Net']
  ],
  results: [
    [
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ]
    ],[
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ],
      [, ]
    ],[
      [, ],
      [, ],
      [, ],
      [, ]
    ],[
      [, ],
      [, ]
    ], [
      [, ]
    ]
  ]
};

var finalbracketData = {
  teams: [
    [' ', ' ']
  ],
  results: [
      [ ,  ]
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
