var rounds;

rounds = [
  //-- round 1
  [
    {
      player1: {
        name: "Player 111",
        winner: true,
        ID: 111
      },
      player2: {
        name: "Player 211",
        ID: 211
      }
    },

    {
      player1: {
        name: "Player 112",
        winner: true,
        ID: 112
      },
      player2: {
        name: "Player 212",
        ID: 212
      }
    },

    {
      player1: {
        name: "Player 113",
        winner: true,
        ID: 113
      },
      player2: {
        name: "Player 213",
        ID: 213
      }
    },

    {
      player1: {
        name: "Player 114",
        winner: true,
        ID: 114
      },
      player2: {
        name: "Player 214",
        ID: 214
      }
    },

    {
      player1: {
        name: "Player 115",
        winner: true,
        ID: 115
      },
      player2: {
        name: "Player 215",
        ID: 215
      }
    },

    {
      player1: {
        name: "Player 116",
        winner: true,
        ID: 116
      },
      player2: {
        name: "Player 216",
        ID: 216
      }
    },

    {
      player1: {
        name: "Player 117",
        winner: true,
        ID: 117
      },
      player2: {
        name: "Player 217",
        ID: 217
      }
    },

    {
      player1: {
        name: "Player 118",
        winner: true,
        ID: 118
      },
      player2: {
        name: "Player 218",
        ID: 218
      }
    },
  ],

  //-- round 2
  [

    {
      player1: {
        name: "Player 111",
        winner: true,
        ID: 111
      },
      player2: {
        name: "Player 212",
        ID: 212
      }
    },

    {
      player1: {
        name: "Player 113",
        winner: true,
        ID: 113
      },
      player2: {
        name: "Player 214",
        ID: 214
      }
    },

    {
      player1: {
        name: "Player 115",
        winner: true,
        ID: 115
      },
      player2: {
        name: "Player 216",
        ID: 216
      }
    },

    {
      player1: {
        name: "Player 117",
        winner: true,
        ID: 117
      },
      player2: {
        name: "Player 218",
        ID: 218
      }
    },
  ],

  //-- round 3
  [

    {
      player1: {
        name: "Player 111",
        winner: true,
        ID: 111
      },
      player2: {
        name: "Player 113",
        ID: 113
      }
    },

    {
      player1: {
        name: "Player 115",
        winner: true,
        ID: 115
      },
      player2: {
        name: "Player 218",
        ID: 218
      }
    },
  ],

  //-- round 4
  [

    {
      player1: {
        name: "Player 113",
        winner: true,
        ID: 113
      },
      player2: {
        name: "Player 218",
        winner: true,
        ID: 218
      },
    },
  ],

  //-- Champion
  [

    {
      player1: {
        name: "Player 113",
        winner: true,
        ID: 113
      },
    },
  ],

];

var titles = ['round 1', 'round 2', 'round 3', 'round 4', 'round 5'];

$(".brackets").brackets({
  rounds: false,
  titles: false,
  color_title: 'black',
  border_color: 'black',
  color_player: 'black',
  bg_player: 'white',
  color_player_hover: 'black',
  bg_player_hover: 'white',
  border_radius_player: '0px',
  border_radius_lines: '0px',
});