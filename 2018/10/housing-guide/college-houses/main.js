var lowerCollegeHouses = [
  {
    name: "W.E.B. Du Bois College House",
    students: 155,
    breakdown: {
      fresh: 30,
      soph: 28,
      junior:22 ,
      senior: 20
    },
    rooms: {
      singles: 7,
      doubles: 24,
      triples: 108,
      quads: 20
    },
    built: [1971],
    renovations: [
      "2009"
    ]
  },
  {
    name: "Kings Court College House",
    students: 317,
    breakdown: {
      fresh: 87,
      soph: 9,
      junior: 2,
      senior: 2
    },
    rooms: {
      singles: 24,
      doubles: 310,
    },
    built: [1915],
    renovations: [
      "2011 ($10 million)"
    ]
  },
  {
    name: "Gregory College House",
    students: 233,
    breakdown: {
      fresh: 57,
      soph: 20,
      junior: 18,
      senior: 5
    },
    rooms: {
      singles: 11,
      doubles: 30,
      quads: 200
    },
    built: [1971],
    renovations: [
      "2013 (Class of 1925)", 
      "2014 (Van Pelt)"
    ]
  },
  {
    name: "Stouffer College House",
    students: 271,
    breakdown: {
      fresh: 25,
      soph: 37,
      junior: 18,
      senior: 20
    },
    rooms: {
      singles: 119,
      doubles: 162,
    },
    built: [
      "1972 (Stouffer)",
      "1964 (Mayer Residence Hall)"
    ],
    renovations: [
      "2012"
    ]
  },
  {
    name: "New College House",
    students: 339,
    breakdown: {
      fresh: 32,
      soph: 41,
      junior: 22,
      senior: 5
    },
    rooms: {
      doubles: 24,
      triples: 108,
      quads: 20,
      fivePerson: 50,
      sixPerson: 78
    },
    built: [
      "2016 ($125 million)"
    ]
  },
]
var upperCollegeHouses = [
  {
    name:"Harnwell College House",
    students: 752,
    breakdown: {
      soph: 48,
      junior: 28,
      senior: 24
    },
    rooms: {
      singles: 40,
      doubles: 142,
      triples: 132,
      quads: 456
    },
    built: [1970],
    renovations: [
      "2002-2009 ($180 million)"
    ]
  },
  {
    name: "Harrison College House",
    students: 745,
    breakdown: {
      soph: 51,
      junior: 24,
      senior: 25
    },
    rooms: {
      singles: 76,
      doubles: 204,
      triples: 99,
      quads: 404
    },
    built: [1970],
    renovations: [
      "2002-2009 ($180 million)"
    ]
  },
  {
    name: "Rodin College House",
    students: 685,
    breakdown: {
      soph: 41,
      junior: 27,
      senior: 32
    },
    rooms: {
      singles: 38,
      doubles: 158,
      triples: 114,
      quads: 440
    },
    built: [1970],
    renovations: [
      "2002-2009 ($180 million)"
    ]
  },
]



var dubois = c3.generate({
  bindto: '#dubois',
  data: {
    columns: [
      ['Freshman', 0.3],
      ['Sophomore', 0.28],
      ['Junior', 0.22],
      ['Senior', 0.2]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});

var kcech = c3.generate({
  bindto: '#kcech',
  data: {
    columns: [
      ['Freshman', 0.87],
      ['Sophomore', 0.09],
      ['Junior', 0.02],
      ['Senior', 0.02]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});

var gregory = c3.generate({
  bindto: '#gregory',
  data: {
    columns: [
      ['Freshman', 0.57],
      ['Sophomore', 0.2],
      ['Junior', 0.18],
      ['Senior', 0.05]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});

var stouffer = c3.generate({
  bindto: '#stouffer',
  data: {
    columns: [
      ['Freshman', 0.25],
      ['Sophomore', 0.37],
      ['Junior', 0.18],
      ['Senior', 0.2]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});

var nch = c3.generate({
  bindto: '#nch',
  data: {
    columns: [
      ['Freshman', 0.32],
      ['Sophomore', 0.41],
      ['Junior', 0.22],
      ['Senior', 0.05]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});

var harnwell = c3.generate({
  bindto: '#harnwell',
  data: {
    columns: [
      ['Sophomore', 0.48],
      ['Junior', 0.28],
      ['Senior', 0.24]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});

var harrison = c3.generate({
  bindto: '#harrison',
  data: {
    columns: [
      ['Sophomore', 0.51],
      ['Junior', 0.24],
      ['Senior', 0.25]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});

var rodin = c3.generate({
  bindto: '#rodin',
  data: {
    columns: [
      ['Sophomore', 0.41],
      ['Junior', 0.27],
      ['Senior', 0.32]
    ],
    type: 'pie',
  },
  title: {
    text: 'Resident Breakdown'
  },
  size: {
    width: 250,
    height: 250
  }
});
