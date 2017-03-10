var ltbracketData = {
  teams: [
    // SOCIAL
    ["Mens Club Basketball", "ΣN"],
    ["XΩ", "Club Swimming"],

    ["ZTA", "ΑΣΦ"],
    ["ΚΣ", "Womens Club Basketball"],

    ["∆∆∆", "ΔΣΠ"],
    ["ΚΑΘ", "AIΓ"],

    ["ΑΚΨ", "ΑΦΩ"],
    ["ΣΔΤ (SDT)", "Synch. Swimming"],

    // EDUCATIONAL
    ["MERT 🏆", "PPISG"],
    ["Kite and Key", "Wharton Healthcare Club"],

    ["The Undergraduate Assembly", "City Step"],
    ["Government Politics Association", "College DAB"],

    ["Mock Trial", "MUSE"],
    ["Active Minds", "Preceptorials Committee"],

    ["Society of Women Engineers", "WUDAC"],
    ["Parliamentary Debate", "Penn For Youth Debate"]
  ],
  results: []
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
    ["Penn Appetit", "PVietnamese Students Assoc."],

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
  results: []
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
