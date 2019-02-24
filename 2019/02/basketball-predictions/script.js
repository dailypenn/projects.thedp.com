var isMen = true;

document.addEventListener("DOMContentLoaded", () => {
  // initially load men's data
  loadData();
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
function loadMatches(date, dateName) {
  const schedule = isMen ? scheduleM : scheduleW;
  date.forEach((match, i) => {
    const game = schedule[dateName][i];
    const away = match.getElementsByClassName('away')[0];
    away.getElementsByClassName('team-name')[0].innerHTML = game.away;
    away.getElementsByClassName('record')[0].innerHTML = getRecord(game.away.toLowerCase());
    away.getElementsByClassName('logo')[0].src = `assets/${game.away.toLowerCase()}.svg`;
    away.getElementsByClassName('win-btn')[0].setAttribute('data-team', game.away.toLowerCase());
    const home = match.getElementsByClassName('home')[0];
    home.getElementsByClassName('team-name')[0].innerHTML = game.home;
    home.getElementsByClassName('record')[0].innerHTML = getRecord(game.home.toLowerCase());
    home.getElementsByClassName('logo')[0].src = `assets/${game.home.toLowerCase()}.svg`;
    home.getElementsByClassName('win-btn')[0].setAttribute('data-team', game.home.toLowerCase());
  });
}

function loadStandings() {
  const standings = isMen ? mensStandings : womensStandings;
  standings.forEach(i => {
    const ranking = document.getElementsByClassName('standings-table')[standings.indexOf(i)];
    ranking.getElementsByClassName('rank-cell')[0].innerHTML = standings.indexOf(i)+1;
    const span = `<span><img class="img-fluid logo-img" src="assets/${i.toLowerCase()}.svg"></span>`;
    ranking.getElementsByClassName('school-cell')[0].innerHTML = span+i;
  });
}

/* Get a given school's record */
// TODO: what is the decimal value that is on the page initially?
function getRecord(school) {
  const records = isMen ? mensRecords : womensRecords;
  return `(${records[school].wins}-${records[school].losses})`;
}

/* Sets up event listeners on all of the win buttons */
function createWinListeners() {
  const btns = Array.from(document.getElementsByClassName('win-btn'));
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const match = e.target.parentElement.parentElement;
      const home = e.target.parentElement.classList.contains('home');
      const other = match.getElementsByClassName(home ? 'away' : 'home')[0];
      const losing = other.getElementsByClassName('win-btn')[0];
      const initialClick = !e.target.classList.contains('winning') && !losing.classList.contains('winning');
      const winner = e.target.parentElement.getElementsByClassName('team-name')[0].innerHTML.toLowerCase()
      const loser = other.getElementsByClassName('team-name')[0].innerHTML.toLowerCase();
      console.log(loser);
      console.log(winner);
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
  console.log(initialClick);

  if (initialClick) {
    record[winner].wins+=1;
    record[loser].losses+=1;
  } else {
    record[winner].wins+=1;
    record[winner].losses-=1;
    record[loser].wins-=1
    record[loser].losses+=1;
  }

  console.log(mensRecords);
}

// records

const mensStandings = ['Penn','Yale','Dartmouth','Brown','Princeton','Harvard','Cornell','Columbia'];

const womensStandings = ['Brown','Dartmouth','Penn','Yale','Columbia','Harvard','Cornell','Princeton'];

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
	dartmouth: { mar01: "princeton", mar02: "penn", mar08: "columbia", mar09: "cornell"},
	columbia: { mar01: "brown", mar02: "yale", mar08: "dartmouth", mar09: "harvard"},
}

const womensSchedule = {
	penn: { mar01: "harvard", mar02: "dartmouth", mar08: "yale", mar09: "brown"},
	yale: { mar01: "cornell", mar02: "columbia", mar08: "penn", mar09: "princeton"},
	harvard: { mar01: "penn", mar02: "princeton", mar08: "cornell", mar09: "columbia"},
	princeton: { mar01: "dartmouth", mar02: "harvard", mar08: "brown", mar09: "yale"},
	cornell: { mar01: "yale", mar02: "brown", mar08: "harvard", mar09: "dartmouth"},
	brown: { mar01: "columbia", mar02: "cornell", mar08: "princeton", mar09: "penn"},
	dartmouth: { mar01: "princeton", mar02: "penn", mar08: "columbia", mar09: "cornell"},
	columbia: { mar01: "yale", mar02: "brown", mar08: "harvard", mar09: "dartmouth"},
}

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
