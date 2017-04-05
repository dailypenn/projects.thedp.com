var ltbracketData = {
  teams: [
    // SOCIAL
    ["Men's Club Basketball", "Sigma Nu"],
    ["Chi-O", "Club Swimming"],

    ["ZTA", "Alpha Sigma Phi"],
    ["Sigma Kappa", "Women's Club Basketball"],

    ["Tri-Delt", "Delta Sigma Pi"],
    ["Kappa Alpha Theta", "Alpha Iota Gamma (AIR)"],

    ["Alpha Kappa Psi", "Alpha Phi Omega"],
    ["SDT", "Synchronized Swimming"],

    // EDUCATIONAL
    ["MERT", "PPI Student Group"],
    ["Kite and Key", "Wharton Healthcare Club"],

    ["The Undergraduate Assembly", "City Step"],
    ["Government Politics Association", "College DAB"],

    ["Mock Trial", "MUSE"],
    ["Active Minds", "Preceptorials Committee"],

    ["Society of Women Engineers", "Wharton Undergrad Data Analytics Club"],
    ["Parliamentary Debate", "Penn For Youth Debate"]
  ],
  results: [
    [
      [585, 386],
      [498, 497],
      [656, 305],
      [531, 449],
      [426, 526],
      [310, 656],
      [346, 589],
      [321, 626],
      [762, 213],
      [681, 279],
      [359, 594],
      [347, 576],
      [488, 450],
      [601, 317],
      [711, 202],
      [360, 542]
    ],[
      [277, 306],
      [255, 328],
      [170, 357],
      [187, 350],
      [339, 231],
      [393, 171],
      [226, 306],
      [407, 127]
    ],[
      [256, 354],
      [265, 261],
      [309, 248],
      [196, 322]
    ],[
      [360, 304],
      [297, 333]
    ], [
      [368, 231]
    ]
  ]
};

var rtbracketData = {
  teams: [
    // CULTURAL
    ["United Minorities Council", "Hong Kong Student Association"],
    ["Penn Dems", "Penn Dhamaka"],

    ["Penn Hillel", "PASA"],
    ["Penn Brazil Club", "Philippine Association"],

    ["Humans of UPenn", "Black Wharton Undergraduate Association"],
    ["The Pennsylvania Punch Bowl", "Shabbatones"],

    ["Asian Pacific Student Coalition", "Penn International Impact Consulting"],
    ["Penn Appétit", "Vietnamese Students Assoc."],

    // PERFORMANCE
    ["Mask and Wig", "Dischord A Cappella"],
    ["Bloomers", "Arts House Dance Company"],

    ["Glee Club", "Off the Beat"],
    ["Penny Loafers", "Soundworks Tap Factory"],

    ["West Philadelphia Swingers", "Sparks"],
    ["Quadramics", "Penn Dance Company"],

    ["Jazz & Grooves", "Penn Hype"],
    ["Penn Sirens", "Strictly Funk"]
  ],
  results: [
    [
      [677, 227],
      [513, 443],
      [486, 424],
      [538, 355],
      [664, 279],
      [523, 369],
      [466, 425],
      [711, 203],
      [618, 335],
      [605, 364],
      [501, 435],
      [538, 366],
      [646, 272],
      [301, 600],
      [345, 581],
      [283, 663]
    ],[
      [264, 275],
      [303, 235],
      [388, 147],
      [154, 376],
      [208, 375],
      [304, 238],
      [237, 300],
      [247, 309]
    ],[
      [307, 217],
      [273, 263],
      [341, 221],
      [272, 276]
    ],[
      [257, 337],
      [307, 293]
    ], [
      [251, 258]
    ]
  ]
};

var finalbracketData = {
  teams: [
    ["Sigma Kappa", "Bloomers"]
  ],
  results: [
      [681, 417]
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
  })
  $('#finalbracket').bracket({
    init: finalbracketData,
    skipConsolationRound: true,
  })
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
