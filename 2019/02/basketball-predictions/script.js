var isMen = true;
var mensOriginalStandings = []
var womensOriginalStandings = []
document.addEventListener("DOMContentLoaded", () => {
  // initially load men's data
  loadData();
  updateStanding(false)
  setMenOriginalStandings();
  loadStandings();

  // create listeners for win buttons
  createWinListeners();
  tiebreakerCardSetup();

  // add listener to toggle team data based on user selection
  const toggle = document.getElementById('toggle');
	toggle.addEventListener('change', (e) => {
		toggleTeam();
	});
});

/* Load in data based on given team and toggle banner colors */
function toggleTeam() {
  isMen = !isMen;
  updateStanding(false)
  if (!isMen) {
    setWomensOriginalStandings();
  }
  resetStats();
  loadStandings();
  loadData();
  const btns = Array.from(document.getElementsByClassName('win-btn'));
  btns.forEach(btn => {
    btn.classList.remove('winning');
    btn.classList.toggle('women-btn');
    btn.innerHTML = 'WIN?';
  })
  document.getElementById('top-section').classList.toggle('women-header');
  document.getElementById('top-section-overlap').classList.toggle('women');
  document.getElementById('standings-header').classList.toggle('women');
  document.getElementById('top-row').classList.toggle('women-accent');
  document.getElementsByClassName('tiebreakers-card')[0].classList.toggle('women-border');
}

/* Load in match data by date */
function loadData() {
  const matches = Array.from(document.getElementsByClassName('match'));
  loadMatches(matches.slice(0, 4), 'mar01');
  loadMatches(matches.slice(4, 8), 'mar02');
  loadMatches(matches.slice(8, 12), 'mar08');
  loadMatches(matches.slice(12), 'mar09');
}

function setMenOriginalStandings() {
  mensStandings.forEach(team => {
    mensOriginalStandings.push({school: team.school, change: 0});
  })
}

function setWomensOriginalStandings() {
  womensOriginalStandings = []
  womensStandings.forEach(team => {
    womensOriginalStandings.push({school: team.school, change: 0});
  })
}

/* Populate match tables with home and away schools and their records */
function loadMatches(matches, dateName) {
  const schedule = isMen ? scheduleM : scheduleW;
  matches.forEach((match, i) => {
    const game = schedule[dateName][i];
    const away = match.getElementsByClassName('away')[0];
    away.getElementsByClassName('team-name')[0].innerHTML = game.away;
    away.getElementsByClassName('record')[0].innerHTML = `(${getRecord(game.away.toLowerCase())})`;
    away.getElementsByClassName('logo')[0].src = `assets/${game.away.toLowerCase()}${isMen ? '' : '-w'}.svg`;
    away.getElementsByClassName('logo')[0].alt = game.away;
    away.getElementsByClassName('win-btn')[0].setAttribute('data-team', game.away.toLowerCase());
    const home = match.getElementsByClassName('home')[0];
    home.getElementsByClassName('team-name')[0].innerHTML = game.home;
    home.getElementsByClassName('record')[0].innerHTML = `(${getRecord(game.home.toLowerCase())})`;
    home.getElementsByClassName('logo')[0].src = `assets/${game.home.toLowerCase()}${isMen ? '' : '-w'}.svg`;
    home.getElementsByClassName('logo')[0].alt = game.home;
    home.getElementsByClassName('win-btn')[0].setAttribute('data-team', game.home.toLowerCase());
  });
}

function loadStandings() {
  const standings = isMen ? mensStandings : womensStandings;
  const rows = document.getElementsByClassName('standings-table');
  standings.forEach((standing, i) => {
    rows[i].getElementsByClassName('rank-cell')[0].innerHTML = i+1;
    const span = `<span><img class="img-fluid logo-img" alt="${standing.school}" src="assets/${standing.school.toLowerCase()}${isMen ? '' : '-w'}.svg"></span>`;
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
function getRecord(school) {
  const records = isMen ? mensRecords : womensRecords;
  return `${records[school].wins}-${records[school].losses}`;
}

function resetStats() {
  mensStandings = []
  womensStandings = []
  mensOriginalStandings.forEach(team => {
    mensStandings.push({school: team.school, change: 0});
  })

  womensOriginalStandings.forEach(team => {
    womensStandings.push({school: team.school, change: 0});
  })

  mensRecords = Object.assign(mensOriginalRecords);
  womensRecords = Object.assign(womensOriginalRecords);
  mensHTH = Object.assign(mensOriginalHTH);
  womensHTH = Object.assign(womensOriginalHTH);
}

/* Sets up event listeners on all of the win buttons */
function createWinListeners() {
  const btns = Array.from(document.getElementsByClassName('win-btn'));
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('winning')) { return; }

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

function tiebreakerCardSetup() {
  const card = document.getElementById('tiebreaker-card');
  const nextbtn = document.getElementById('next-btn');
  const prevbtn = document.getElementById('prev-btn');
  const number = document.getElementsByClassName('number')[0];
  const text = ["Head-to-head competition, in which the higher seed goes to the team that has won the most games against the other team in the tie.",
                "If a tie still exists, it will be broken by comparing each team's record against the highest seed outside of the tie and continuing through the full league standings if needed. If there's a group of tied teams, the combined records are used.",
                "Next, an average of the most recent ratings indices (Sagarin, Ken Pom, BPI, and NCAA RPI for the men; Sagarin/RPIratings.com and NCAA RPI for the women) will be used to determine the higher seed.",
                "If a tie still persists, a draw will be conducted by the Executive Director. (Our tool simulates a coin flip for this case.)"];
  var i = 0;
  nextbtn.addEventListener('click', () => {
    if (i < text.length - 1) {
      i++;
      card.innerHTML=text[i];
      number.innerHTML = i + 1;
    }
  });

  prevbtn.addEventListener('click', () => {
    if (i > 0) {
      i--;
      card.innerHTML=text[i];
      number.innerHTML = i + 1;
    }
  });
}

function updateScore(winner, loser, initialClick) {
  winner = winner.toLowerCase();
  loser = loser.toLowerCase();
  const record = isMen ? mensRecords : womensRecords;
  const hth = isMen ? mensHTH : womensHTH;

  if (initialClick) {
    record[winner].wins += 1;
    record[loser].losses += 1;
    hth[winner][loser].wins += 1;
    hth[loser][winner].losses += 1;
  } else {
    record[winner].wins += 1;
    record[winner].losses -= 1;
    record[loser].wins -= 1
    record[loser].losses += 1;
    hth[winner][loser].wins += 1;
    hth[winner][loser].losses -= 1;
    hth[loser][winner].losses += 1;
    hth[loser][winner].wins -= 1;
  }

  updateStanding(true);
  loadData();
  loadStandings();
}

function updateStanding(updateChange) {
  const standings = isMen ? mensStandings : womensStandings;
  const record = isMen ? mensRecords : womensRecords;
  const original = isMen ? mensOriginalStandings : womensOriginalStandings;
  const previousStandings = original.slice(0);

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
    return headToHead(team1, team2, previousStandings);
  });

  if (updateChange) {
    calcChanges();
  }
}

function calcChanges() {
  // implement change between positions
  const standings = isMen ? mensStandings : womensStandings;
  const original = isMen ? mensOriginalStandings : womensOriginalStandings;
  for (var i = 0; i < standings.length; i++) {
    for (var j = 0; j < original.length; j++) {
      if (standings[i].school === original[j].school) {
        standings[i].change = j - i;
      }
    }
  }
}

// first tiebreaker scenario
function headToHead(team1, team2, previousStandings) {
  team1 = team1.school.toLowerCase();
  team2 = team2.school.toLowerCase();
	const record = isMen ? mensHTH : womensHTH;
	const team1Wins = record[team1][team2].wins;
	const team2Wins = record[team2][team1].wins;
	return team1Wins > team2Wins ? -1 :
				 team1Wins < team2Wins ?  1 : compareToTopSeed(team1, team2, previousStandings);
}

// second tiebreaker scenario
function compareToTopSeed(team1, team2, previousStandings) {
	const hth = isMen ? mensHTH : womensHTH;
	const record = isMen ? mensRecords : womensRecords;

  previousStandings.forEach((team, i) => {
    team = team.school.toLowerCase();
    if (team === team1 || team === team2) return;

    var team1Wins = hth[team1][team].wins;
    var team2Wins = hth[team2][team].wins;

    // check if this team has the same record as any other teams
    const teamWins = record[team].wins;
    const teamLosses = record[team].losses;

    previousStandings.forEach(compTeam => {
      compTeam = compTeam.school.toLowerCase();
      if (compTeam === team || compTeam === team1 || compTeam === team2) return;

      // if so, we need to compare against the combined records
      if (teamWins == record[compTeam].wins && teamLosses == record[compTeam].losses) {
        team1Wins += hth[team1][compTeam].wins;
        team2Wins += hth[team2][compTeam].wins;
      }
    })

    // check if one team has done better against others
    if (team1Wins > team2Wins) {
      return -1;
    } else if (team1Wins < team2Wins) {
      return 1;
    }
  })
	// if we compare all teams and they're still the same, go to the third tiebreaker
	return compareRatings(team1, team2);
}

// third tiebreaker scenario
function compareRatings(team1, team2) {
	const ratings = isMen ? mensRatings : womensRatings;
	return ratings[team1] < ratings[team2] ? -1 :
				 ratings[team1] > ratings[team2] ?  1 :
				 // if they're somehow still tied, do a coin flip
				 (Math.floor(Math.random() * 2) == 0) ? -1 : 1;
}

// records
var mensStandings = [
  {school: 'Penn',change: 0},
  {school: 'Yale', change: 0},
  {school: 'Dartmouth', change: 0},
  {school:'Brown', change: 0},
  {school: 'Princeton', change:0},
  {school: 'Harvard', change:0},
  {school: 'Cornell', change: 0},
  {school:'Columbia', change: 0}
];

var womensStandings = [
  {school: 'Penn',change: 0},
  {school: 'Yale', change: 0},
  {school: 'Dartmouth', change: 0},
  {school:'Brown', change: 0},
  {school: 'Princeton', change:0},
  {school: 'Harvard', change:0},
  {school: 'Cornell', change: 0},
  {school:'Columbia', change: 0}
];

var mensRecords = {
	penn: { wins: 4, losses: 6},
	yale: { wins: 8, losses: 2},
	harvard: { wins: 7, losses: 3},
	princeton: { wins: 7, losses: 3},
	cornell: { wins: 5, losses: 5},
	brown: { wins: 5, losses: 5},
	dartmouth: { wins: 2, losses: 8},
	columbia: { wins: 2, losses: 8}
}

const mensOriginalRecords = {
  penn: { wins: 4, losses: 6},
	yale: { wins: 8, losses: 2},
	harvard: { wins: 7, losses: 3},
	princeton: { wins: 7, losses: 3},
	cornell: { wins: 5, losses: 5},
	brown: { wins: 5, losses: 5},
	dartmouth: { wins: 2, losses: 8},
	columbia: { wins: 2, losses: 8}
}

var womensRecords = {
  penn: { wins: 8, losses: 2},
	yale: { wins: 5, losses: 5},
	harvard: { wins: 7, losses: 3},
	princeton: { wins: 8, losses: 2},
	cornell: { wins: 3, losses: 7},
	brown: { wins: 1, losses: 9},
	dartmouth: { wins: 5, losses: 5},
	columbia: { wins: 3, losses: 7}
}

const womensOriginalRecords = {
	penn: { wins: 8, losses: 2},
	yale: { wins: 5, losses: 5},
	harvard: { wins: 7, losses: 3},
	princeton: { wins: 8, losses: 2},
	cornell: { wins: 3, losses: 7},
	brown: { wins: 1, losses: 9},
	dartmouth: { wins: 5, losses: 5},
	columbia: { wins: 3, losses: 7}
}

// head-to-head records
var mensHTH = {
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
    dartmouth: { wins: 0, losses: 1 }
  },
	brown : {
    harvard: { wins: 1, losses: 1 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 0, losses: 2 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 1, losses: 0 },
    dartmouth: { wins: 2, losses: 0 }
  },
	cornell : {
    harvard: { wins: 1, losses: 0 },
    penn: { wins: 1, losses: 1 },
    yale: { wins: 0, losses: 1 },
    columbia: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 0 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 1, losses: 0 }
  },
	princeton : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 2, losses: 0 },
    yale: { wins: 0, losses: 1 },
    columbia: { wins: 2, losses: 0 },
    brown: { wins: 0, losses: 1 },
    cornell: { wins: 2, losses: 0 },
    dartmouth: { wins: 1, losses: 0 }
  },
	dartmouth : {
    harvard: { wins: 1, losses: 1 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 0, losses: 2 },
    columbia: { wins: 1, losses: 0 },
    brown: { wins: 0, losses: 2 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 0, losses: 1 }
  }
}

const mensOriginalHTH = {
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
    dartmouth: { wins: 0, losses: 1 }
  },
	brown : {
    harvard: { wins: 1, losses: 1 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 0, losses: 2 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 1, losses: 0 },
    dartmouth: { wins: 2, losses: 0 }
  },
	cornell : {
    harvard: { wins: 1, losses: 0 },
    penn: { wins: 1, losses: 1 },
    yale: { wins: 0, losses: 1 },
    columbia: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 0 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 1, losses: 0 }
  },
	princeton : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 2, losses: 0 },
    yale: { wins: 0, losses: 1 },
    columbia: { wins: 2, losses: 0 },
    brown: { wins: 0, losses: 1 },
    cornell: { wins: 2, losses: 0 },
    dartmouth: { wins: 1, losses: 0 }
  },
	dartmouth : {
    harvard: { wins: 1, losses: 1 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 0, losses: 2 },
    columbia: { wins: 1, losses: 0 },
    brown: { wins: 0, losses: 2 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 0, losses: 1 }
  }
}

var womensHTH = {
	princeton : {
    penn: { wins: 1, losses: 1 },
    harvard: { wins: 1, losses: 0 },
    yale: { wins: 0, losses: 1 },
    dartmouth: { wins: 1, losses: 0 },
    brown: { wins: 1, losses: 0 },
    columbia: { wins: 2, losses: 0 },
    cornell: { wins: 2, losses: 0 }
  },
	penn : {
    princeton: { wins: 1, losses: 1 },
    harvard: { wins: 0, losses: 1},
    yale: { wins: 1, losses: 0 },
    dartmouth: { wins: 1, losses: 0 },
    brown: { wins: 1, losses: 0 },
    columbia: { wins: 2, losses: 0 },
    cornell: { wins: 2, losses: 0 }
  },
	harvard : {
    princeton: { wins: 0, losses: 1},
    penn: { wins: 1, losses: 0},
    yale: { wins: 1, losses: 1 },
    dartmouth: { wins: 2, losses: 0 },
    brown: { wins: 2, losses: 0 },
    columbia: { wins: 0, losses: 1 },
    cornell: { wins: 1, losses: 0 }
  },
	yale : 	{
    princeton: { wins: 1, losses: 0 },
    penn: { wins: 0, losses: 1},
    harvard: { wins: 1, losses: 1 },
    dartmouth: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 1 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 0, losses: 1 }
  },
	dartmouth : {
    princeton: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 1 },
    harvard: { wins: 0, losses: 2 },
    yale: { wins: 1, losses: 1 },
    brown: { wins: 2, losses: 0 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 0 }
  },
	columbia : {
    harvard: { wins: 1, losses: 0 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 0, losses: 1 },
    brown: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 1 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 0, losses: 1 }
  },
	brown : {
    harvard: { wins: 0, losses: 2 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 1, losses: 1 },
    columbia: { wins: 0, losses: 1 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 0, losses: 1 },
    dartmouth: { wins: 0, losses: 2 }
  },
	cornell : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 1, losses: 0 },
    columbia: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 0 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 0, losses: 1 }
  }
}

const womensOriginalHTH = {
	princeton : {
    penn: { wins: 1, losses: 1 },
    harvard: { wins: 1, losses: 0 },
    yale: { wins: 0, losses: 1 },
    dartmouth: { wins: 1, losses: 0 },
    brown: { wins: 1, losses: 0 },
    columbia: { wins: 2, losses: 0 },
    cornell: { wins: 2, losses: 0 }
  },
	penn : {
    princeton: { wins: 1, losses: 1 },
    harvard: { wins: 0, losses: 1},
    yale: { wins: 1, losses: 0 },
    dartmouth: { wins: 1, losses: 0 },
    brown: { wins: 1, losses: 0 },
    columbia: { wins: 2, losses: 0 },
    cornell: { wins: 2, losses: 0 }
  },
	harvard : {
    princeton: { wins: 0, losses: 1},
    penn: { wins: 1, losses: 0},
    yale: { wins: 1, losses: 1 },
    dartmouth: { wins: 2, losses: 0 },
    brown: { wins: 2, losses: 0 },
    columbia: { wins: 0, losses: 1 },
    cornell: { wins: 1, losses: 0 }
  },
	yale : 	{
    princeton: { wins: 1, losses: 0 },
    penn: { wins: 0, losses: 1},
    harvard: { wins: 1, losses: 1 },
    dartmouth: { wins: 1, losses: 1 },
    brown: { wins: 1, losses: 1 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 0, losses: 1 }
  },
	dartmouth : {
    princeton: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 1 },
    harvard: { wins: 0, losses: 2 },
    yale: { wins: 1, losses: 1 },
    brown: { wins: 2, losses: 0 },
    columbia: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 0 }
  },
	columbia : {
    harvard: { wins: 1, losses: 0 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 0, losses: 1 },
    brown: { wins: 1, losses: 0 },
    cornell: { wins: 1, losses: 1 },
    princeton: { wins: 0, losses: 2 },
    dartmouth: { wins: 0, losses: 1 }
  },
	brown : {
    harvard: { wins: 0, losses: 2 },
    penn: { wins: 0, losses: 1 },
    yale: { wins: 1, losses: 1 },
    columbia: { wins: 0, losses: 1 },
    cornell: { wins: 0, losses: 1 },
    princeton: { wins: 0, losses: 1 },
    dartmouth: { wins: 0, losses: 2 }
  },
	cornell : {
    harvard: { wins: 0, losses: 1 },
    penn: { wins: 0, losses: 2 },
    yale: { wins: 1, losses: 0 },
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

// averaged ratings - relative values
const mensRatings = {
	penn: 		 100,
	harvard: 	 120,
	yale: 		 140,
	princeton: 60,
	columbia:  0,
	brown: 		 80,
	cornell: 	 20,
	dartmouth: 40
}

const womensRatings = {
	princeton: 120,
	penn: 		 140,
	harvard:	 100,
	dartmouth: 60,
	yale: 		 80,
	brown: 		 0,
	columbia:  20,
	cornell: 	 40
}
