// records
const mensRecords = {
	penn: { wins: 9, losses: 1 },
	harvard: { wins: 9, losses: 1 },
	yale: { wins: 5, losses: 5 },
	brown: { wins: 4, losses: 6 },
	cornell: { wins: 4, losses: 6 },
	columbia: { wins: 4, losses: 6 },
	princeton: { wins: 3, losses: 7 },
	dartmouth: { wins: 2, losses: 8 }
}

const womensRecords = {
	penn: { wins: 8, losses: 2 },
	harvard: { wins: 6, losses: 4 },
	yale: { wins: 6, losses: 4 },
	brown: { wins: 2, losses: 8 },
	cornell: { wins: 2, losses: 8 },
	columbia: { wins: 1, losses: 9 },
	princeton: { wins: 9, losses: 1 },
	dartmouth: { wins: 6, losses: 4 }
}

// head-to-head records
const mensHTH = {
	harvard : 	{ penn: { wins: 1, losses: 0 }, yale: { wins: 2, losses: 0 }, columbia: { wins: 0, losses: 1 }, brown: { wins: 2, losses: 0 },
 								cornell: { wins: 1, losses: 0 }, princeton: { wins: 1, losses: 0 }, dartmouth: { wins: 2, losses: 0 } },
	penn : 			{ harvard: { wins: 0, losses: 1 }, yale: { wins: 1, losses: 0 }, columbia: { wins: 2, losses: 0 }, brown: { wins: 1, losses: 0 },
 								cornell: { wins: 2, losses: 0 }, princeton: { wins: 2, losses: 0 }, dartmouth: { wins: 1, losses: 0 } },
	yale : 			{ harvard: { wins: 0, losses: 2 }, penn: { wins: 0, losses: 1 }, columbia: { wins: 1, losses: 0 }, brown: { wins: 1, losses: 1 },
 								cornell: { wins: 1, losses: 0 }, princeton: { wins: 0, losses: 1 }, dartmouth: { wins: 2, losses: 0 } },
	columbia : 	{ harvard: { wins: 1, losses: 0 }, penn: { wins: 0, losses: 2 }, yale: { wins: 0, losses: 1 }, brown: { wins: 0, losses: 1 },
 								cornell: { wins: 1, losses: 1 }, princeton: { wins: 1, losses: 1 }, dartmouth: { wins: 1, losses: 0 } },
	brown : 		{ harvard: { wins: 0, losses: 2 }, penn: { wins: 0, losses: 1 }, yale: { wins: 1, losses: 1 }, columbia: { wins: 1, losses: 0 },
 								cornell: { wins: 0, losses: 1 }, princeton: { wins: 1, losses: 0 }, dartmouth: { wins: 1, losses: 1 } },
	cornell : 	{ harvard: { wins: 0, losses: 2 }, penn: { wins: 0, losses: 2 }, yale: { wins: 0, losses: 1 }, columbia: { wins: 1, losses: 1 },
 								brown: { wins: 1, losses: 0 }, princeton: { wins: 1, losses: 1 }, dartmouth: { wins: 1, losses: 0 } },
	princeton : { harvard: { wins: 0, losses: 1 }, penn: { wins: 0, losses: 2 }, yale: { wins: 1, losses: 0 }, columbia: { wins: 1, losses: 1 },
 								brown: { wins: 0, losses: 1 }, cornell: { wins: 1, losses: 1 }, dartmouth: { wins: 0, losses: 1 } },
	dartmouth : { harvard: { wins: 0, losses: 2 }, penn: { wins: 0, losses: 1 }, yale: { wins: 0, losses: 2 }, columbia: { wins: 0, losses: 1 },
 								brown: { wins: 1, losses: 1 }, cornell: { wins: 0, losses: 1 }, princeton: { wins: 1, losses: 0 } }
}

const womensHTH = {
	princeton : { penn: { wins: 2, losses: 0 }, harvard: { wins: 1, losses: 0 }, yale: { wins: 0, losses: 1 }, dartmouth: { wins: 1, losses: 0 },
 								brown: { wins: 1, losses: 0 }, columbia: { wins: 2, losses: 0 }, cornell: { wins: 2, losses: 0 } },
	penn : 			{ princeton: { wins: 0, losses: 2 }, harvard: { wins: 1, losses: 0 }, yale: { wins: 1, losses: 0 }, dartmouth: { wins: 1, losses: 0 },
 								brown: { wins: 1, losses: 0 }, columbia: { wins: 2, losses: 0 }, cornell: { wins: 2, losses: 0 } },
	harvard : 	{ princeton: { wins: 0, losses: 1 }, penn: { wins: 0, losses: 1 }, yale: { wins: 1, losses: 1 }, dartmouth: { wins: 1, losses: 1 },
 								brown: { wins: 2, losses: 0 }, columbia: { wins: 1, losses: 0 }, cornell: { wins: 1, losses: 0 } },
	yale : 			{ princeton: { wins: 1, losses: 0 }, penn: { wins: 0, losses: 1 }, harvard: { wins: 1, losses: 1 }, dartmouth: { wins: 1, losses: 1 },
 								brown: { wins: 1, losses: 1 }, columbia: { wins: 1, losses: 0 }, cornell: { wins: 1, losses: 0 } },
	dartmouth : { princeton: { wins: 0, losses: 1 }, penn: { wins: 0, losses: 1 }, harvard: { wins: 1, losses: 1 }, yale: { wins: 1, losses: 1 },
 								brown: { wins: 2, losses: 0 }, columbia: { wins: 1, losses: 0 }, cornell: { wins: 1, losses: 0 } },
	columbia : 	{ harvard: { wins: 0, losses: 1 }, penn: { wins: 0, losses: 2 }, yale: { wins: 0, losses: 1 }, brown: { wins: 0, losses: 1 },
 								cornell: { wins: 1, losses: 1 }, princeton: { wins: 0, losses: 2 }, dartmouth: { wins: 0, losses: 1 } },
	brown : 		{ harvard: { wins: 0, losses: 2 }, penn: { wins: 0, losses: 1 }, yale: { wins: 1, losses: 1 }, columbia: { wins: 1, losses: 0 },
 								cornell: { wins: 0, losses: 1 }, princeton: { wins: 0, losses: 1 }, dartmouth: { wins: 0, losses: 2 } },
	cornell : 	{ harvard: { wins: 0, losses: 1 }, penn: { wins: 0, losses: 2 }, yale: { wins: 0, losses: 1 }, columbia: { wins: 1, losses: 1 },
 								brown: { wins: 1, losses: 0 }, princeton: { wins: 0, losses: 2 }, dartmouth: { wins: 0, losses: 1 } }
}

// averaged ratings
const mensRatings = {
	penn: 		 124.5,
	harvard: 	 144.25,
	yale: 		 187,
	princeton: 194.75,
	columbia:  230,
	brown: 		 254.75,
	cornell: 	 256,
	dartmouth: 291.25
}

const womensRatings = {
	princeton: 39,
	penn: 		 73.5,
	harvard:	 102,
	dartmouth: 121.5,
	yale: 		 128,
	brown: 		 179.5,
	columbia:  209,
	cornell: 	 265
}

// schedules
const mensSchedule = {
	penn: { feb23: "dartmouth", feb24: "harvard", mar02: "yale", mar03: "brown" },
	princeton: { feb23: "harvard", feb24: "dartmouth", mar02: "brown", mar03: "yale" },
	yale: { feb23: "cornell", feb24: "columbia", mar02: "penn", mar03: "princeton" },
	brown: { feb23: "columbia", feb24: "cornell", mar02: "princeton", mar03: "penn" },
	columbia: { feb23: "brown", feb24: "yale", mar02: "dartmouth", mar03: "harvard" },
	cornell: { feb23: "yale", feb24: "brown", mar02: "harvard", mar03: "dartmouth" },
	harvard: { feb23: "princeton", feb24: "penn", mar02: "cornell", mar03: "columbia" },
	dartmouth: { feb23: "penn", feb24: "princeton", mar02: "columbia", mar03: "cornell" }
}

const womensSchedule = {
	penn: { feb23: "harvard", feb24: "dartmouth", mar02: "yale", mar03: "brown" },
	princeton: { feb23: "dartmouth", feb24: "harvard", mar02: "brown", mar03: "yale" },
	yale: { feb23: "cornell", feb24: "columbia", mar02: "penn", mar03: "princeton" },
	brown: { feb23: "columbia", feb24: "cornell", mar02: "princeton", mar03: "penn" },
	columbia: { feb23: "brown", feb24: "yale", mar02: "dartmouth", mar03: "harvard" },
	cornell: { feb23: "yale", feb24: "brown", mar02: "harvard", mar03: "dartmouth" },
	harvard: { feb23: "penn", feb24: "princeton", mar02: "cornell", mar03: "columbia" },
	dartmouth: { feb23: "princeton", feb24: "penn", mar02: "columbia", mar03: "cornell" }
}

function sortedTeams(gender) {
	const record = gender === 'm' ? mensRecords : womensRecords;
	const standings = Object.keys(record).sort(function(a, b) {
		const W1 = record[a].wins;
		const W2 = record[b].wins;
		const L1 = record[a].losses;
		const L2 = record[b].losses;
		return W1 > W2 ? -1 : W1 < W2 ? 1 : L1 < L2 ? -1 : L1 > L2 ? 1 : 0;
	});
	return standings;
}

// first tiebreaker scenario
function headToHead(team1, team2, gender) {
	const record = gender === 'm' ? mensHTH : womensHTH;
	const team1Wins = record[team1][team2].wins;
	const team2Wins = record[team2][team1].wins;
	return team1Wins > team2Wins ? -1 :
				 team1Wins < team2Wins ?  1 : compareToTopSeed(team1, team2, gender);
}

// second tiebreaker scenario
function compareToTopSeed(team1, team2, gender) {
	const hth = gender === 'm' ? mensHTH : womensHTH;
	const record = gender === 'm' ? mensRecords : womensRecords;
	const standings = sortedTeams(gender);
	for (var i in standings) {
		const team = standings[i];
		if (team === team1 || team === team2) continue;

		var team1Wins = hth[team1][team].wins;
		var team2Wins = hth[team2][team].wins;

		// check if this team has the same record as any other teams
		const teamWins = record[team].wins;
		const teamLosses = record[team].losses;
		for (var j in standings) {
			const compTeam = standings[j];
			if (compTeam === team || compTeam === team1 || compTeam === team2) continue;

			// if so, we need to compare against the combined records
			if (teamWins == record[compTeam].wins && teamLosses == record[compTeam].losses) {
				team1Wins += hth[team1][compTeam].wins;
				team2Wins += hth[team2][compTeam].wins;
			}
		}


		// check if one team has done better against others
		if (team1Wins > team2Wins) {
			return -1;
		} else if (team1Wins < team2Wins) {
			return 1;
		}
	}

	// if we compare all teams and they're still the same, go to the third tiebreaker
	return compareRatings(team1, team2, gender);
}

// third tiebreaker scenario
function compareRatings(team1, team2, gender) {
	const ratings = gender === 'm' ? mensRatings : womensRatings;
	return ratings[team1] < ratings[team2] ? -1 :
				 ratings[team1] > ratings[team2] ?  1 :
				 // if they're somehow still tied, do a coin flip
				 (Math.floor(Math.random() * 2) == 0) ? -1 : 1;
}

// takes in 'm' or 'w' to determine which table to use
function sortTable(gender) {
	const table = gender === 'm' ? '#mens-table' : '#womens-table';
	const record = gender === 'm' ? mensRecords : womensRecords;
	const tbody = $(table).find('tbody');

	// sorts by number of wins
	tbody.find('tr').sort(function(a, b) {
		const team1 = $(a).children('td').eq(0).text().toLowerCase();
		const team2 = $(b).children('td').eq(0).text().toLowerCase();
		const W1 = record[team1].wins;
		const W2 = record[team2].wins;
		const L1 = record[team1].losses;
		const L2 = record[team2].losses;

		// compare wins
		if (W1 > W2) {
			return -1;
		} else if (W1 < W2) {
			return 1;
		} else {
			// sort by losses if wins are tied
			if (L1 < L2){
				return -1;
			} else if (L1 > L2) {
				return 1;
			} else {
				return headToHead(team1, team2, gender);
			}
		}
	}).appendTo(tbody);

	// update standings numbers
	$.each(tbody.find('tr'), function(index, row) {
		row.cells[0].textContent = index + 1;
		if (index < 4) {
			row.style.backgroundColor = '#DDD';
		} else {
			row.style.backgroundColor = '#FFF';
		}
	});
}

function titleCase(string) {
	return string[0].toUpperCase() + string.substring(1, string.length);
}

function populateCheckboxes() {
	// mens
	$.each(mensSchedule, function(school, dates) {
		$.each(dates, function(date, opp) {
			$('#m' + school + date).parent().append('<p class="versus">vs. ' + titleCase(opp) + '</p>')
		});
	});

	// womens
	$.each(womensSchedule, function(school, dates) {
		$.each(dates, function(date, opp) {
			$('#w' + school + date).parent().append('<p class="versus">vs. ' + titleCase(opp) + '</p>')
		});
	});
}

function updateRecord(team1, team2, gender, num){
	const record = gender == 'm' ? mensRecords : womensRecords;
	const hth = gender == 'm' ? mensHTH : womensHTH;
	record[team1].wins += num;
	record[team2].losses += num;
	hth[team1][team2].wins += num;
	hth[team2][team1].losses += num;
}

function february23Games() {
	// womens
	updateRecord('harvard', 'penn', 'w', 1);
	updateRecord('yale', 'cornell', 'w', 1);
	updateRecord('columbia', 'brown', 'w', 1);
	updateRecord('princeton', 'dartmouth', 'w', 1);

	// mens
	updateRecord('harvard', 'princeton', 'm', 1);
	updateRecord('yale', 'cornell', 'm', 1);
	updateRecord('columbia', 'brown', 'm', 1);
	updateRecord('penn', 'dartmouth', 'm', 1);
}

function february24Games() {
	// womens
	updateRecord('harvard', 'princeton', 'w', 1);
	updateRecord('penn', 'dartmouth', 'w', 1);
	updateRecord('yale', 'columbia', 'w', 1);
	updateRecord('brown', 'cornell', 'w', 1);

	// mens
	updateRecord('penn', 'harvard', 'm', 1);
	updateRecord('yale', 'columbia', 'm', 1);
	updateRecord('cornell', 'brown', 'm', 1);
	updateRecord('princeton', 'dartmouth', 'm', 1);
}

function march2Games() {
	// womens
	updateRecord('penn', 'yale', 'w', 1);
	updateRecord('princeton', 'brown', 'w', 1);
	updateRecord('harvard', 'cornell', 'w', 1);
	updateRecord('dartmouth', 'columbia', 'w', 1);

	// mens
	updateRecord('yale', 'penn', 'm', 1);
	updateRecord('dartmouth', 'columbia', 'm', 1);
	updateRecord('harvard', 'cornell', 'm', 1);
	updateRecord('princeton', 'brown', 'm', 1);
}

function march3Games() {
	// womens
	updateRecord('penn', 'brown', 'w', 1);
	updateRecord('princeton', 'yale', 'w', 1);
	updateRecord('harvard', 'columbia', 'w', 1);
	updateRecord('cornell', 'dartmouth', 'w', 1);

	// mens
	updateRecord('penn', 'brown', 'm', 1);
	updateRecord('harvard', 'columbia', 'm', 1);
	updateRecord('cornell', 'dartmouth', 'm', 1);
	updateRecord('yale', 'princeton', 'm', 1);
}

$(document).ready(function () {
	// update all of the new records programmatically to preserve the original records
	february23Games();
	february24Games();
	march2Games();
	march3Games();

	// only show men's table at the beginning
	$('#womens-table').hide();

	// allow users to toggle tables
	$('#mens').on('click', function() {
		$('#mens').addClass('active');
		$('#womens').removeClass('active');
		$('#womens-table').hide();
		$('#mens-table').show();
	});

	$('#womens').on('click', function() {
		$('#womens').addClass('active');
		$('#mens').removeClass('active');
		$('#mens-table').hide();
		$('#womens-table').show();
	});

	function setMenScore() {
		$("#mens-brown-score").empty().append("(" + mensRecords.brown.wins + " - " + mensRecords.brown.losses + ")");
		$("#mens-columbia-score").empty().append("(" + mensRecords.columbia.wins + " - " + mensRecords.columbia.losses + ")");
		$("#mens-cornell-score").empty().append("(" + mensRecords.cornell.wins + " - " + mensRecords.cornell.losses + ")");
		$("#mens-dartmouth-score").empty().append("(" + mensRecords.dartmouth.wins + " - " + mensRecords.dartmouth.losses + ")");
		$("#mens-harvard-score").empty().append("(" + mensRecords.harvard.wins + " - " + mensRecords.harvard.losses + ")");
		$("#mens-penn-score").empty().append("(" + mensRecords.penn.wins + " - " + mensRecords.penn.losses + ")");
		$("#mens-princeton-score").empty().append("(" + mensRecords.princeton.wins + " - " + mensRecords.princeton.losses + ")");
		$("#mens-yale-score").empty().append("(" + mensRecords.yale.wins + " - " + mensRecords.yale.losses + ")");

		// sort table by wins for mens
		sortTable('m');
	};
	function setWomenScore() {
		// adding records to rows for womens
		$("#womens-brown-score").empty().append("(" + womensRecords.brown.wins + " - " + womensRecords.brown.losses + ")");
		$("#womens-columbia-score").empty().append("(" + womensRecords.columbia.wins + " - " + womensRecords.columbia.losses + ")");
		$("#womens-cornell-score").empty().append("(" + womensRecords.cornell.wins + " - " + womensRecords.cornell.losses + ")");
		$("#womens-dartmouth-score").empty().append("(" + womensRecords.dartmouth.wins + " - " + womensRecords.dartmouth.losses + ")");
		$("#womens-harvard-score").empty().append("(" + womensRecords.harvard.wins + " - " + womensRecords.harvard.losses + ")");
		$("#womens-penn-score").empty().append("(" + womensRecords.penn.wins + " - " + womensRecords.penn.losses + ")");
		$("#womens-princeton-score").empty().append("(" + womensRecords.princeton.wins + " - " + womensRecords.princeton.losses + ")");
		$("#womens-yale-score").empty().append("(" + womensRecords.yale.wins + " - " + womensRecords.yale.losses + ")");

		// sort table by wins for womens
		sortTable('w');
	};

	setMenScore();
	setWomenScore();
	populateCheckboxes();

	$('input[type = checkbox]').on('change', function() {
		const gender = this.id.substring(0,1);
		const id = this.id.slice(1);
		const team = id.substring(0, id.length - 5);
		const date = id.substring(id.length - 5);
		const oppTeam = gender == 'm' ? mensSchedule[team][date] : womensSchedule[team][date];
		const opp = $('#' + gender + oppTeam + date);

		// if the opposite team was marked to win, reduce its wins
		if (opp.get(0).checked) {
			opp.prop('checked', false);
			updateRecord(oppTeam, team, gender, -1);
		}
		updateRecord(team, oppTeam, gender, this.checked ? 1 : -1);

		// set scores
		if (gender == 'm') {
			setMenScore();
		} else {
			setWomenScore();
		}
	});
});
