/**
 * THEME STUFF
**/
// Spring 2009 to Spring 2015

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
categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Avg. Score',
            min: 2,
            max: 3.5
          }
  }});
  $( "[onclick='avgQual()']" ).addClass('active');
  $( "[onclick='avgDiff()']" ).removeClass('active');
  $( "[onclick='avgInst()']" ).removeClass('active');
  $( "[onclick='avgWork()']" ).removeClass('active');
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
            categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Avg. Score',
            min: 2,
            max: 3.5
          }
  }});
  $( "[onclick='avgQual()']" ).removeClass('active');
  $( "[onclick='avgDiff()']" ).addClass('active');
  $( "[onclick='avgInst()']" ).removeClass('active');
  $( "[onclick='avgWork()']" ).removeClass('active');
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
            categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Avg. Score',
            min: 2,
            max: 3.5
          }
  }});
  $( "[onclick='avgQual()']" ).removeClass('active');
  $( "[onclick='avgDiff()']" ).removeClass('active');
  $( "[onclick='avgInst()']" ).addClass('active');
  $( "[onclick='avgWork()']" ).removeClass('active');
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
            categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Avg. Score',
            min: 2,
            max: 3.5
          }
  }});
  $( "[onclick='avgQual()']" ).removeClass('active');
  $( "[onclick='avgDiff()']" ).removeClass('active');
  $( "[onclick='avgInst()']" ).removeClass('active');
  $( "[onclick='avgWork()']" ).addClass('active');
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
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='sectQual()']" ).addClass('active');
  $( "[onclick='sectDiff()']" ).removeClass('active');
  $( "[onclick='sectInst()']" ).removeClass('active');
  $( "[onclick='sectWork()']" ).removeClass('active');
}

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
        categories:["S'09", 'Fall \'09', "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='sectQual()']" ).removeClass('active');
  $( "[onclick='sectDiff()']" ).addClass('active');
  $( "[onclick='sectInst()']" ).removeClass('active');
  $( "[onclick='sectWork()']" ).removeClass('active');
}

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
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='sectQual()']" ).removeClass('active');
  $( "[onclick='sectDiff()']" ).removeClass('active');
  $( "[onclick='sectInst()']" ).addClass('active');
  $( "[onclick='sectWork()']" ).removeClass('active');
}

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
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='sectQual()']" ).removeClass('active');
  $( "[onclick='sectDiff()']" ).removeClass('active');
  $( "[onclick='sectInst()']" ).removeClass('active');
  $( "[onclick='sectWork()']" ).addClass('active');
}
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
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='stemQual()']" ).addClass('active');
  $( "[onclick='stemDiff()']" ).removeClass('active');
  $( "[onclick='stemInst()']" ).removeClass('active');
  $( "[onclick='stemWork()']" ).removeClass('active');
}

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
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='stemQual()']" ).removeClass('active');
  $( "[onclick='stemDiff()']" ).addClass('active');
  $( "[onclick='stemInst()']" ).removeClass('active');
  $( "[onclick='stemWork()']" ).removeClass('active');
}

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
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='stemQual()']" ).removeClass('active');
  $( "[onclick='stemDiff()']" ).removeClass('active');
  $( "[onclick='stemInst()']" ).addClass('active');
  $( "[onclick='stemWork()']" ).removeClass('active');

}

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
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Avg. Score',
        min: 2,
        max: 3.5
      }
    }}
  );
  $( "[onclick='stemQual()']" ).removeClass('active');
  $( "[onclick='stemDiff()']" ).removeClass('active');
  $( "[onclick='stemInst()']" ).removeClass('active');
  $( "[onclick='stemWork()']" ).addClass('active');
}
/**
 *
 * CODE FOR DEPARTMENT COMPARISON CHARAT
 *
**/
var diameter = 500, //max size of the bubbles
    color    = d3.scale.category20b(); //color category

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#dept-comp-chart")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.csv("data/DeptData.csv", function(error, data){

    //convert numerical values from strings to numbers
    data = data.map(function(d){
      d.value = +Math.pow(d.Difficulty, 6); //Raise to power to scale as difference is really small
      d.School = +d.school;
      d.CourseQuality = +Math.pow(d.CourseQuality, 3); //Raise to power to scale as difference is really small
      d.AmmtLearned = +Math.pow(d.AmmtLearned, 3); //Raise to power to scale as difference is really small
      d.InstQuality = +Math.pow(d.InstQuality, 3); //Raise to power to scale as difference is really small
      return d; });

    //bubbles needs very specific format, convert data to this.
    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

    //setup the chart
    var bubbles = svg.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes)
        .enter();

    //create the bubbles and color them correctly
    bubbles.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) {

          if (d.school == "SAS") {
            return RED;
          } else if (d.school == "SEAS") {
            return YELLOW;
          } else if (d.school == "Wharton") {
            return ORANGE;
      } else  if (d.school == "Nursing"){
            return GREEN;
      } else {
            return BLUE;
      }
        });

    //format the text for each bubble, give it description
    bubbles.append("text")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d["Department"]; })
        .style({
            "fill":"white",
            "font-family":"neuzeit-grotesk, Helvetica, Arial, san-serif",
            "font-size": "12px"
        });
})

function deptDifficulty() {
  svg.selectAll("circle")
  .transition()
  .duration(750)
  .attr("r", function(d){ return d.r; })
}

function deptQuality() {
  svg.selectAll("circle")
  .transition()
  .duration(750)
  .attr("r", function(d){ return d.CourseQuality; })
};

function deptLearn() {
  svg.selectAll("circle")
  .transition()
  .duration(750)
  .attr("r", function(d){ return d.AmmtLearned; })
};

function deptInst() {
  svg.selectAll("circle")
  .transition()
  .duration(750)
  .attr("r", function(d){ return d.InstQuality; })
};


/**
 *
 * LANGUAGE COMPARISON CHART
 *
**/

c3.generate({
  bindto: '#lang-comp-chart',
    data: {
        columns: [
            ['Avg. Course Qual.', 3.953, 3.816666667, 3.564379426, 3.47, 3.457692308, 3.434880508, 3.419102564, 3.413688504, 3.4016788, 3.395666667, 3.366282051, 3.328333333, 3.28125, 3.269122405, 3.25000891, 3.210933558, 3.207371795, 3.183807692, 3.18375, 3.164480456, 3.148846855, 3.116055509, 3.091730769, 3.075000364, 3.059285996, 2.987975323, 2.964070149, 2.833305371, 2.805909091, 2.62323814,4],
            ['Avg. Instructor Qual.', 3.257806803, 3.8675, 3.722307082, 3.44,3.506923077, 3.642147819, 3.586346154, 3.598342373, 3.536174915, 3.6835 ,3.631538462, 3.556333333, 3.40375, 3.472466422, 3.50907218, 3.388827812, 3.299871795, 3.415785714, 3.3875, 3.3696656, 3.432141415, 3.393812137, 3.33724359, 3.407779419, 3.340734855, 3.196735098, 3.165453381, 3.079332997, 3.025, 2.891421124, 4],
            ['Avg. Difficulty', 2.3, 2.33, 2.039791667, 0, 0, 2.6115, 3.035416667, 1.921111111, 3.063333333, 2, 2.952777778, 2.366666667, 3.169, 2.481666667, 2.295905095, 2.220668219, 2.477666667, 2.722321429, 2.365, 2.252780117, 2.101209096, 2.293796588, 2.143214286, 2.37978565, 2.422666667, 2.118872351, 2.232588515, 2.074164296, 1.709545455, 2.033828771, 4]
        ],
        type: 'bar'
    },
  color: {
      pattern: [RED, ORANGE, BLUE, YELLOW, GREEN, '#F306BB', '#9633e2']
  },
    axis: {
      x: {
        label: 'Language',
        type: 'category',
        categories:['TURK', 	'YDSH', 	'PRTG', 	'SCND', 	'PERS', 	'CHIN', 	'GREK', 	'HEBR', 	'JPAN', 	'GUJR', 	'SKRT', 	'DTCH', 	'ANEL', 	'KORN', 	'GRMN', 	'RUSS', 	'URDU', 	'LATN', 	'ROML', 	'JWST', 	'ITAL', 	'FREN', 	'HIND', 	'SPAN', 	'ARAB', 	'SAST', 	'AFRC', 	'AFST', 	'SLAV', 	'EAS', 	'Avg']
      }
    },
    legend: {
        position: 'right'
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
      categories:["F'02", "S'02", "F'03", "S'03", "F'04", "S'04", "F'05", "S'05", "F'06", "S'06", "S'07", "F'07", "S'08", "F'08", "S09", "F09", "S10", "F10", "S11", "F11", "S12", "F12", "S13", "F13", "S14", "F14", "S15"]
    },
    y: {
      label: 'Avg. Score',
      min: 2.3,
      max: 3.3
    }
  },
  legend: {
      position: 'right'
  },
  regions: [
          {axis: 'x', start: 13, end: 14},
      ]
  }
);

/**
 *
 * INITIALIZATION FUNCTIONS
 *
**/
$( document ).ready(function(){
  avgQual();
  sectQual();
  stemQual();
})
