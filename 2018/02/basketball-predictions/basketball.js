// records
var mensRecords = {
	"penn": {
		"wins": 9,
		"losses": 1
	},
  "harvard": {
    "wins": 9,
		"losses": 1
  },
  "yale": {
    "wins": 5,
		"losses": 5
  },
  "brown": {
    "wins": 4,
		"losses": 6
  },
  "cornell": {
    "wins": 4,
		"losses": 6
  },
  "columbia": {
    "wins": 4,
		"losses": 6
  },
  "princeton": {
    "wins": 3,
		"losses": 7
  },
  "dartmouth": {
    "wins": 2,
		"losses": 8
  }
}

var womensRecords = {
	"penn": {
		"wins": 8,
		"losses": 2
	},
  "harvard": {
    "wins": 6,
		"losses": 4
  },
  "yale": {
    "wins": 6,
		"losses": 4
  },
  "brown": {
    "wins": 2,
		"losses": 8
  },
  "cornell": {
    "wins": 2,
		"losses": 8
  },
  "columbia": {
    "wins": 1,
		"losses": 9
  },
  "princeton": {
    "wins": 9,
		"losses": 1
  },
  "dartmouth": {
    "wins": 6,
		"losses": 4
  },
}

// schedules

var mensSchedule = {
  "penn": {
    "feb23": "dartmouth",
    "feb24": "harvard",
    "mar02": "yale",
    "mar03": "brown"
  },
  princeton: {
    "feb23": "harvard",
    "feb24": "dartmouth",
    "mar02": "brown",
    "mar03": "yale"
  },
  yale: {
    "feb23": "cornell",
    "feb24": "columbia",
    "mar02": "penn",
    "mar03": "princeton"
  },
  brown: {
    "feb23": "columbia",
    "feb24": "cornell",
    "mar02": "princeton",
    "mar03": "penn"
  },
  columbia: {
    "feb23": "brown",
    "feb24": "yale",
    "mar02": "dartmouth",
    "mar03": "harvard"
  },
  cornell: {
    "feb23": "yale",
    "feb24": "brown",
    "mar02": "harvard",
    "mar03": "dartmouth"
  },
  harvard: {
    "feb23": "princeton",
    "feb24": "penn",
    "mar02": "cornell",
    "mar03": "columbia"
  },
  dartmouth: {
    "feb23": "penn",
    "feb24": "princeton",
    "mar02": "columbia",
    "mar03": "cornell"
  }
}

// var womensSchedule = {
//   "penn": {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   },
//   princeton: {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   },
//   yale: {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   },
//   brown: {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   },
//   columbia: {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   },
//   cornell: {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   },
//   harvard: {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   },
//   dartmouth: {
//     "feb23": ,
//     "feb24":,
//     "mar02":,
//     "mar03"
//   }
// }


// takes in "M" or "W" to determine which table to use
function sortTable(option) {
  var table;
  var rows;
  if (option === "M") {
    table = "#mens-table";
    rows = $('#mens-table tbody tr').get();
  } else if (option === "W") {
    table = "#womens-table";
    rows = $('#womens-table tbody tr').get();
  }

  rows.sort(function(a, b) {

  var A = $(a).children('td').eq(1).text().charAt(1);
  var B = $(b).children('td').eq(1).text().charAt(1);

  if(A < B) {
    return 1;
  }

  if(A > B) {
    return -1;
  }

  return 0;

  });

  var currIndex = 0;
  $.each(rows, function(index, row) {
    row.cells[0].textContent = index + 1;
    $(table).children('tbody').append(row);

  });
}
