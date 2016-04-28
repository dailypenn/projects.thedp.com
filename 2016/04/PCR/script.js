/**
 * Chart Scripts for Penn Course Review Project.
 * Written by Andrew Fischer <afischer15 AT mac DOT com> , Mar. 2016
 * for The Daily Pennsylvanian. All rights reserved. 
 *
 * Hi there! If it is the future and you are looking at this, it probably
 * means you want to make some changes or add some data. All of these charts will
 * update automatically when data is added to the .csv files in the Data folder,
 * except for two things:
 *   - You will have to manually add a new date to each chart (sorry, didn't automate that)
 *   - The LANGUAGE COMPARISON CHART has values dropped right into the JS. Idk why I 
 *     did that, but maybe consider moving it out?
 *
 * I tried to document and organize this as best I could. Take a look at the C3JS 
 * documentation for most things, except the bubble chart. That uses a D3 force layout.
**/

/**
 * THEME STUFF
 **/
var RED    = "#da1924";
var BLUE   = "#2ac1dd";
var GREEN  = "#98A62F";
var YELLOW = "#ffe40b";
var ORANGE = "#F49F00";

/**
 *
 * CODE FOR SCHOOL COMPARISON CHART
 *
 **/
var avgQual = function() {
  c3.generate({
    bindto: '#school-comp-chart',
    data: {
      url: '/2016/04/PCR/data/schoolComp/school_course-qual.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='avgQual()']").addClass('active');
  $("[onclick='avgDiff()']").removeClass('active');
  $("[onclick='avgInst()']").removeClass('active');
  $("[onclick='avgWork()']").removeClass('active');
};

var avgDiff = function() {
  c3.generate({
    bindto: '#school-comp-chart',
    data: {
      url: '/2016/04/PCR/data/schoolComp/school_diff.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='avgQual()']").removeClass('active');
  $("[onclick='avgDiff()']").addClass('active');
  $("[onclick='avgInst()']").removeClass('active');
  $("[onclick='avgWork()']").removeClass('active');
};
var avgInst = function() {
  c3.generate({
    bindto: '#school-comp-chart',
    data: {
      url: '/2016/04/PCR/data/schoolComp/school_inst-qual.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='avgQual()']").removeClass('active');
  $("[onclick='avgDiff()']").removeClass('active');
  $("[onclick='avgInst()']").addClass('active');
  $("[onclick='avgWork()']").removeClass('active');
};

var avgWork = function() {
  c3.generate({
    bindto: '#school-comp-chart',
    data: {
      url: '/2016/04/PCR/data/schoolComp/school_work.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='avgQual()']").removeClass('active');
  $("[onclick='avgDiff()']").removeClass('active');
  $("[onclick='avgInst()']").removeClass('active');
  $("[onclick='avgWork()']").addClass('active');
};

/**
 *
 *CODE FOR SECTOR COMAPRISON
 *
 **/
var sectQual = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: '/2016/04/PCR/data/sectorComp/sectors_course-quality.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='sectQual()']").addClass('active');
  $("[onclick='sectDiff()']").removeClass('active');
  $("[onclick='sectInst()']").removeClass('active');
  $("[onclick='sectWork()']").removeClass('active');
};

var sectDiff = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: '/2016/04/PCR/data/sectorComp/sectors_difficulty.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='sectQual()']").removeClass('active');
  $("[onclick='sectDiff()']").addClass('active');
  $("[onclick='sectInst()']").removeClass('active');
  $("[onclick='sectWork()']").removeClass('active');
};

var sectInst = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: '/2016/04/PCR/data/sectorComp/sectors_instructor-quality.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='sectQual()']").removeClass('active');
  $("[onclick='sectDiff()']").removeClass('active');
  $("[onclick='sectInst()']").addClass('active');
  $("[onclick='sectWork()']").removeClass('active');
};

var sectWork = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: '/2016/04/PCR/data/sectorComp/sectors_work-required.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='sectQual()']").removeClass('active');
  $("[onclick='sectDiff()']").removeClass('active');
  $("[onclick='sectInst()']").removeClass('active');
  $("[onclick='sectWork()']").addClass('active');
};
/**
 *
 * CODE FOR STEM COMPARISON CHARAT
 *
 **/
var stemQual = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: '/2016/04/PCR/data/stemComp/stem-quality.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='stemQual()']").addClass('active');
  $("[onclick='stemDiff()']").removeClass('active');
  $("[onclick='stemInst()']").removeClass('active');
  $("[onclick='stemWork()']").removeClass('active');
};

var stemDiff = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: '/2016/04/PCR/data/stemComp/stem-difficulty.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='stemQual()']").removeClass('active');
  $("[onclick='stemDiff()']").addClass('active');
  $("[onclick='stemInst()']").removeClass('active');
  $("[onclick='stemWork()']").removeClass('active');
};

var stemInst = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: '/2016/04/PCR/data/stemComp/stem-instructor.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        },
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='stemQual()']").removeClass('active');
  $("[onclick='stemDiff()']").removeClass('active');
  $("[onclick='stemInst()']").addClass('active');
  $("[onclick='stemWork()']").removeClass('active');

};

var stemWork = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: '/2016/04/PCR/data/stemComp/stem-work.csv'
    },
    color: {
      pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2']
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories: ["Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
        tick: {
          rotate: 75,
          multiline: false
        }
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }
  });
  $("[onclick='stemQual()']").removeClass('active');
  $("[onclick='stemDiff()']").removeClass('active');
  $("[onclick='stemInst()']").removeClass('active');
  $("[onclick='stemWork()']").addClass('active');
};
/**
 *
 * CODE FOR DEPARTMENT COMPARISON CHARAT
 *
 **/
 
// this is watched for a change and adjusts the chart
var metric = "Diff";

d3.csv('data/DeptData.csv', function(error, data) {
  // Set globals
  var width  = 400,
      height = 400;
  var fill = d3.scale.ordinal().range([RED, BLUE, YELLOW, GREEN])
  var svg = d3.select("#dept-comp-chart").append("svg")
    .attr("width", width)
    .attr("height", height);

// Loop through data, add difficulty as default param
  for (var j = 0; j < data.length; j++) {
    data[j].radius = +Math.pow(data[j].Difficulty, 2); // raised to 2 to make difference easier to see
    data[j].x = Math.random() * width;
    data[j].y = Math.random() * height;
  }

  // for spacing
  var padding = 15;
  var maxRadius = d3.max(_.pluck(data, 'radius'));

  // get the centers of each 
  var getCenters = function(vname, size) {
    var centers, map;
    centers = _.uniq(_.pluck(data, vname)).map(function(d) {
      return {
        name: d,
        value: 1
      };
    });
    map = d3.layout.treemap().size(size).ratio(1 / 1);
    map.nodes({
      children: centers
    });
    return centers;
  };

  var nodes = svg.selectAll("circle")
    .data(data);

  nodes.enter().append("circle")
    .attr("class", "node")
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr("r", function(d) {
      return d.radius;
    })
    .style("fill", function(d) {
      return fill(d.school);
    })
    .attr("stroke-width", 2)
    .attr("stroke", "#666")
    .on("mouseover", function(d) {
      showPopover.call(this, d);
    })
    .on("mouseout", function(d) {
      removePopovers();
    })

  var force = d3.layout.force()
    .gravity(0)
    .charge(0)
    .on("tick", tick)
    .start();



  draw('school');

  $("#dept-diff").click(function() {
    metric = "Diff";
    draw('school');
    $("#dept-diff").addClass('active');
    $("#dept-course").removeClass('active');
    $("#dept-ammt").removeClass('active');
    $("#dept-inst").removeClass('active');
  });
  $("#dept-course").click(function() {
    metric = "Course";
    draw('school');
    $("#dept-diff").removeClass('active');
    $("#dept-course").addClass('active');
    $("#dept-ammt").removeClass('active');
    $("#dept-inst").removeClass('active');
  });
  $("#dept-ammt").click(function() {
    metric = "Ammt";
    draw('school');
    $("#dept-diff").removeClass('active');
    $("#dept-course").removeClass('active');
    $("#dept-ammt").addClass('active');
    $("#dept-inst").removeClass('active');
  });
  $("#dept-inst").click(function() {
    metric = "Inst";
    draw('school');
    $("#dept-diff").removeClass('active');
    $("#dept-course").removeClass('active');
    $("#dept-ammt").removeClass('active');
    $("#dept-inst").addClass('active');
  });

  function draw(varname) {
    var centers = getCenters(varname, [400, 400]);
    force.on("tick", tick(centers, varname));
    // labels(centers)
    force.start();
  }

  function tick(centers, varname) {
    var foci = {};
    for (var i = 0; i < centers.length; i++) {
      foci[centers[i].name] = centers[i];
    }
    return function(e) {
      for (var i = 0; i < data.length; i++) {
        var o = data[i];
        var f = foci[o[varname]];
        o.y += ((f.y + (f.dy / 2)) - o.y) * e.alpha;
        o.x += ((f.x + (f.dx / 2)) - o.x) * e.alpha;
      }
      nodes.each(collide(.1))
        .transition()
        .duration(100)
        .attr('r', function(d) {
          if (metric == "Diff") {
            return Math.pow(d.Difficulty, 2.5);
          } else if (metric == "Course") {
            return Math.pow(d.CourseQuality, 2.5);
          } else if (metric == "Ammt") {
            return Math.pow(d.AmmtLearned, 2.5);
          } else if (metric == "Inst") {
            return Math.pow(d.InstQuality, 2.5);
          }
        })
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
    }
  }
  
  function removePopovers() {
    $('.popover').each(function() {
      $(this).remove();
    });
  }

  function showPopover(d) {
    $(this).popover({
      placement: 'auto top',
      container: 'body',
      trigger: 'manual',
      html: true,
      content: function() {
        return "School: " + d.school + "<br/>Department: " + d.Department +
          "<br/>Course Quality: " + d.CourseQuality + "<br/>Difficulty: " + d.Difficulty + "<br/>Amount Learned: " + d.AmmtLearned + "<br/>Instructor Quality: " + d.InstQuality;
      }
    });
    $(this).popover('show')
  }

  function collide(alpha) {
    var quadtree = d3.geom.quadtree(data);
    return function(d) {
      var r = d.radius + maxRadius + padding,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
      quadtree.visit(function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== d)) {
          var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius + padding;
          if (l < r) {
            l = (l - r) / l * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      });
    };
  }
});

/**
 *
 * LANGUAGE COMPARISON CHART
 *
 **/

c3.generate({
  bindto: '#lang-comp-chart',
  data: {
    columns: [
      ['Avg. Course Qual.', 3.953, 3.816666667, 3.564379426, 3.47, 3.457692308, 3.434880508, 3.419102564, 3.413688504, 3.4016788, 3.395666667, 3.366282051, 3.328333333, 3.28125, 3.269122405, 3.25000891, 3.210933558, 3.207371795, 3.183807692, 3.18375, 3.164480456, 3.148846855, 3.116055509, 3.091730769, 3.075000364, 3.059285996, 2.987975323, 2.964070149, 2.833305371, 2.805909091, 2.62323814],
      ['Avg. Instructor Qual.', 3.257806803, 3.8675, 3.722307082, 3.44, 3.506923077, 3.642147819, 3.586346154, 3.598342373, 3.536174915, 3.6835, 3.631538462, 3.556333333, 3.40375, 3.472466422, 3.50907218, 3.388827812, 3.299871795, 3.415785714, 3.3875, 3.3696656, 3.432141415, 3.393812137, 3.33724359, 3.407779419, 3.340734855, 3.196735098, 3.165453381, 3.079332997, 3.025, 2.891421124],
      ['Avg. Difficulty', 2.3, 2.33, 2.039791667, 0, 0, 2.6115, 3.035416667, 1.921111111, 3.063333333, 2, 2.952777778, 2.366666667, 3.169, 2.481666667, 2.295905095, 2.220668219, 2.477666667, 2.722321429, 2.365, 2.252780117, 2.101209096, 2.293796588, 2.143214286, 2.37978565, 2.422666667, 2.118872351, 2.232588515, 2.074164296, 1.709545455, 2.033828771]
    ],
    type: 'bar'
  },
  color: {
    pattern: [RED, ORANGE, BLUE, YELLOW, GREEN, '#F306BB', '#9633e2']
  },
  axis: {
    x: {
      label: {
        text: "Language",
        position: 'outer-right'
      },
      type: 'category',
      categories: ['TURK', 'YDSH', 'PRTG', 'SCND', 'PERS', 'CHIN', 'GREK', 'HEBR', 'JPAN', 'GUJR', 'SKRT', 'DTCH', 'ANEL', 'KORN', 'GRMN', 'RUSS', 'URDU', 'LATN', 'ROML', 'JWST', 'ITAL', 'FREN', 'HIND', 'SPAN', 'ARAB', 'SAST', 'AFRC', 'AFST', 'SLAV', 'EAS'],
      tick: {
        rotate: 35,
        multiline: false
      }
    },
    y: {
      label: {
        text: "Avg. Score",
        position: 'outer-top'
      }
    }
  },
  legend: {
    position: 'bottom'
  }
});

/**
 *
 * GREAT DEPRESSION CHART
 *
 **/
c3.generate({
  bindto: '#drop-chart',
  data: {
    url: '/2016/04/PCR/data/drop-data.csv'
  },
  color: {
    pattern: [RED, YELLOW, ORANGE, GREEN, BLUE, '#F306BB', '#9633e2', '#666']
  },
  axis: {
    x: {
      label: 'Semester',
      type: 'category',
      categories: ["Fall '02", "Spr. '02", "Fall '03", "Spr. '03", "Fall '04", "Spr. '04", "Fall '05", "Spr. '05", "Fall '06", "Spr. '06", "Spr. '07", "Fall '07", "Spr. '08", "Fall '08", "Spr. '09", "Fall '09", "Spr. '10", "Fall '10", "Spr. '11", "Fall '11", "Spr. '12", "Fall '12", "Spr. '13", "Fall '13", "Spr. '14", "Fall '14", "Spr. '15"],
      tick: {
        rotate: 75,
        multiline: false
      }
    },
    y: {
      label: {
        text: "Avg. Score",
        position: 'outer-top'
      },
      min: 2.3,
      max: 3.3
    }
  },
  regions: [{
    axis: 'x',
    start: 13,
    end: 14
  }, ]
});

/**
 *
 * INITIALIZATION FUNCTIONS
 *
 **/
$(document).ready(function() {
  avgQual();
  sectQual();
  stemQual();
  $('.carousel').carousel({
    pause: true,
    interval: false
  });
});