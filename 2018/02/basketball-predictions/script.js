// records
var mensRecords = {
	penn: { "wins": 9, "losses": 1 },
	harvard: { "wins": 9, "losses": 1 },
	yale: { "wins": 5, "losses": 5 },
	brown: { "wins": 4, "losses": 6 },
	cornell: { "wins": 4, "losses": 6 },
	columbia: { "wins": 4, "losses": 6 },
	princeton: { "wins": 3, "losses": 7 },
	dartmouth: { "wins": 2, "losses": 8 }
}

var womensRecords = {
	penn: { "wins": 8, "losses": 2 },
	harvard: { "wins": 6, "losses": 4 },
	yale: { "wins": 6, "losses": 4 },
	brown: { "wins": 2, "losses": 8 },
	cornell: { "wins": 2, "losses": 8 },
	columbia: { "wins": 1, "losses": 9 },
	princeton: { "wins": 9, "losses": 1 },
	dartmouth: { "wins": 6, "losses": 4 }
}

// schedules
var mensSchedule = {
	penn: { "feb23": "dartmouth", "feb24": "harvard", "mar02": "yale", "mar03": "brown" },
	princeton: { "feb23": "harvard", "feb24": "dartmouth", "mar02": "brown", "mar03": "yale" },
	yale: { "feb23": "cornell", "feb24": "columbia", "mar02": "penn", "mar03": "princeton" },
	brown: { "feb23": "columbia", "feb24": "cornell", "mar02": "princeton", "mar03": "penn" },
	columbia: { "feb23": "brown", "feb24": "yale", "mar02": "dartmouth", "mar03": "harvard" },
	cornell: { "feb23": "yale", "feb24": "brown", "mar02": "harvard", "mar03": "dartmouth" },
	harvard: { "feb23": "princeton", "feb24": "penn", "mar02": "cornell", "mar03": "columbia" },
	dartmouth: { "feb23": "penn", "feb24": "princeton", "mar02": "columbia", "mar03": "cornell" }
}

var womensSchedule = {
	penn: { "feb23": "harvard", "feb24": "dartmouth", "mar02": "yale", "mar03": "brown" },
	princeton: { "feb23": "dartmouth", "feb24": "harvard", "mar02": "brown", "mar03": "yale" },
	yale: { "feb23": "cornell", "feb24": "columbia", "mar02": "penn", "mar03": "princeton" },
	brown: { "feb23": "columbia", "feb24": "cornell", "mar02": "princeton", "mar03": "penn" },
	columbia: { "feb23": "brown", "feb24": "yale", "mar02": "dartmouth", "mar03": "harvard" },
	cornell: { "feb23": "yale", "feb24": "brown", "mar02": "harvard", "mar03": "dartmouth" },
	harvard: { "feb23": "penn", "feb24": "princeton", "mar02": "cornell", "mar03": "columbia" },
	dartmouth: { "feb23": "princeton", "feb24": "penn", "mar02": "columbia", "mar03": "cornell" }
}

// takes in "M" or "W" to determine which table to use
function sortTable(option) {
	var table;
	var rows;
	var record;
	if (option === "M") {
		table = "#mens-table";
		rows = $('#mens-table tbody tr').get();
		record = mensRecords;
	} else if (option === "W") {
		table = "#womens-table";
		rows = $('#womens-table tbody tr').get();
		record = womensRecords;
	}

	//sorts by number of wins
	rows.sort(function(a, b) {
		var team1 = $(a).children('td').eq(0).text().toLowerCase();
		var team2 = $(b).children('td').eq(0).text().toLowerCase();

		var W1 = record[team1].wins;
		var W2 = record[team2].wins;
		var L1 = record[team1].losses;
		var L2 = record[team2].losses;
		//compare wins
		if (W1 < W2) {
			return 1;
		} else if (W2 > W1) {
			return -1;
		} else {
			// sort by losses if wins are tied
			if (L1 > L2){
				return 1;
			} else if(L1 < L2) {
				return -1;
			} else {
				return 0
			}
		}
	});

	var currIndex = 0;
	$.each(rows, function(index, row) {
		row.cells[0].textContent = index + 1;
		$(table).children('tbody').append(row);
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
	var record = gender == 'm' ? mensRecords : womensRecords;
	record[team1].wins += num;
	record[team2].losses += num;
}

function updateBackgrounds(gender, team1, team2) {
	// clear all background colors
	var table = gender == 'm' ? '#mens-table' : '#womens-table';
	var rows = $(table + ' tbody tr').get();
	$.each(rows, function(index, row) {
		row.style.backgroundColor = '#FFF';
	});

	// set these team's background colors to indicate that their scores updated
	var teamRow = $('#' + gender + '-' + team1);
	var oppTeamRow = $('#' + gender + '-' + team2);
	teamRow.get(0).style.backgroundColor = '#EEE';
	oppTeamRow.get(0).style.backgroundColor = '#EEE';
}

$(document).ready(function () {
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
		sortTable("M");
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
		sortTable("W");
	};

	setMenScore();
	setWomenScore();
	populateCheckboxes();

	$('input[type = checkbox]').on('change', function() {
		var gender = this.id.substring(0,1);
		var id = this.id.slice(1);
		var team = id.substring(0, id.length - 5);
		var date = id.substring(id.length - 5);
		var oppTeam = gender == 'm' ? mensSchedule[team][date] : womensSchedule[team][date];
		var opp = $('#' + gender + oppTeam + date);

		// if the opposite team was marked to win, reduce its wins
		if (opp.get(0).checked) {
			opp.prop('checked', false);
			updateRecord(oppTeam, team, gender, -1);
		}
		updateRecord(team, oppTeam, gender, this.checked ? 1 : -1);
		updateBackgrounds(gender, team, oppTeam);

		// set scores
		if (gender == 'm') {
			setMenScore();
		} else {
			setWomenScore();
		}
	});
});
