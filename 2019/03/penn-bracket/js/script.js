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
      [441, 649],
      [398, 721],
      [595, 476],
      [575, 482],
      [617, 426],
      [382, 668],
      [518, 496],
      [430, 584],
      [503, 463],
      [917, 154],
      [429, 593],
      [461, 572],
      [534, 453],
      [517, 465],
      [765, 193],
      [828, 185]
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
      [287, 661],
      [653, 306],
      [391, 604],
      [786, 230],
      [523, 422],
      [700, 293],
      [489, 455],
      [459, 462],
      [477, 499],
      [361, 566]
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
