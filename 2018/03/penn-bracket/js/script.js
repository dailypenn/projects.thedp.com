var ltbracketData = {
  teams: [
    // SOCIAL
    ['Chi Omega', 'Alpha Sig'],
    ['Alpha Phi', 'Delta Sigma Pi'],

    ['Phi Gamma Nu', 'Delta Delta Delta'],
    ['Zeta Tau Alpha', 'The Pennsylvania Punch Bowl'],

    ['Penn Records', 'Penn Appetit'],
    ['Kappa Alpha Theta', 'Lambda Chi Alpha'],

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
      [634, 287],
      [616, 278],
      [486, 387],
      [542, 361],
      [243, 676],
      [365, 495],
      [529, 342],
      [645, 281],
      [275, 623],
      [419, 417],
      [804, 87],
      [505, 360],
      [430, 444],
      [322, 516],
      [218, 600],
      [187, 705]
    ],[
      [365, 454],
      [213, 541],
      [604, 160],
      [292, 514],
      [573, 191],
      [530, 222],
      [467, 258],
      [213, 537]
    ],[
      [286, 368],
      [358, 308],
      [275, 328],
      [205, 377]
    ],[
      [397, 215],
      [296, 257]
    ], [
      [386, 275]
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
      [547, 310],
      [249, 602],
      [113, 761],
      [513, 366],
      [392, 456],
      [444, 419],
      [207, 631],
      [494, 357],
      [214, 678],
      [376, 523],
      [506, 331],
      [453, 382],
      [368, 478],
      [399, 463],
      [527, 334],
      [564, 303]
    ],[
      [359, 394],
      [448, 309],
      [435, 303],
      [373, 360],
      [511, 282],
      [402, 316],
      [288, 454],
      [426, 330]
    ],[
      [318, 255],
      [295, 269],
      [406, 189],
      [263, 307]
    ],[
      [331, 217],
      [270, 283]
    ], [
      [380, 297]
    ]
  ]
};

var finalbracketData = {
  teams: [
    ['Zeta Tau Alpha', 'Onda Latina']
  ],
  results: [
      [636, 589]
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
