var isMen = true;
var mensOriginalStandings = [];
var womensOriginalStandings = [];

document.addEventListener("DOMContentLoaded", () => {
  // initially load men's data
  loadData();
  updateStanding(false)
  mensOriginalStandings = mensStandings;
  loadStandings();

  // create listeners for win buttons
  createWinListeners();

  // add listener to toggle team data based on user selection
  const toggle = document.getElementById('toggle');
	toggle.addEventListener('change', (e) => {
		toggleTeam();
	});
});

/* Load in data based on given team and toggle banner colors */
function toggleTeam() {
  isMen = !isMen;
  loadData();
  loadStandings();
  document.getElementById('top-section').classList.toggle('women');
  document.getElementById('top-section-overlap').classList.toggle('women');
  document.getElementById('standings-header').classList.toggle('women');
  document.getElementById('top-row').classList.toggle('women-accent');
}

/* Load in match data by date */
function loadData() {
  const matches = Array.from(document.getElementsByClassName('match'));
  loadMatches(matches.slice(0, 4), 'mar01');
  loadMatches(matches.slice(4, 8), 'mar02');
  loadMatches(matches.slice(8, 12), 'mar08');
  loadMatches(matches.slice(12), 'mar09');
}

/* Populate match tables with home and away schools and their records */
function loadMatches(matches, dateName) {
  const schedule = isMen ? scheduleM : scheduleW;
  matches.forEach((match, i) => {
    const game = schedule[dateName][i];
    const away = match.getElementsByClassName('away')[0];
    away.getElementsByClassName('team-name')[0].innerHTML = game.away;
    away.getElementsByClassName('record')[0].innerHTML = `(${getRecord(game.home.toLowerCase())})`;
    away.getElementsByClassName('logo')[0].src = `assets/${game.away.toLowerCase()}.svg`;
    away.getElementsByClassName('win-btn')[0].setAttribute('data-team', game.away.toLowerCase());
    const home = match.getElementsByClassName('home')[0];
    home.getElementsByClassName('team-name')[0].innerHTML = game.home;
    home.getElementsByClassName('record')[0].innerHTML = `(${getRecord(game.home.toLowerCase())})`;
    home.getElementsByClassName('logo')[0].src = `assets/${game.home.toLowerCase()}.svg`;
    home.getElementsByClassName('win-btn')[0].setAttribute('data-team', game.home.toLowerCase());
  });
}


function loadStandings() {
  const standings = isMen ? mensStandings : womensStandings;
  const rows = document.getElementsByClassName('standings-table');
  standings.forEach((standing, i) => {
    rows[i].getElementsByClassName('rank-cell')[0].innerHTML = i+1;
    const span = `<span><img class="img-fluid logo-img" src="assets/${standing.school.toLowerCase()}.svg"></span>`;
    rows[i].getElementsByClassName('school-cell')[0].innerHTML = span+standing.school;
    rows[i].getElementsByClassName('record-cell')[0].innerHTML = getRecord(standing.school.toLowerCase());
    rows[i].getElementsByClassName('arrow')[0].classList.remove('up');
    rows[i].getElementsByClassName('arrow')[0].classList.remove('down');
    rows[i].getElementsByClassName('arrow')[0].classList.remove('neutral');

    if (standing.change !== 0) {
      rows[i].getElementsByClassName('arrow')[0].classList.add(standing.change > 0 ? 'up' : 'down');
    } else {
      rows[i].getElementsByClassName('arrow')[0].classList.add('neutral');
    }
  });
}

/* Get a given school's record */
// TODO: what is the decimal value that is on the page initially?
function getRecord(school) {
  const records = isMen ? mensRecords : womensRecords;
  return `${records[school].wins}-${records[school].losses}`;
}

/* Sets up event listeners on all of the win buttons */
function createWinListeners() {
  const btns = Array.from(document.getElementsByClassName('win-btn'));
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('winning')) {
        return;
      }

      const match = e.target.parentElement.parentElement;
      const home = e.target.parentElement.classList.contains('home');
      const other = match.getElementsByClassName(home ? 'away' : 'home')[0];
      const losing = other.getElementsByClassName('win-btn')[0];
      const initialClick = !e.target.classList.contains('winning') && !losing.classList.contains('winning');
      const winner = e.target.parentElement.getElementsByClassName('team-name')[0].innerHTML.toLowerCase()
      const loser = other.getElementsByClassName('team-name')[0].innerHTML.toLowerCase();
      losing.innerHTML = 'LOSE';
      losing.classList.remove('winning');
      e.target.innerHTML = 'WIN';
      e.target.classList.toggle('winning');
      updateScore(winner, loser, initialClick);
    });
  })
}

function updateScore(winner, loser, initialClick) {
  winner = winner.toLowerCase();
  loser = loser.toLowerCase();
  const record = isMen ? mensRecords : womensRecords;

  if (initialClick) {
    record[winner].wins += 1;
    record[loser].losses += 1;
  } else {
    record[winner].wins += 1;
    record[winner].losses -= 1;
    record[loser].wins -= 1
    record[loser].losses += 1;
  }

  updateStanding(true)
}

function updateStanding(updateChange) {
  const standings = isMen ? mensStandings : womensStandings;
  const record = isMen ? mensRecords : womensRecords;

  standings.sort((team1, team2) => {
		const W1 = record[team1.school.toLowerCase()].wins;
		const W2 = record[team2.school.toLowerCase()].wins;
		const L1 = record[team1.school.toLowerCase()].losses;
		const L2 = record[team2.school.toLowerCase()].losses;

		// compare wins
		if (W1 > W2) {
			return -1;
		}
    if (W1 < W2) {
			return 1;
		}
			// sort by losses if wins are tied
		if (L1 < L2){
			return -1;
		}
    if (L1 > L2) {
			return 1;
		}
    return 1 // add tiebreaker here
  });

  if (updateChange) {
    calcChanges();
  }

  loadStandings();
}

function calcChanges() {
  // implement change between positions
}

// first tiebreaker scenario
function headToHead(team1, team2) {
	const record = isMen ? mensHTH : womensHTH;
	const team1Wins = record[team1][team2].wins;
	const team2Wins = record[team2][team1].wins;
	return team1Wins > team2Wins ? -1 :
				 team1Wins < team2Wins ?  1 : compareToTopSeed(team1, team2, gender);
}

// second tiebreaker scenario
function compareToTopSeed(team1, team2) {
	const hth = isMen ? mensHTH : womensHTH;
	const record = isMen ? mensRecords : womensRecords;
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
	const ratings = isMen ? mensRatings : womensRatings;
	return ratings[team1] < ratings[team2] ? -1 :
				 ratings[team1] > ratings[team2] ?  1 :
				 // if they're somehow still tied, do a coin flip
				 (Math.floor(Math.random() * 2) == 0) ? -1 : 1;
}

// records
const mensStandings = [
  {school: 'Penn',change: 0},
  {school: 'Yale', change: 0},
  {school: 'Dartmouth', change: 0},
  {school:'Brown', change: 0},
  {school: 'Princeton', change:0},
  {school: 'Harvard', change:0},
  {school: 'Cornell', change: 0},
  {school:'Columbia', change: 0}
];

const womensStandings = [
  {school: 'Penn',change: 0},
  {school: 'Yale', change: 0},
  {school: 'Dartmouth', change: 0},
  {school:'Brown', change: 0},
  {school: 'Princeton', change:0},
  {school: 'Harvard', change:0},
  {school: 'Cornell', change: 0},
  {school:'Columbia', change: 0}
];

const mensRecords = {
	penn: { wins: 3, losses: 4},
	yale: { wins: 7, losses: 1},
	harvard: { wins: 5, losses: 2},
	princeton: { wins: 5, losses: 3},
	cornell: { wins: 5, losses: 3},
	brown: { wins: 3, losses: 5},
	dartmouth: { wins: 2, losses: 6},
	columbia: { wins: 1, losses: 7},
}

const womensRecords = {
	penn: { wins: 6, losses: 1},
	yale: { wins: 5, losses: 3},
	harvard: { wins: 5, losses: 3},
	princeton: { wins: 5, losses: 2},
	cornell: { wins: 3, losses: 5},
	brown: { wins: 1, losses: 7},
	dartmouth: { wins: 3, losses: 4},
	columbia: { wins: 3, losses: 5}
}

// head-to-head records
// head-to-head records
const mensHTH = {
	harvard : {
    penn: { wins: 1, losses: 0 },
    yale: { wins: 2, losses: 0 },
    columbia: { wins: 1, losses: 0 },
    brown: { wins: 1, losses: 1 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 1, losses: 0 },
    dartmouth: { wins: 1, losses: 1 }
  },
	penn : {
    harvard: { wins: 0, losses: 1 },
    yale: { wins: 0, losses: 1 },
    columbia: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 1 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 1, losses: 0 }
  },
	yale : {
    harvard: { wins: 0, losses: 2 },
    penn: { wins: 1, losses: 0 },
    columbia: { wins: 1, losses: 0 },
    brown: { wins: 2, losses: 0 },
    cornell: { wins: 1, losses: 0 },
    princeton: { wins: 1, losses: 0 },
    dartmouth: { wins: 2, losses: 0 }
  },
	columbia : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 1, losses: 1 },
    yale: { wins: 0, losses: 1 },
    brown: { wins: 0, losses: 1 },
    cornell: { wins: 1, losses: 1 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 1, losses: 0 }
  },
	brown : {
    harvard: { wins: 1, losses: 1 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 0, losses: 2 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 1, losses: 0 },
    dartmouth: { wins: 1, losses: 1 }
  },
	cornell : {
    harvard: { wins: 0, losses: 2 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 0, losses: 1 },
    columbia: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 0 },
    princeton: { wins: 1, losses: 1 },
    dartmouth: { wins: 1, losses: 0 }
  },
	princeton : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 1, losses: 0 },
    columbia: { wins: 1, losses: 1 },
    brown: { wins: 0, losses: 1 },
    cornell: { wins: 1, losses: 1 },
    dartmouth: { wins: 0, losses: 1 }
  },
	dartmouth : {
    harvard: { wins: 0, losses: 2 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 0, losses: 2 },
    columbia: { wins: 0, losses: 1 },
    brown: { wins: 1, losses: 1 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 1, losses: 0 }
  }
}

const womensHTH = {
	princeton : {
    penn: { wins: 2, losses: 0 },
    harvard: { wins: 1, losses: 0 },
    yale: { wins: 0, losses: 1 },
    dartmouth: { wins: 1, losses: 0 },
    brown: { wins: 1, losses: 0 },
    columbia: { wins: 2, losses: 0 },
    cornell: { wins: 2, losses: 0 }
  },
	penn : {
    princeton: { wins: 0, losses: 2 },
    harvard: { wins: 1, losses: 0 },
    yale: { wins: 1, losses: 0 },
    dartmouth: { wins: 1, losses: 0 },
    brown: { wins: 1, losses: 0 },
    columbia: { wins: 2, losses: 0 },
    cornell: { wins: 2, losses: 0 }
  },
	harvard : {
    princeton: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 1, losses: 1 },
    dartmouth: { wins: 1, losses: 1 },
    brown: { wins: 2, losses: 0 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 0 }
  },
	yale : 	{
    princeton: { wins: 1, losses: 0 },
    penn: { wins: 0, losses: 1 },
    harvard: { wins: 1, losses: 1 },
    dartmouth: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 1 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 0 }
  },
	dartmouth : {
    princeton: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 1 },
    harvard: { wins: 1, losses: 1 },
    yale: { wins: 1, losses: 1 },
    brown: { wins: 2, losses: 0 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 0 }
  },
	columbia : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 0, losses: 1 },
    brown: { wins: 0, losses: 1 },
    cornell: { wins: 1, losses: 1 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 0, losses: 1 }
  },
	brown : {
    harvard: { wins: 0, losses: 2 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 1, losses: 1 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 0, losses: 1 },
    dartmouth: { wins: 0, losses: 2 }
  },
	cornell : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 0, losses: 1 },
    columbia: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 0 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 0, losses: 1 }
  }
}
	//data from https://ivyleague.com/standings.aspx?standings=1151

//schedules

const scheduleM = {
  mar01: [
    { home: 'Brown', away: 'Columbia'},
    { home: 'Yale', away: 'Cornell'},
    { home: 'Dartmouth', away: 'Princeton'},
    { home: 'Harvard', away: 'Penn'}
  ],
  mar02: [
    { home: 'Brown', away: 'Cornell'},
    { home: 'Yale', away: 'Columbia'},
    { home: 'Dartmouth', away: 'Penn'},
    { home: 'Harvard', away: 'Princeton'}
  ],
  mar08: [
    { home: 'Princeton', away: 'Brown'},
    { home: 'Columbia', away: 'Dartmouth'},
    { home: 'Cornell', away: 'Harvard'},
    { home: 'Penn', away: 'Yale'}
  ],
  mar09: [
    { home: 'Penn', away: 'Brown'},
    { home: 'Princeton', away: 'Yale'},
    { home: 'Columbia', away: 'Harvard'},
    { home: 'Cornell', away: 'Dartmouth'}
  ]
}

// TODO: I can't find games listed for March 2 or 9 for women??
const scheduleW = {
  mar01: [
    { home: 'Cornell', away: 'Yale'},
    { home: 'Princeton', away: 'Dartmouth'},
    { home: 'Columbia', away: 'Brown'},
    { home: 'Penn', away: 'Harvard'}
  ],
  mar02: [
    { home: 'Brown', away: 'Cornell'},
    { home: 'Yale', away: 'Columbia'},
    { home: 'Dartmouth', away: 'Penn'},
    { home: 'Harvard', away: 'Princeton'}
  ],
  mar08: [
    { home: 'Yale', away: 'Penn'},
    { home: 'Brown', away: 'Princeton'},
    { home: 'Dartmouth', away: 'Columbia'},
    { home: 'Harvard', away: 'Cornell'}
  ],
  mar09: [
    { home: 'Penn', away: 'Brown'},
    { home: 'Princeton', away: 'Yale'},
    { home: 'Columbia', away: 'Harvard'},
    { home: 'Cornell', away: 'Dartmouth'}
  ]
}
