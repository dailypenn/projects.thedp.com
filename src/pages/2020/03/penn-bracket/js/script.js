var ltbracketData = {
  teams: [
    // SOCIAL
    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null],

    // EDUCATIONAL
    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null]
  ],
  results: []
};

var rtbracketData = {
  teams: [
    // CULTURAL
    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null],

    // PERFORMANCE
    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null],

    [null, null],
    [null, null]
  ],
  results: []
};

var finalbracketData = {
  teams: [
    [null, null]
  ],
  results: []
};

function edit_fn(container, data, doneCb) {
  var input = $('<input type="text">')
  input.val(data ? data.flag + ':' + data.name : '')
  container.html(input)
  input.focus()
  input.blur(function() {
    var inputValue = input.val()
    if (inputValue.length === 0) {
      doneCb(null); // Drop the team and replace with BYE
    } else {
      var flagAndName = inputValue.split(':') // Expects correct input
      doneCb({flag: flagAndName[0], name: flagAndName[1]})
    }
  })
}

function render_fn(container, data, score, state) {
  container.append("TBD")
}

$(function() {
  $('#ltbracket').bracket({
    init: ltbracketData,
    skipConsolationRound: true,
    decorator: {
      edit: edit_fn,
      render: render_fn
    }
  });
  $('#rtbracket').bracket({
    init: rtbracketData,
    skipConsolationRound: true,
    decorator: {
      edit: edit_fn,
      render: render_fn
    },
    dir: 'rl'
  });
  $('#finalbracket').bracket({
    init: finalbracketData,
    skipConsolationRound: true,
    decorator: {
      edit: edit_fn,
      render: render_fn
    }
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
