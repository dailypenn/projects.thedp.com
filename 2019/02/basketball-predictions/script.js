document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('toggle');
	const topSection = document.getElementsByClassName('top-section')[0];
	toggle.addEventListener('click', () => {
		console.log('button clicked');
		topSection.classList.toggle('women');
	})
});

//records

const mensRecords = {
	penn: { wins: 3, losses: 4},
	yale: { wins: 7, losses: 1},
	harvard: { wins: 5, losses: 2},
	princeton: { wins: 5, losses: 3},
	cornell: { wins: 5, losses: 3},
	brown: { wins: 3, losses: 5},
	darmouth: { wins: 2, losses: 6},
	columbia: { wins: 1, losses: 7},
}

const womensRecords = {
	penn: { wins: 6, losses: 1},
	yale: { wins: 5, losses: 3},
	harvard: { wins: 5, losses: 3},
	princeton: { wins: 5, losses: 2},
	cornell: { wins: 3, losses: 5},
	brown: { wins: 1, losses: 7},
	darmouth: { wins: 3, losses: 4},
	columbia: { wins: 3, losses: 5}
}

// head-to-head records
const mensHTH = {
	yale : 		{ brown: { wins: 2, losses: 0 }, harvard: { wins: 0, losses: 1 }, dartmouth: { wins: 1, losses: 0 }, princeton: { wins: 1, losses: 0 },
 								penn: { wins: 1, losses: 0 }, columbia: { wins: 1, losses: 0 }, cornell: { wins: 1, losses: 0 } },
	harvard : 	{ dartmouth: { wins: 1, losses: 1 }, yale: { wins: 1, losses: 0 }, brown: { wins: 1, losses: 0 }, columbia: { wins: 1, losses: 0 },
 								cornell: { wins: 0, losses: 1 }, princeton: { wins: 1, losses: 0 }, penn: { wins: 1, losses: 0 } },
	princeton : { penn: { wins: 2, losses: 0 }, columbia: { wins: 1, losses: 0 }, cornell: { wins: 1, losses: 0 }, yale: { wins: 0, losses: 1 },
 								brown: { wins: 0, losses: 1 }, harvard: { wins: 0, losses: 1 }, dartmouth: { wins: 1, losses: 0 }}
							}

	//data from https://ivyleague.com/standings.aspx?standings=1151

//schedules

const mensSchedule = {
	penn: { mar01: "harvard", mar02: "dartmouth", mar08: "yale", mar09: "brown"},
	yale: { mar01: "cornell", mar02: "columbia", mar08: "penn", mar09: "princeton"},
	harvard: { mar01: "penn", mar02: "princeton", mar08: "cornell", mar09: "columbia"},
	princeton: { mar01: "dartmouth", mar02: "harvard", mar08: "brown", mar09: "yale"},
	cornell: { mar01: "yale", mar02: "brown", mar08: "harvard", mar09: "dartmouth"},
	brown: { mar01: "columbia", mar02: "cornell", mar08: "princeton", mar09: "penn"},
	darmouth: { mar01: "princeton", mar02: "penn", mar08: "columbia", mar09: "cornell"},
	columbia: { mar01: "brown", mar02: "yale", mar08: "dartmouth", mar09: "harvard"},
}

const womensSchedule = {
	penn: { mar01: "harvard", mar02: "dartmouth", mar08: "yale", mar09: "brown"},
	yale: { mar01: "cornell", mar02: "columbia", mar08: "penn", mar09: "princeton"},
	harvard: { mar01: "penn", mar02: "princeton", mar08: "cornell", mar09: "columbia"},
	princeton: { mar01: "dartmouth", mar02: "harvard", mar08: "brown", mar09: "yale"},
	cornell: { mar01: "yale", mar02: "brown", mar08: "harvard", mar09: "dartmouth"},
	brown: { mar01: "columbia", mar02: "cornell", mar08: "princeton", mar09: "penn"},
	darmouth: { mar01: "princeton", mar02: "penn", mar08: "columbia", mar09: "cornell"},
	columbia: { mar01: "yale", mar02: "brown", mar08: "harvard", mar09: "dartmouth"},
}
