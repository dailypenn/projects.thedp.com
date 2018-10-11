var chartreuse = "#dfdd50";
var cactus = "#455932"
var mint = "#bfceb6";
var olive = "#848141";
var thistle = "#c4a4be";


var duboisPie = c3.generate({
  bindto: '#duboisPie',
  data: {
    columns: [
      ['Freshman', 0.3],
      ['Sophomore', 0.28],
      ['Junior', 0.22],
      ['Senior', 0.2]
    ],
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
    type: 'pie',
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var kcechPie = c3.generate({
  bindto: '#kcechPie',
  data: {
    columns: [
      ['Freshman', 0.87],
      ['Sophomore', 0.09],
      ['Junior', 0.02],
      ['Senior', 0.02]
    ],
    type: 'pie',
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var gregoryPie = c3.generate({
  bindto: '#gregoryPie',
  data: {
    columns: [
      ['Freshman', 0.57],
      ['Sophomore', 0.2],
      ['Junior', 0.18],
      ['Senior', 0.05]
    ],
    type: 'pie',
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
    type: 'pie',
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var stoufferPie = c3.generate({
  bindto: '#stoufferPie',
  data: {
    columns: [
      ['Freshman', 0.25],
      ['Sophomore', 0.37],
      ['Junior', 0.18],
      ['Senior', 0.2]
    ],
    type: 'pie',
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
    type: 'pie',
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var nchPie = c3.generate({
  bindto: '#nchPie',
  data: {
    columns: [
      ['Freshman', 0.32],
      ['Sophomore', 0.41],
      ['Junior', 0.22],
      ['Senior', 0.05]
    ],
    type: 'pie',
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
    type: 'pie',
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var harnwellPie = c3.generate({
  bindto: '#harnwellPie',
  data: {
    columns: [
      ['Sophomore', 0.48],
      ['Junior', 0.28],
      ['Senior', 0.24]
    ],
    type: 'pie',
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
    type: 'pie',
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var harrisonPie = c3.generate({
  bindto: '#harrisonPie',
  data: {
    columns: [
      ['Sophomore', 0.51],
      ['Junior', 0.24],
      ['Senior', 0.25]
    ],
    type: 'pie',
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
    type: 'pie',
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var rodinPie = c3.generate({
  bindto: '#rodinPie',
  data: {
    columns: [
      ['Sophomore', 0.41],
      ['Junior', 0.27],
      ['Senior', 0.32]
    ],
    type: 'pie',
    colors: {
      Freshman: cactus,
      Sophomore: chartreuse,
      Junior: mint,
      Senior: olive
    },
    type: 'pie',
  },
  pie: {
    label: {
      show: false
    }
  },
  size: {
    width: 150,
    height: 200
  }
});

var duboisBar = c3.generate({
  bindto: "#duboisBar",
  data: {
    columns: [
      ['Number of Rooms', 7, 24, 108, 20],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [mint, olive, chartreuse, cactus];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Single', 'Double', 'Triple', 'Quad'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 7
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})

var kcechBar = c3.generate({
  bindto: "#kcechBar",
  data: {
    columns: [
      ['Number of Rooms', 24, 310],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [mint, olive, chartreuse, cactus];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Single', 'Double'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 7
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})

var gregoryBar = c3.generate({
  bindto: "#gregoryBar",
  data: {
    columns: [
      ['Number of Rooms', 11, 30, 200],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [mint, olive, chartreuse, cactus];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Single', 'Double', 'Quad'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 7
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})

var stoufferBar = c3.generate({
  bindto: "#stoufferBar",
  data: {
    columns: [
      ['Number of Rooms', 119, 162],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [mint, olive, chartreuse, cactus];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Single', 'Double'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 7
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})

var nchBar = c3.generate({
  bindto: "#nchBar",
  data: {
    columns: [
      ['Number of Rooms', 8, 54, 164, 50, 78],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [olive, chartreuse, cactus, mint, thistle];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Double', 'Triple', 'Quad', '5 Person', '6 Person'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 15
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})

var harnwellBar = c3.generate({
  bindto: "#harnwellBar",
  data: {
    columns: [
      ['Number of Rooms', 40, 142, 132, 456],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [mint, olive, chartreuse, cactus];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Single', 'Double', 'Triple', 'Quad'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 7
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})

var harrisonBar = c3.generate({
  bindto: "#harrisonBar",
  data: {
    columns: [
      ['Number of Rooms', 76, 204, 99, 404],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [mint, olive, chartreuse, cactus];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Single', 'Double', 'Triple', 'Quad'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 7
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})

var rodinBar = c3.generate({
  bindto: "#rodinBar",
  data: {
    columns: [
      ['Number of Rooms', 38, 158, 114, 440],
    ],
    colors: {
      'Number of Rooms': '#000000'
    },
    color: function (c, data) {
      var colors = [mint, olive, chartreuse, cactus];
      if (data.index !== undefined) return colors[data.index];
      return c;
    },
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Single', 'Double', 'Triple', 'Quad'],
      tick: {
        rotate: 50,
        multiline: false
      }
    }
  },
  padding: {
    left: 28,
    right: 7
  },
  legend: {
    show: false
  },
  size: {
    width: 155,
    height: 200
  }
})
